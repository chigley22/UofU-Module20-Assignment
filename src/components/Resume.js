import React from "react";
import "../assets/styles/Resume.css";
import pdf from "../assets/styles/ColtonResume1.pdf";

function Resume() {
  return (
    <div id="resume">
      <h1>Resume:</h1>
      <a href={pdf}>Click here for my pdf</a>
    </div>
  );
}

export default Resume;
