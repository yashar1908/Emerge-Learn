from fastapi import APIRouter
from pydantic import BaseModel
from langchain_core.messages import HumanMessage

from ..agent.graph import app

router=APIRouter(
    prefix='/api/assistant',
    tags=['assistant']
)

class ChatRequest(BaseModel):
    message:str

class ChatResponse(BaseModel):
    message:str

@router.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    result = app.invoke({
        "messages" : [
            HumanMessage(content=request.message)
        ]  
    })

    response = result["messages"][-1]

    return ChatResponse(message=response.content)