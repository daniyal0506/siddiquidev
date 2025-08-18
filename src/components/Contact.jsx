import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
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
            <h1 className="font-russo-one text-4xl mb-5 md:text-4xl dark:text-white mb-1 md:mb-3 font-bold">
              Contact
            </h1>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-md focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-md focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-md focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gray-900 dark:bg-gray-100 dark:text-black drop-shadow-md hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors duration-300"
          >
            Lets work!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
