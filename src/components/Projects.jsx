import React, { useEffect, useRef } from "react";
import ProjectView from "./ProjectsView";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  const typingSubRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            typingSubRef.current.classList.add("animate-typingSub");
            observer.disconnect(); // Disconnect the observer once animation plays
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(typingSubRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="flex items-center justify-center p-16 flex-wrap align-center text-center min-h-screen"
      data-aos="fade"
    >
      <div className="flex items-center justify-center flex-col text-center">
        <h1
          ref={typingSubRef}
          className="font-russo-one text-4xl mb-5 md:text-4xl dark:text-white mb-1 md:mb-3 font-bold overflow-hidden whitespace-nowrap border-r-4 border-r-black"
        >
          Projects
        </h1>
        <ProjectView />
      </div>
    </div>
  );
}

export default Projects;
