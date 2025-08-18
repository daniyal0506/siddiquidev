import React from "react";
import portfolio from "../data/projects.js";
import ProjectsItem from "./ProjectsItem";

function Portfolio() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolio.map((project, idx) => (
        <ProjectsItem
          key={idx}
          imgUrl={project.imgUrl}
          title={project.title}
          stack={project.stack}
          link={project.link}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default Portfolio;
