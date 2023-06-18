import React from "react";

function ExperienceItem({ year, title, duration, details, link }) {
  return (
    <li>
      <div className="flex-start flex items-center pt-3">
        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
        <p className="text-sm text-neutral-500 dark:text-neutral-300 bg-black text-white p-0.5 rounded-sm mr-1.5 font-roboto-mono font-bold">
          {year}
        </p>
        <div classNameName="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
          {duration}
        </div>
      </div>
      <div className="mb-6 ml-4 mt-2">
        <h4 className="mb-1.5 text-xl font-semibold mr-3">{title}</h4>
        {link && (
          <a href={link} target="_blank">
            <p className="text-sm text-neutral-500 dark:text-neutral-300 text-blue-300 p-0.5 rounded-sm mr-1.5 font-roboto-mono">
              view work
            </p>
          </a>
        )}
        <p className="mb-3 text-neutral-500 dark:text-neutral-300">{details}</p>
      </div>
    </li>
  );
}

export default ExperienceItem;
