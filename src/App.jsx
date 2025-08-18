import React, { useState, useEffect } from "react";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-5 right-5 p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
        aria-label="Toggle dark mode"
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-gray-800 dark:text-gray-200" />
      </button>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Intro />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
