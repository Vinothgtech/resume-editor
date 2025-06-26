# Resume Editor – Internship Assignment

This project is a web-based Resume Editor developed as part of a Frontend Development Internship assignment. It allows users to upload, edit, enhance, save, and download resume data, with a React frontend and FastAPI backend.

---

## 🔧 Tech Stack

- **Frontend:** React.js, Axios
- **Backend:** Python FastAPI
- **Tools:** FileSaver.js for downloading JSON

---

## 📁 Project Structure

resume-editor/
├── frontend/ # React.js frontend
├── backend/ # FastAPI backend
└── README.md



---

## 🚀 How to Run the Project

### 🔹 Frontend Setup

```bash
cd frontend
npm install
npm start

Runs at: http://localhost:3000


🗂️ Upload Resume
Allows users to upload .pdf or .docx files (simulated).

Parses and displays mock data for editing.

✏️ Edit Resume Content
Editable fields for:

Full Name

Summary

Experience

Education

Skills

Users can add or remove items dynamically.

💡 Enhance with AI
Each section has an "Enhance with AI" button.

Sends content to the backend (/ai-enhance) and receives an improved version (mocked).

Updates the section with the enhanced text.

💾 Save Resume
Saves the entire resume data to the backend via POST /save-resume.

Uses JSON format for simplicity.

⬇️ Download Resume
Users can download their final resume as a .json file.

Useful for saving or transferring data later.

🔗 Frontend–Backend Integration
React frontend communicates with FastAPI backend via Axios.

Cross-Origin Resource Sharing (CORS) enabled for smooth local development.


## 🧪 How to Use the App

1. Start the backend server (`uvicorn main:app --reload --port 8000`)
2. Start the frontend (`npm start`)
3. On the web app:
   - Click "Upload Resume" (uses dummy content)
   - Edit any field (name, summary, etc.)
   - Click "Enhance with AI" to simulate improvement
   - Save your resume to backend
   - Download the resume as a `.json` file




👨‍💻 Submitted by
Vinoth Kumar
Frontend Developer

📌 Assignment By
Interview Ghost
