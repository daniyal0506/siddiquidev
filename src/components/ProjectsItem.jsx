import React from "react";

function PortfolioItem({ title, imgUrl, stack, link, description }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden relative group block"
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full object-cover cursor-pointer"
        style={{ aspectRatio: "16/9" }}
      />
      <div className="p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
          {stack.map((item) => (
            <span
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
              key={item}
            >
              {item}
            </span>
          ))}
        </p>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 text-white justify-center flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="flex items-center justify-start h-full px-4 pb-4 font-roboto-mono">
            💡
            <br />
            {description}
          </div>
        </div>
      </div>
    </a>
  );
}

export default PortfolioItem;
