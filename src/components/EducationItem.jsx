import React from "react";

function EducationItem({ year, institution, degree, image, status, honors }) {
  return (
    <li>
      <div className="flex-start flex items-center pt-3">
        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
        <p className="text-sm text-neutral-500 dark:text-neutral-300 bg-gray-900 dark:bg-gray-100 text-white dark:text-black p-0.5 rounded-sm mr-1.5 font-roboto-mono font-bold">
          {year}
        </p>
      </div>
      <div className="mb-6 ml-4 mt-2">
        <div className="flex items-start gap-4">
          <img
            src={image}
            alt={institution}
            className="w-16 h-16 object-contain bg-white dark:bg-gray-100 rounded-lg p-2 shadow-md flex-shrink-0"
          />
          <div className="flex-1">
            <h4 className="mb-1.5 text-xl font-semibold mr-3 text-gray-900 dark:text-white">{degree}</h4>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
              {institution}
            </p>
            {status && (
              <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mb-2 ${
                status === 'Incoming' 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                  : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
              }`}>
                {status}
              </span>
            )}
            {honors && (
              <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                🎓 {honors}
              </p>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default EducationItem;
