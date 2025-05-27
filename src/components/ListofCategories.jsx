/** @format */

import React from "react";

const ListofCategories = () => {
  const categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ];

  return (
    <>
      <div className="hidden md:block min-w-[18%] px-3">
        <div className="flex flex-col gap-1">
          <ul className="space-y-2">
            {categories.map((item, index) => (
              <li
                key={index}
                className={`pb-3.5 text-lg rounded-sm cursor-pointer text-gray-500 transition-colors duration-200 bg-white hover:bg-[#E5F1FF] px-2 `}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ListofCategories;
