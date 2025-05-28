/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/Productcontex";

const RecomandedItems = () => {
  const { Fashion } = useContext(ProductContext);

  return (
    <div className="w-full px-3 sm:px-6 xl py-10 -mb-5">
      <div className="container mx-auto">
        <h1 className="text-xl font-semibold md:text-2xl md:font-bold mb-8">
          Recommended Items
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {Fashion.map((item) => (
            <Link
              to={`/product/${item.id}`}
              state={{ product: item }}
              key={item.id}
              className="group bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={`Go to product page for ${item.description}`}
            >
              <div>
                <div className="relative bg-white">
                  <img
                    src={item.img}
                    alt={item.description}
                    className="w-full h-50 object-cover bg-gray-100"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 min-h-20 flex flex-col">
                  <p className="text-black text-lg font-semibold">
                    {item.price}
                  </p>
                  <p className="text-gray-700 text-sm w-36 mt-2 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecomandedItems;
