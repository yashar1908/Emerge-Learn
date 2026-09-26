from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes.assistant import router as assistant_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/health')
def health_check():
    return { "status" : "ok" }


app.include_router(assistant_router)