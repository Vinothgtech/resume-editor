import React, { useState } from 'react';
import './App.css';
import ResumeUpload from './components/ResumeUpload';
import ResumeEditor from './components/ResumeEditor';
import ResumeDownloader from './components/ResumeDownloader';

function App() {
  const [resumeData, setResumeData] = useState({
    name: '',
    summary: '',
    experience: [],
    education: [],
    skills: [],
  });

  return (
    <div className="App" style={{ padding: 20 }}>
      <h2>Resume Editor</h2>
      <ResumeUpload setResumeData={setResumeData} />
      <ResumeEditor resumeData={resumeData} setResumeData={setResumeData} />
      <ResumeDownloader resumeData={resumeData} />
    </div>
  );
}

export default App;

