/** @format */

import React, { useContext, useState } from "react";
import StarRatingText from "./StarRattingtext";
import ProductCart from "./ProductCart";
import { ProductContext } from "../context/Productcontex";
import PaginatonUI from "./PaginatonUI";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const { isGridview, setGridview, paginatedProducts } =
    useContext(ProductContext);
  return (
    <div>
      <div className="h-14 rounded-sm bg-white border-l-2 flex justify-between px-3 items-center mt-2.5 border">
        <div>
          <h1 className="font-normal text-lg">
            12,911 items in
            <span className="text-xl font-medium"> Mobile accessory</span>
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex gap-2 items-center">
            <input type="checkbox" className="rounded-sm" />
            <p>Verified Only</p>
          </div>
          <div className="flex gap-2 items-center">
            <select
              id="brand"
              className="border border-white rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Feature</option>
              <option value="battery">Battery</option>
              <option value="warranty">Warranty</option>
              <option value="colors">Colors</option>
              <option value="memory">Memory</option>
            </select>
          </div>
          <div className="flex gap-2 rounded-sm px-2 items-center bg-white py-2">
            <i
              onClick={() => setGridview(true)}
              className="fa-solid fa-filter hover:bg-gray-400 px-3 py-2 rounded"
            ></i>
            |
            <i
              onClick={() => setGridview(false)}
              className="fa-solid fa-bars block hover:bg-gray-400 px-3 py-2 rounded"
            ></i>
          </div>
        </div>
      </div>

      {isGridview ? (
        <ProductCart List={paginatedProducts} />
      ) : (
        <div className="grid grid-cols-1 gap-4 mt-4 mb-2">
          {paginatedProducts.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 bg-white rounded-lg shadow p-4 items-start"
            >
              <div className="w-44 h-52">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>

              <div className="flex-1 space-y-2">
                <h1 className="text-lg font-semibold text-gray-800">
                  {item.title || item.name}
                </h1>
                <div className="flex items-center gap-3">
                  <span className="text-black text-xl font-bold">
                    {item.discountPrice || item.price}
                  </span>
                  <span className="text-gray-500 line-through text-lg">
                    {item.actualPrice}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <StarRatingText rating={4} />
                  <span className="text-yellow-600">{item.rating_no}</span>
                  <span className="text-blue-600">{item.order_no} orders</span>
                  <span className="text-green-600">Free Shipping</span>
                </div>

                <p className="text-gray-600 w-8/12 text-sm">
                  {item.description}
                </p>

                <span className="text-blue-600 text-sm font-medium cursor-pointer hover:underline">
                  {item.details}
                </span>
              </div>

              <div className="text-xl text-gray-700 hover:text-black cursor-pointer border px-2 py-1 hover:bg-gray-600 rounded-md">
                <Link to="/cart" state={{ product: item }}>
                  <i className="fa-regular fa-heart"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      <PaginatonUI />
    </div>
  );
};

export default ProductsList;
