import React from 'react';
import "./resume.css";

const Resume = () => {

    const downloadResume = () => {
        const resumePath = process.env.PUBLIC_URL + "Resume.pdf";

        const link = document.createElement("a");
        link.href = resumePath;
        link.download = "resume.pdf";
        link.click();
    }
    return (
        <div className="resume">
            <button onClick={downloadResume}>Download Resume</button>
        </div>
    )
};

export default Resume;
