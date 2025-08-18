import React from "react";

function PortfolioItem({ title, imgUrl, stack, link, description }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-300"
    >
      <div className="relative">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {stack.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default PortfolioItem;
