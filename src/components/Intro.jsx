import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

function Intro() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-16 relative" data-aos="fade-up">
      <div className="max-w-4xl w-full text-center px-4">
        <div className="mb-8">
          <img
            className="h-32 w-32 rounded-full border-4 border-gray-200 dark:border-gray-700 shadow-xl mx-auto mb-6 transition-transform duration-300 hover:scale-105"
            src="./assets/me-img.jpeg"
            alt="Profile"
          />
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            Daniyal Siddiqui
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Software Engineer
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://github.com/daniyal0506"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniyalsiddiq/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </a>
          </div>
        </div>

        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          <p>
            Software Engineer based in Chicago with a passion for building things 
            that make life easier (or at least less annoying). I love solving 
            real-world problems through clean, efficient code and am always on 
            the lookout for new tools, tech, and challenges to level up my skills.
          </p>
          <p>
            I enjoy learning fast, collaborating with smart people, and turning 
            ideas into working products. Whether it's a new framework or an 
            obscure bug, I'm always curious and up for the challenge.
          </p>
          <p>
            Let's connect! I'm always open to talking tech, growth, and what's 
            next in the world of software.
          </p>
        </div>
      </div>

      <div className="absolute bottom-8">
        <FontAwesomeIcon 
          icon={faAnglesDown} 
          className="text-gray-400 dark:text-gray-600 animate-bounce" 
          size="lg" 
        />
      </div>
    </div>
  );
}

export default Intro;
