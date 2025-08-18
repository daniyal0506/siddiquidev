import React, { useEffect } from "react";
import ProjectView from "./ProjectsView";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-24" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent works and experiments
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <ProjectView />
        </div>
      </div>
    </div>
  );
}

export default Projects;
