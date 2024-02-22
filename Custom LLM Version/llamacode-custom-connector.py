#import dotenv
from git import Repo
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
from langchain import hub
from langchain.chains import LLMChain
from langchain.memory import ConversationSummaryMemory

# Load environment variables
#dotenv.load_dotenv()

# Clone the repository
repo_path = "Custom LLM Version/Knowledge"
repo = Repo.clone_from("https://github.com/GaboRM9/qp-js-knowledge", to_path=repo_path)

# Load documents
loader = GenericLoader.from_filesystem(
    repo_path + "/libs/langchain/langchain",
    glob="**/*",
    suffixes=[".js"],
    exclude=["**/non-utf8-encoding.js"],
    parser=LanguageParser(language=Language.js, parser_threshold=500),
)
documents = loader.load()
print(documents)
# Split documents
js_splitter = RecursiveCharacterTextSplitter.from_language(
    language=Language.js, chunk_size=2000, chunk_overlap=200
)
texts = js_splitter.split_documents(documents)

# Initialize the document retriever
db = Chroma.from_documents(texts, OpenAIEmbeddings(disallowed_special=()))
retriever = db.as_retriever(search_type="mmr", search_kwargs={"k": 8})

# Initialize the LlamaCpp model
callback_manager = CallbackManager([StreamingStdOutCallbackHandler()])
llm = LlamaCpp(
    model_path="path/to/your/model",
    n_ctx=5000,
    n_gpu_layers=1,
    n_batch=512,
    f16_kv=True,
    callback_manager=callback_manager,
    verbose=True,
)

# Define the prompt template
template = """..."""  # Define your prompt template here
QA_CHAIN_PROMPT = PromptTemplate(input_variables=["context", "question"], template=template)

# Initialize the QA chain
chain = load_qa_chain(llm, chain_type="your_chain_type", prompt=QA_CHAIN_PROMPT)

# Retrieve documents for a question
question = "Your question here"
docs = retriever.get_relevant_documents(question)

# Run the QA chain
answer = chain({"input_documents": docs, "question": question}, return_only_outputs=True)
print(answer)

