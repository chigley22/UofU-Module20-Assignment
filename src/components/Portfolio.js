import React from "react";
import ProjectCards from "./ProjectCard";
import portfolio from "../portfolio.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/Portfolio.css";

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function Portfolio() {
  return (
    <section>
      <div className="project">
        <h1 className="title">Portfolio:</h1>
        <hr></hr>
      </div>

      <Wrapper id="card-data">
        {portfolio.map((project) => (
          <ProjectCards
            key={project.id}
            image={project.image}
            name={project.name}
            github={project.github}
            deployed={project.deployed}
            topics={project.topics}
          />
        ))}
      </Wrapper>
    </section>
  );
}

export default Portfolio;
