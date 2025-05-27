/** @format */

import React from "react";
import "remixicon/fonts/remixicon.css";

const NewsLetter = () => {
  return (
    <div className="w-full bg-[#EFF2F4] py-10 px-4">
      <div className="max-w-5xl mx-auto bg-gray-100 flex flex-col items-center justify-center gap-4 p-6 rounded-md">
        <h4 className="text-xl font-bold text-gray-950 text-center">
          Subscribe on our newsletter
        </h4>
        <p className="text-sm text-gray-500 text-center w-full ">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>

        <div className="flex w-full max-w-md p-1 rounded-md justify-center">
          <div className="flex items-center px-3 bg-white rounded-l-md border border-gray-300 w-full">
            <i className="ri-mail-line text-gray-400"></i>
            <input
              type="email"
              placeholder="Email"
              className="outline-none px-2 py-2 bg-transparent text-sm w-full"
            />
          </div>
          <button className="ml-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 rounded-md text-sm font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
