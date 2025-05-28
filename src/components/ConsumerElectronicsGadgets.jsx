/** @format */

import React from "react";
import HomeAndElectronicsCom from "./HomeAndElectronicsCom";
import BannerSection from "./BannerSection";

const ConsumerElectronicsGadgets = () => {
  const Items = [
    {
      id: "E1",
      name: "Smart Watches",
      img: "/tech/8.jpg",
      price: "USD 19",
    },
    {
      id: "E2",
      name: "Camera",
      img: "/tech/6.jpg",
      price: "USD 200",
    },
    {
      id: "E3",
      name: "Headphone",
      img: "/tech/9.jpg",
      price: "USD 50",
    },
    {
      id: "E4",
      name: "Electric Kettle",
      img: "/tech/10.jpg",
      price: "USD 30",
    },
    {
      id: "E5",
      name: "Gaming Set",
      img: "/tech/5.jpg",
      price: "USD 300",
    },
    {
      id: "E6",
      name: "Laptop & PC",
      img: "/tech/7.jpg",
      price: "USD 1200",
    },
    {
      id: "E7",
      name: "Smartphones",
      img: "/tech/2.jpg",
      price: "USD 800",
    },
    {
      id: "E8",
      name: "iPhone",
      img: "/tech/1.jpg",
      price: "USD 900",
    },
  ];

  return (
    <div className="px-6 ">
      <div className="md:hidden mb-4">
        <h1 className="text-xl font-semibold text-black">
          Consumer electronics
        </h1>
      </div>

      <div className="container mx-auto overflow-hidden rounded-md">
        <div className="flex flex-col md:flex-row ">
          <div className="hidden md:block w-full md:w-[30%] h-36">
            <BannerSection
              image="gadgets.png"
              titleLines={["Consumer", "electronics", "and gadgets"]}
              buttonText="Source now"
            />
          </div>

          {/* Products with 70% width on md+ screens */}
          <div className="w-full md:w-[70%]">
            <HomeAndElectronicsCom Items={Items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerElectronicsGadgets;
