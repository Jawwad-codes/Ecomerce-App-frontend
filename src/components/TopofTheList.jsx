/** @format */

import React from "react";

const TopofTheList = () => {
  const TopList = ["Home", "Clothing", "Men's wear", "Summer clothing"];

  return (
    <div className="container mx-auto px-2 2xl:px-2 pt-5">
      <ul className="flex gap-2 items-center list-none">
        {TopList.map((item, index) => (
          <li
            className="text-gray-500 font-medium cursor-pointer hover:text-blue-700 flex items-center mr-2"
            key={index}
          >
            {item}

            <span>
              {" "}
              <i className="ri-arrow-drop-right-line text-[30px] text-gray-500 ml-2 "></i>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopofTheList;
