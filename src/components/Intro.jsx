import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

function Intro() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="min-h-screen py-16 " data-aos="fade-down">
      <div className="flex flex-col items-center justify-center mb-10 text-center p-3">
        <div className="flex flex-row items-center justify-center mb-10 space-x-4">
          <a href="https://github.com/daniyal0506" target="_blank">
            <img
              className="w-6 h-6 mt-1"
              src="./assets/github-logo.png"
              alt="github-logo"
            />
          </a>
          <a href="https://www.linkedin.com/in/daniyalsiddiq/" target="_blank">
            <img
              className="w-6 h-6"
              src="./assets/linkedin-logo.png"
              alt="linkedin-logo"
            />
          </a>
        </div>
        <h1 className="font-russo-one text-4xl md:text-4xl sm:text-xl dark:text-white mb-1 md:mb-3 font-bold overflow-hidden whitespace-nowrap animate-typing border-r-4 border-r-black">
          Daniyal Siddiqui 👋
        </h1>
        <p className="font-roboto-mono text-base md:text-xl mb-3 font-medium">
          Aspiring Software Engineer/ CS Student
        </p>
        <div className="flex items-center justify-center">
          <img
            className="h-64 w-64 rounded-full border-2 border-white shadow-xl transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-110 duration-300"
            src="./assets/me-img.jpeg"
            alt="Profile"
          />
        </div>
      </div>

      <div className="text-sm max-w-xl mx-auto mb-6 font-bold text-center">
        <p>
          I'm a junior computer science student at the University of Illinois -
          Chicago. In my free time, I love playing basketball, hanging out with
          friends, and taking photos. Over the last couple of years, I've had
          the opportunity to learn a variety of programming languages including
          Python, C++, and Java/JavaScript.
        </p>
        <br />
        <p>
          Web development has been a recent interest of mine, and I've really
          enjoyed messing around with it, especially using React and Node.js. I
          hope this website is a proper representation of the accomplishments
          that I have made over the last few years!
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 m-5">
        <FontAwesomeIcon icon={faAnglesDown} bounce size="lg" />
      </div>
    </div>
  );
}

export default Intro;
