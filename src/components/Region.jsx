/** @format */

import React from "react";
import { countries } from "./Flagdropdown";

const Region = () => {
  return (
    <div className="w-full  py-10">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-5 sm:mx-auto px-5 md:text-left md:px-0">
          Suppliers by region
        </h1>

        <div className="grid grid-cols-2 min-[450px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-2 sm:px-4 md:px-4 ">
          {countries.map((country) => (
            <div
              key={country.code}
              className="flex items-center gap-3 p-3   rounded-lg transition-colors duration-200   hover:shadow-md"
            >
              <div className="flex-shrink-0">
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-8 h-6 object-cover border border-gray-200 rounded-sm"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden">
                <h3 className="font-medium text-gray-800 truncate">
                  {country.name}
                </h3>
                <p className="text-gray-500 text-sm truncate">{country.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Region;
