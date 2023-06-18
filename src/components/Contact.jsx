import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
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
    <div className="flex flex-col mb-10 mx-auto min-h-screen" data-aos="fade">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/17e26fce-5d6a-476b-a0eb-6a581b76266a"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <div className="flex items-center justify-center flex-col text-center p-7">
            <h1
              ref={typingSubRef}
              className="font-russo-one text-4xl mb-5 md:text-4xl dark:text-white mb-1 md:mb-3 font-bold overflow-hidden whitespace-nowrap border-r-4 border-r-black"
            >
              Contact
            </h1>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white dient-to-r bg-black drop-shadow-md hover:bg-gray-500"
          >
            Lets work!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
