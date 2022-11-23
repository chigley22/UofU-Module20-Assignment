import React from "react";
import "../assets/styles/About_me.css";
import aboutME from "../assets/aboutmeimage.jpg";

function AboutMe() {
  return (
    <div id="aboutMe">
      <h1>About Me:</h1>
      <img src={aboutME} width="400" height="400" alt="Colton Higley" />
      <p>
        
      </p>
      <p>
      Recent graduate of the University of Utah Full Stack Web Developer
Bootcamp. Currently studying Bachelor of Information Technology at
Strayer University. As a dedicated problem solver I am excited to use my
analytical and technical skills to continue learning and thrive as an entry-level developer.

      </p>
    </div>
  );
}

export default AboutMe;
