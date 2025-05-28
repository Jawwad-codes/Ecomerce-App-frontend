/** @format */

import React from "react";

const ShopNow = () => {
  return (
    <section className="w-full px-4 sm:px-6  py-10">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-blue-500 to-blue-800 text-white rounded-md px-6 sm:px-10 lg:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold">
              Super discount on more than 100 USD
            </h1>
            <p className="text-sm sm:text-base mt-2 opacity-80">
              Have you ever finally just write dummy info
            </p>
          </div>
          <div>
            <button className="bg-orange-500 text-white text-sm sm:text-base font-semibold px-5 py-2 rounded hover:bg-orange-600 transition">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopNow;
