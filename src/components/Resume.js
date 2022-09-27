import React from "react";
import "../assets/styles/Resume.css";
import pdf from "../assets/resume.pdf";

function Resume() {
  return (
    <div id="resume">
      <h1>Colton Higley Resume</h1>
      <a href={pdf}>Click here for my pdf</a>
    </div>
  );
}

export default Resume;
