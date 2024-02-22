#from git import Repo
from langchain.callbacks.manager import CallbackManager
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from langchain.prompts import PromptTemplate
from langchain_community.llms import LlamaCpp
from langchain.text_splitter import Language
from langchain_community.document_loaders.generic import GenericLoader
from langchain_community.document_loaders.parsers import LanguageParser
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain.chains.question_answering import load_qa_chain
from langchain_openai import OpenAIEmbeddings
import dotenv

# Load environment variables
dotenv.load_dotenv()

# Knowledge files repo
repo_path = "Custom LLM Version/repo" #Repo or bucket containing the files.

#If you want to implement a github repo
#repo = Repo.clone_from("https://github.com/GaboRM9/qp-js-knowledge", to_path=repo_path)

# Load documents
loader = GenericLoader.from_filesystem(
    repo_path,
    glob="**/*",
    suffixes=[".js"],
    exclude=["**/non-utf8-encoding.js"],
    parser=LanguageParser(language=Language.JS, parser_threshold=500),
)

documents = loader.load()
len(documents)

# Split documents
js_splitter = RecursiveCharacterTextSplitter.from_language(
    language=Language.JS, chunk_size=2000, chunk_overlap=200
)
texts = js_splitter.split_documents(documents)

print(texts)

# Initialize the document retriever only if texts is not empty
if texts:
    db = Chroma.from_documents(texts, OpenAIEmbeddings(disallowed_special=()))
    retriever = db.as_retriever(search_type="mmr", search_kwargs={"k": 8})
else:
    print("Empty repo or bucket, please upload files or verify JS extension.")
    # Handle the case where no texts are available as needed for your application

# Initialize the LlamaCpp model
callback_manager = CallbackManager([StreamingStdOutCallbackHandler()])
llm = LlamaCpp(
    model_path="Custom LLM Version/model/codellama-7b.Q5_K_S.gguf",
    n_ctx=5000,
    n_gpu_layers=1,
    n_batch=512,
    f16_kv=True,
    callback_manager=callback_manager,
    verbose=True,
)

# Define the prompt template
template = """
You are QxScripter, a bot desinged to help QuestionPro employees to develope JS scripts to use on their survey logic.
You must base your responses usinng the available context:{context}, dont invent code or functions, use the available functions on context to make examples.
Keep your responses short and prioritize giving the code example over explaining it.
Question:{question}
Helpful answer:"""  
QA_CHAIN_PROMPT = PromptTemplate(input_variables=["context", "question"], template=template)

# Initialize the QA chain
chain = load_qa_chain(llm, chain_type="stuff", prompt=QA_CHAIN_PROMPT)

# Retrieve documents for a question only if the retriever is initialized
if 'retriever' in locals():
    question = "How can I hide the Q2 if var <1?"
    docs = retriever.get_relevant_documents(question)

    # Run the QA chain
    answer = chain({"input_documents": docs, "question": question}, return_only_outputs=True)
    print(answer)
else:
    print("Document retriever not initialized. Unable to process the question.")
