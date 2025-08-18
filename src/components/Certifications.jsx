import React, { useEffect } from "react";
import certifications from "../data/certifications";
import CertificationItem from "./CertificationItem";
import AOS from "aos";
import "aos/dist/aos.css";

function Certifications() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-24 pb-32" id="certifications">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Professional certifications and achievements
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
          {certifications.map((item, index) => (
            <CertificationItem
              key={index}
              name={item.name}
              subtitle={item.subtitle}
              date={item.date}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
