import React from 'react';

function ResumeUpload({ setResumeData }) {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Simulate parsing file with dummy data
    const dummyData = {
      name: 'Vinoth Kumar',
      summary: 'Aspiring frontend developer with strong React skills.',
      experience: [
        { role: 'Intern', company: 'TechSoft', year: '2024-2025' }
      ],
      education: [
        { degree: 'B.E. CSE', institution: 'MSEC', year: '2025' }
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    };

    setResumeData(dummyData);
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <label>Upload Resume (.pdf/.docx): </label>
      <input type="file" accept=".pdf,.docx" onChange={handleUpload} />
    </div>
  );
}

export default ResumeUpload;
