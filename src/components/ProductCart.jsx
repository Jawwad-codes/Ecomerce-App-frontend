/** @format */

import React from "react";
import StarRatingText from "./StarRattingtext";
import { Link } from "react-router-dom";

const ProductCart = ({ List }) => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 gap-4 mt-4 mb-2 ">
        {List.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col gap-4 w-90 bg-white rounded-lg shadow p-4"
          >
            <div className="absolute bottom-1/4 right-4 text-xl text-gray-700 hover:text-black cursor-pointer border px-2 py-1 hover:bg-gray-600 rounded-md">
              <Link to="/cart" state={{ product: item }}>
                <i className="fa-regular fa-heart"></i>
              </Link>
            </div>

            <div className="w-full h- mx-auto ">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-contain rounded-md"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-black text-xl font-bold">
                  {item.discountPrice || item.price}
                </span>
                <span className="text-gray-500 line-through text-lg">
                  {item.actualPrice}
                </span>
              </div>
              <h1 className="text-lg font-semibold text-gray-800 w-52">
                {item.title || item.name || item.description}
              </h1>

              <div className="flex items-center gap-3 text-sm text-gray-600">
                <StarRatingText rating={4} />
                <span className="text-yellow-600">{item.rating_no}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCart;
