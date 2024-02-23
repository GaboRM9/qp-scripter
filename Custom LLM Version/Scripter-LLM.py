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

# Load environment variables (for OpenAI Embeddings)
dotenv.load_dotenv()

# Knowledge files repo
repo_path = "Custom LLM Version/Knowledge" #Repo or bucket containing the files.

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
    language=Language.JS, chunk_size=5000, chunk_overlap=200
)
texts = js_splitter.split_documents(documents)

print(texts)

# Initialize the document retriever only if texts is not empty - Creation of vector db
if texts:
    db = Chroma.from_documents(texts, OpenAIEmbeddings(disallowed_special=()))
    retriever = db.as_retriever(search_type="mmr", search_kwargs={"k": 8})
else:
    print("Empty texts, please upload files or verify JS extension.")
    # Handle the case where no texts are available as needed for your application

# Initialize the LlamaCpp model
callback_manager = CallbackManager([StreamingStdOutCallbackHandler()])
llm = LlamaCpp(
    model_path="Custom LLM Version/model/codellama-7b.Q5_K_S.gguf", #You can download this model here: https://huggingface.co/TheBloke/Llama-2-Coder-7B-GGUF
    n_ctx=1024,  # Reduced context window to save memory
    n_gpu_layers=2,  # Keep GPU layers minimal due to integrated GPU and limited RAM
    n_batch=1,  # Small batch size to fit within RAM constraints
    f16_kv=True,  # Use 16-bit floating point for key/value matrices to reduce memory usage
    callback_manager=callback_manager,
    verbose=True,
)

# Define the prompt template
#System Prompt:
system_prompt =  """Answer the questions of the user based on the given context:{context}, if you dont know the answer just tell it, dont invent stuff or functions.
keep the content of the answer concise and short and related specifically to the user question:{question}"""

instruction = """Question:{question}
Helpful answer:"""  


# LLAMA PROMPT TEMPLATE       
B_INST, E_INST = "[INST]", "[/INST]"
B_SYS, E_SYS = "<<SYS>>\n", "\n<</SYS>>\n\n"
        
SPECIAL_TAGS = [B_INST, E_INST, "<<SYS>>", "<</SYS>>"]
        
def prompt_format():
    SYSTEM_PROMPT = B_SYS + system_prompt + E_SYS
    prompt_template = B_INST + SYSTEM_PROMPT + instruction + E_INST
    return prompt_template

template = prompt_format()
print(template)

QA_CHAIN_PROMPT = PromptTemplate(input_variables=["context", "question"], template=template)

# Initialize the QA chain
chain = load_qa_chain(llm, chain_type="stuff", prompt=QA_CHAIN_PROMPT)

# Retrieve documents for a question only if the retriever is initialized
if 'retriever' in locals():
    question = "How can I update a custom variable?"
    docs = retriever.get_relevant_documents(question)

    # Run the QA chain
    answer = chain({"input_documents": docs, "question": question}, return_only_outputs=True)
    print(answer)
else:
    print("Document retriever not initialized. Verify Knowledge repo access - Unable to process the question.")
