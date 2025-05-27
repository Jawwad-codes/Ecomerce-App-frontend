/** @format */
import React from "react";
import { Link } from "react-router-dom";
import GetApp from "./GetApp";
import SocialIcons from "./SocialIcons";
import NewsLetter from "./NewsLetter";
const Footer = () => {
  return (
    <>
      <div className="hidden md:block  ">
        <div className="md:main-footer bg-white py-6 md:py-20 Lg:px-8 md:px-8 sm: flex flex-wrap   justify-evenly gap-5 items-center ">
          <div className="col1 md:flex flex-col gap-5 sm:flex-wrap">
            <div>
              <img src="logo-colored.svg" className="ml-0 h-8 md:h-10" alt="" />
            </div>
            <div>
              <p className="text-gray-600 text-sm md:text-base  w-72 font-medium">
                Best information about the company gies here but now lorem ipsum
                s
              </p>
            </div>
            <div>
              <SocialIcons />
            </div>
          </div>
          <div className="col2">
            <h5 className="text-gray-700 text-lg font-semibold">About</h5>
            <div className="About-links flex flex-col gap-2 mt-2 text-md text-gray-400 font-medium">
              <Link to={"#"}> About Us </Link>
              <Link to={"#"}> Find Store </Link>
              <Link to={"#"}> Categories </Link>
              <Link to={"#"}> Blogs </Link>
            </div>
          </div>
          <div className="col3">
            <h5 className="text-gray-700 text-lg font-semibold">Partnership</h5>
            <div className="About-links flex flex-col gap-2 mt-2 text-md text-gray-400 font-medium">
              <Link to={"#"}> About Us </Link>
              <Link to={"#"}> Find Store </Link>
              <Link to={"#"}> Categories </Link>
              <Link to={"#"}> Blogs </Link>
            </div>
          </div>
          <div className="col4">
            <h5 className="text-gray-700 text-lg font-semibold">Information</h5>
            <div className="About-links flex flex-col gap-2 mt-2 text-md text-gray-400 font-medium">
              <Link to={"#"}> Help Center </Link>
              <Link to={"#"}> Memory Refund </Link>
              <Link to={"#"}> Shipping </Link>
              <Link to={"#"}> Contact us </Link>
            </div>
          </div>
          <div className="col5">
            <h5 className="text-gray-700 text-lg font-semibold">For users</h5>
            <div className="About-links flex flex-col gap-2 mt-2 text-md text-gray-400 font-medium">
              <Link to={"#"}> Login </Link>
              <Link to={"#"}> Register </Link>
              <Link to={"#"}> Settings </Link>
              <Link to={"#"}> My Orders </Link>
            </div>
          </div>
          <div className="col6">
            <GetApp />
          </div>
        </div>

        <div className="copyRight flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-24 lg:px-56 py-4 bg-[#EFF2F4]">
          <div>
            <span className="text-gray-600 text-xs sm:text-sm md:text-base">
              © 2023 Ecommerce.
            </span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
            <img
              src="/flags/usa.png"
              alt="Language"
              className="h-5 w-6 object-cover rounded-sm"
            />
            <h5 className="text-sm sm:text-base text-gray-700 font-medium">
              English
            </h5>
            <i className="ri-arrow-up-s-line text-lg text-gray-600"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
