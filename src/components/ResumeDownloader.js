import React from 'react';
import { saveAs } from 'file-saver';

function ResumeDownloader({ resumeData }) {
  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(resumeData, null, 2)], {
      type: 'application/json'
    });
    saveAs(blob, 'my_resume.json');
  };

  return (
    <div style={{ marginTop: 20 }}>
      <button onClick={handleDownload}>Download Resume (.json)</button>
    </div>
  );
}

export default ResumeDownloader;
