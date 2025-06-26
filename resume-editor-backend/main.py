from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Enable CORS (allow frontend access from any origin)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory store for resume data
saved_resume = {}

# Pydantic models
class EnhanceRequest(BaseModel):
    section: str
    content: str

class SaveRequest(BaseModel):
    resume: dict

#  Root endpoint
@app.get("/")
def read_root():
    return {"message": "Resume Editor Backend is running "}

#  Enhance with AI (mock)
@app.post("/ai-enhance")
def ai_enhance(data: EnhanceRequest):
    improved = f"{data.content.strip()} (Enhanced by AI ✨)"
    return {"improved": improved}

#  Save resume JSON
@app.post("/save-resume")
def save_resume(data: SaveRequest):
    global saved_resume
    saved_resume = data.resume
    return {"message": "Resume saved successfully"}
