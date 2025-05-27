/** @format */

import React from "react";

const AccountLayout = () => {
  return (
    <>
      <div className="hidden md:block ml-3 ">
        <div className="flex flex-col">
          <div className="bg-blue-100 p-4 rounded-lg text-center w-64">
            <div className="flex  items-center gap-2 min-w-[30%]">
              <div className="w-10 h-10 bg-[#E3F0FF] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a5 5 0 100 10A5 5 0 0010 2zm-7 14a7 7 0 0114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="text-sm text-left text-gray-800">
                <div className="font-medium">Hi, user</div>
                <div>let's get stated</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-3 mt-4">
              <button className="w-full bg-[#127FFF] text-white rounded-md py-2 text-sm font-medium hover:bg-blue-700 transition">
                Join now
              </button>
              <button className="w-full border border-blue-300 text-blue-600 rounded-md py-2 text-sm font-medium bg-white transition">
                Log in
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-lg mt-5">
          <div className="px-9  bg-[#F38332] mb-3 rounded-md py-5 ">
            <h1>
              Get US $10 off <br /> with a new <br /> supplier
            </h1>
          </div>
          <div className="bg-[#55BDC3] py-5 rounded-md px-9">
            <h1>
              Send quotes with <br /> supplier <br /> preferences
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountLayout;
