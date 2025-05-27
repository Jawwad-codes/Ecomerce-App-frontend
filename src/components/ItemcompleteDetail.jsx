/** @format */

import React from "react";
import { useLocation } from "react-router-dom";
const ItemCompleteDetail = () => {
  const { state } = useLocation();
  const { product } = state || {};
  console.log(product);

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-3 bg-white mt-4 rounded-md shadow-lg p-6">
      <div className="flex  gap-8">
        <div className="w-[30%]">
          <div className="mb-4 w-full">
            <img
              src={product.img}
              alt={product.name}
              className="border-2 h-96 w-full object-fill rounded-md bg-gray-200"
            />
          </div>
          <div className="flex gap-2 px-4">
            {[35, 36, 37, 39, 40].map((num) => (
              <img
                key={num}
                src={`/image${num}.png`}
                alt={`Thumbnail ${num}`}
                className={
                  product
                    ? "hidden"
                    : "w-16 h-16 object-cover rounded-md cursor-pointer border"
                }
              />
            ))}
          </div>
        </div>

        <div className="w-[40%]">
          <p className="text-green-600 flex items-center mb-2 font-semibold">
            ✔ In stock
          </p>

          <h1 className="text-2xl font-bold mb-2">
            {product.name || product.description}
          </h1>

          <div className="flex items-center text-sm text-gray-600 mb-4 gap-1">
            <div className="text-orange-400 mr-2">★★★★★</div>
            <span>8.3</span>
            <span className="mx-1">
              <i class="ri-message-2-line"></i>
            </span>
            <span>32 reviews</span>
            <span className="mx-1">
              <i class="ri-store-line"></i>
            </span>
            <span>154 sold</span>
          </div>

          <div className="mb-4">
            <div className="flex items-center space-x-2 bg-red-200 px-3 justify-around py-4 ">
              <div className="flex flex-col">
                <div className="text-red-600 text-lg font-semibold">
                  {product.price || "$98.00"}
                </div>
                <span className="text-sm text-gray-600">(50–100 pcs)</span>
              </div>
              <span className="text-gray-400">|</span>
              <div className="flex flex-col">
                <div className="text-gray-800 font-medium">$90.00</div>
                <span className="text-sm text-gray-600">(100–700 pcs)</span>
              </div>
              <span className="text-gray-400 ">|</span>
              <div className="flex flex-col">
                <div className="text-gray-800 font-medium">$78.00</div>
                <span className="text-sm text-gray-600">(700+ pcs)</span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <p className="font-semibold">
              Price: <span className="font-normal">Negotiable</span>
            </p>
          </div>
          <hr className="mt-2 mb-2" />

          <div className="space-y-1 flex flex-col gap-4  text-gray-700">
            <p>
              <strong>Type:</strong> Classic shoes
            </p>
            <p>
              <strong>Material:</strong> Plastic material
            </p>
            <p>
              <strong>Design:</strong> Modern nice
            </p>
          </div>
          <hr className="mt-2 mb-2" />

          <div className="mb-4 flex justify-between">
            <p className="font-semibold">Customization:</p>
            <p className="text-gray-600">
              Customized logo and design custom packages
            </p>
          </div>

          <div className="mb-4 flex gap-24">
            <p className="font-semibold">Production:</p>
            <p className="text-gray-600">Refund Policy</p>
          </div>

          <div className="mb-6 flex gap-24">
            <p className="font-semibold">Warranty:</p>
            <p className="text-gray-600">2 years full warranty</p>
          </div>
          <hr className="mt-2" />
        </div>

        <div className="w-[25%]">
          <div className="">
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="flex  gap-2 mb-2">
                <div className="w-14 h-15 bg-[#C9F2F2] text-[#4AA6A6] font-bold rounded-md flex items-center justify-center text-sm">
                  R
                </div>
                <div className="">
                  <h2 className="text-xl font-bold ">Supplier</h2>
                  <h3 className="font-bold text-lg">QuanjoT Trading LLC</h3>
                </div>
              </div>

              <hr />
              <div className="mt-2 space-y-1 text-sm text-gray-700">
                <p className="flex gap-2 text-gray-600 font-medium">
                  {" "}
                  <span>
                    <img width={15} src="/flags/germany.png" alt="" />
                  </span>{" "}
                  Germany, Berlin
                </p>
                <p className="text-gray-600 font-medium flex gap-2">
                  <span>
                    <i class="ri-verified-badge-line text-green-600"></i>
                  </span>
                  Verified Seller
                </p>
                <p className="flex gap-2 text-gray-600 font-medium">
                  {" "}
                  <span>
                    <i class="ri-global-line text-green-600"></i>
                  </span>
                  Worldwide shipping
                </p>
                <div className="flex flex-col mx-auto gap-4 pt-3">
                  <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">
                    Send inquiry
                  </button>
                  <button className="border border-gray-300 py-2 px-6 rounded-md hover:bg-gray-50 transition">
                    Seller's profile
                  </button>
                </div>
              </div>
            </div>

            <p className="text-center mt-3 text-blue-600">
              <span>
                <i class="ri-heart-line"></i>
              </span>{" "}
              Save for Later
            </p>
          </div>

          <div className="text-center mt-6 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default ItemCompleteDetail;
