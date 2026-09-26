import os
from langchain_groq import ChatGroq
from langchain_core.messages import AIMessage
from .state import AgentState
from dotenv import load_dotenv

load_dotenv()

# Initialize the LLM outside the function so it's only created once.
# It automatically looks for GROQ_API_KEY in your environment variables.
llm = ChatGroq(model="allam-2-7b") 

def tutor_node(state: AgentState) -> dict:
    """
    This node reads the current messages from the state, 
    sends them to the LLM, and returns the LLM's response.
    """
    # 1. Read the current messages from the state
    messages = state["messages"]
    
    # 2. Pass the messages to the LLM
    response = llm.invoke(messages)
    
    # 3. Return the update. Because of `operator.add` in our state definition,
    # this new message will be appended to the existing messages list.
    return {"messages": [response]}