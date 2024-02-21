#Dependencies - pip install --upgrade --quiet  langchain-openai tiktoken chromadb langchain

# Set env var OPENAI_API_KEY or load from a .env file
# import dotenv

# dotenv.load_dotenv()

# from git import Repo
from langchain.text_splitter import Language
from langchain_community.document_loaders.generic import GenericLoader
from langchain_community.document_loaders.parsers import LanguageParser
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings
from langchain.chains import ConversationalRetrievalChain
from langchain.memory import ConversationSummaryMemory
from langchain_openai import ChatOpenAI

##Clone
repo_path = "/Users/rlm/Desktop/test_repo"
##repo = Repo.clone_from("https://github.com/langchain-ai/langchain", to_path=repo_path)

##Load

loader = GenericLoader.from_filesystem(
    repo_path + "/libs/langchain/langchain",
    glob="**/*",
    suffixes=[".js"],
    exclude=["**/non-utf8-encoding.js"],
    parser=LanguageParser(language=Language.PYTHON, parser_threshold=500),
)
documents = loader.load()
len(documents)

#Split the documents

js_splitter = RecursiveCharacterTextSplitter.from_language(
    language=Language.PYTHON, chunk_size=2000, chunk_overlap=200
)
texts = js_splitter.split_documents(documents)
len(texts)

##RAG DB Query

db = Chroma.from_documents(texts, OpenAIEmbeddings(disallowed_special=()))
retriever = db.as_retriever(
    search_type="mmr",  # Also test "similarity"
    search_kwargs={"k": 8},
)

##TESTING THE CUSTOM LLM

llm = ChatOpenAI(model_name="gpt-4") ##Here we need to adapt or create a conecto for llamaCode.
memory = ConversationSummaryMemory(
    llm=llm, memory_key="chat_history", return_messages=True
)
qa = ConversationalRetrievalChain.from_llm(llm, retriever=retriever, memory=memory)

##Adapt prompt to llamaCode syntax

question = "How can I update a custom variable to 1?"
result = qa(question)
result["answer"]

questions = [
    "What is a branch logic on JS?",
    "Hide the next button",
    "Hide Q2,Q4,Q7 if custom1 is less than 1",
]

for question in questions:
    result = qa(question)
    print(f"-> **Question**: {question} \n")
    print(f"**Answer**: {result['answer']} \n")