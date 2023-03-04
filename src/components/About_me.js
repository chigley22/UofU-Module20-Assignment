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
      <div id="aboutMeText">
        <p>
      &emsp;Throughout my life, I have been known for being able to create, build, and persevere through any project. I started rebuilding dirt bikes in my garage as a young boy, eventually enrolling in diesel mechanic school to further my passion for taking things apart and putting them back together. I took pride in making things better than before; stronger, faster, and to my satisfaction, with more style. In school, my instructors believed in me. One particular day in class, an instructor noticed I was rebuilding a transmission and walked over, picked up the pieces, and threw them on the ground, where I was left to piece them all together and make them work again. I didn't realize it at the time, but this experience paved my resilient path and taught me that I would forever be a lifelong learner. <br></br><br></br>

&emsp;Eventually, my passion led me to the technology field, where I quickly realized my desire to create and rebuild had endless possibilities. As someone who finds themselves seeking education. I enrolled in a coding boot camp to explore this further and graduated in November 2022 from the University of Utah while working towards my Bachelor's in Software Development. I am currently working in storage solutions, combining my knowledge of technology and my drive to bring people together through its many uses. I enjoy building excitement for these products and educating my partners on the difference technology can make for their businesses.

      </p>
      </div>
    </div>
  );
}

export default AboutMe;
