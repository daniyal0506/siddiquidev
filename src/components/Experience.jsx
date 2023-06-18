import React, { useEffect, useRef } from "react";
import experience from "../data/experience";
import ExperienceItem from "./ExperienceItem";
import AOS from "aos";
import "aos/dist/aos.css";

function Experience() {
  const typingSubRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            typingSubRef.current.classList.add("animate-typingSubExp");
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
      className="flex flex-col md:flex-row justify-center my-20 min-h-screen "
      data-aos="fade"
    >
      <div className="w-full md:w-7/12">
        <div className="flex flex-col items-center justify-center mb-10 text-center">
          <div className="flex items-center justify-center flex-col text-center p-7">
            <h1
              ref={typingSubRef}
              className="font-russo-one text-4xl mb-5 md:text-4xl dark:text-white mb-1 md:mb-3 font-bold overflow-hidden whitespace-nowrap border-r-4 border-r-black"
            >
              Experience
            </h1>
          </div>
        </div>
        <ol className="border-l border-neutral-300 dark:border-neutral-500">
          {experience.map((item) => (
            <ExperienceItem
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
              link={item.link}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Experience;
