import operator
from typing import TypedDict, Annotated, List
from langchain_core.messages import BaseMessage

class AgentState(TypedDict):
    # The `messages` key holds the conversation history.
    # `Annotated[..., operator.add]` tells LangGraph that when a node returns new messages,
    # it should APPEND them to the existing list, rather than overwriting the whole list.
    messages: Annotated[List[BaseMessage], operator.add]