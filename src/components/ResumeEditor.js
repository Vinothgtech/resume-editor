import React from 'react';
import axios from 'axios';

function ResumeEditor({ resumeData, setResumeData }) {
  const handleChange = (field, value) => {
    setResumeData({ ...resumeData, [field]: value });
  };

  const enhanceSection = async (section) => {
    try {
      const response = await axios.post('http://localhost:8000/ai-enhance', {
        section,
        content: resumeData[section]
      });
      setResumeData({ ...resumeData, [section]: response.data.improved });
    } catch (error) {
      alert('Error enhancing content');
    }
  };

  return (
    <div>
      <h3>Edit Resume</h3>
      <label>Name: </label>
      <input
        type="text"
        value={resumeData.name}
        onChange={(e) => handleChange('name', e.target.value)}
      /><br /><br />

      <label>Summary: </label><br />
      <textarea
        rows={4}
        cols={50}
        value={resumeData.summary}
        onChange={(e) => handleChange('summary', e.target.value)}
      />
      <button onClick={() => enhanceSection('summary')}>Enhance with AI</button>



      <button
  style={{ marginTop: '20px',marginLeft:'20px' ,backgroundColor: 'green' }}
  onClick={async () => {
    try {
      await axios.post('http://localhost:8000/save-resume', {
        resume: resumeData,
      });
      alert('Resume saved successfully!');
    } catch (error) {
      alert('Failed to save resume.');
    }
  }}
>
  Save Resume
</button>



    </div>
  );
}

export default ResumeEditor;
