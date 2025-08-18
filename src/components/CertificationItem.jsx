import React from "react";

function CertificationItem({ name, subtitle, date, image, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-contain bg-gray-50 dark:bg-gray-700"
        />
        <div className="absolute top-4 right-4 bg-black bg-opacity-70 dark:bg-white dark:bg-opacity-80 text-white dark:text-black px-3 py-1 rounded-full text-sm font-medium">
          {date}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {name}
        </h3>
        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
          {subtitle}
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CertificationItem;
