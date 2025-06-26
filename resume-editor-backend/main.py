from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# CORS setup: Allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can use ["http://localhost:3000"] for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory resume store
saved_resume = {}

# Request models
class EnhanceRequest(BaseModel):
    section: str
    content: str

class SaveRequest(BaseModel):
    resume: dict

# Routes
@app.get("/")
def read_root():
    return {"message": "Resume Editor Backend is running"}

@app.post("/ai-enhance")
def ai_enhance(data: EnhanceRequest):
    improved = f"{data.content.strip()} (Enhanced by AI ✨)"
    return {"improved": improved}

@app.post("/save-resume")
def save_resume(data: SaveRequest):
    global saved_resume
    saved_resume = data.resume
    return {"message": "Resume saved successfully"}
