/** @format */

import React from "react";
import { Link } from "react-router-dom";
const HomeAndElectronicsCom = ({ Items }) => {
  return (
    <div className="w-full">
      <div className="hidden md:grid grid-cols-4 ">
        {Items.map((item) => (
          <Link
            to={`/product/${item.id}`}
            state={{ product: item }}
            key={item.id}
            className="border border-gray-200 bg-white flex flex-col justify-between p-3 hover:bg-slate-50 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col">
              <h1 className="text-md font-medium">{item.name}</h1>
              <p className="text-lg text-gray-600 mt-2">
                From <br /> {item.price}
              </p>
            </div>
            <div className="flex justify-end mt-2">
              <img
                className="w-20 h-20 object-contain"
                src={item.img}
                alt={item.name}
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile "Source now" button */}
      <div className="md:hidden">
        <button className="text-blue-600 hover:underline flex items-center gap-1 font-medium mt-2">
          Source now
          <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  );
};

export default HomeAndElectronicsCom;
