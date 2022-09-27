import React from "react";
import "../assets/styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="header">
      <h1 id="headerTitle">developer: Colton Higley</h1>
      <div id="linkWrapper">
        <Link to="/about-me">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Header;
