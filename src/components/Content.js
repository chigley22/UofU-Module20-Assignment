import React from "react";
import "../assets/styles/Content.css";
import AboutMe from "./About_me";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import { Routes, Route } from "react-router-dom";

function Content() {
  return (
    <div id="content">
      <Routes>
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Content;
