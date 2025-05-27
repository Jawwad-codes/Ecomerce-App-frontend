/** @format */

import React, { useContext } from "react";
import HomeAndElectronicsCom from "./HomeAndElectronicsCom";
import BannerSection from "./BannerSection";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/Productcontex";
const HomeandOutdoor = () => {
  const { Interier } = useContext(ProductContext);

  return (
    <div className="px-4 lg:px-[7.8%] py-10">
      <div className="md:hidden mb-4">
        <h1 className="text-xl font-semibold text-black">Home and Outdoor</h1>
      </div>

      <div className="container mx-auto overflow-hidden rounded-md">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:flex w-full md:w-[30%] h-36">
            <BannerSection
              image="/image92.png"
              titleLines={["Home and", "outdoor"]}
              buttonText="Source now"
            />
          </div>
          <div className="flex-1">
            <HomeAndElectronicsCom Items={Interier} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeandOutdoor;
