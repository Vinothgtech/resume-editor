from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# CORS: Allow frontend requests (React runs on localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory store for resume
saved_resume = {}

class EnhanceRequest(BaseModel):
    section: str
    content: str

class SaveRequest(BaseModel):
    resume: dict

@app.post("/ai-enhance")
def ai_enhance(data: EnhanceRequest):
    improved = f"{data.content.strip()} (Enhanced by AI ✨)"
    return {"improved": improved}

@app.post("/save-resume")
def save_resume(data: SaveRequest):
    global saved_resume
    saved_resume = data.resume
    return {"message": "Resume saved successfully"}
