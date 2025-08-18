import React, { useEffect } from "react";
import education from "../data/education";
import EducationItem from "./EducationItem";
import AOS from "aos";
import "aos/dist/aos.css";

function Education() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row justify-center my-20 min-h-screen"
      data-aos="fade"
    >
      <div className="w-full md:w-7/12">
        <div className="flex flex-col items-center justify-center mb-10 text-center">
          <div className="flex items-center justify-center flex-col text-center p-7">
            <h1 className="font-russo-one text-4xl mb-5 md:text-4xl dark:text-white mb-1 md:mb-3 font-bold">
              Education
            </h1>
          </div>
        </div>
        <ol className="border-l border-neutral-300 dark:border-neutral-500">
          {education.map((item, index) => (
            <EducationItem
              key={index}
              year={item.year}
              institution={item.institution}
              degree={item.degree}
              image={item.image}
              status={item.status}
              honors={item.honors}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Education;
