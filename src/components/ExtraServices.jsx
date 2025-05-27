/** @format */

import React from "react";
import "remixicon/fonts/remixicon.css";

const ExtraServices = () => {
  const ourExtraServices = [
    {
      id: 1,
      description: "Source from Industry Hubs",
      icons: "search-line",
      image: "image108.png",
    },
    {
      id: 2,
      description: "Customize Your Products",
      icons: "store-line",
      image: "image104.png",
    },
    {
      id: 3,
      description: "Fast, reliable shipping by ocean or air",
      icons: "send-plane-2-line",
      image: "image106.png",
    },
    {
      id: 4,
      description: "Product monitoring and inspection",
      icons: "secure-payment-line",
      image: "image107.png",
    },
  ];

  return (
    <div className="w-full px-3 sm:px-6 md:px-[4.8%] xl:px-[7.8%]  py-10">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-8">Our Extra Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ourExtraServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-44 bg-gray-200">
                <div className="absolute inset-0 bg-gray-900/30 flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.description}
                    className="w-full h-full object-cover mix-blend-multiply opacity-100 contrast-200 bg-gray-800 brightness-150"
                  />
                </div>

                {service.icons && (
                  <div className="absolute -bottom-8 right-6 w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center border-2 border-white">
                    <i
                      className={`ri-${service.icons} text-white text-2xl`}
                    ></i>
                  </div>
                )}
              </div>

              <div className="p-4 min-h-20 flex items-center">
                <h3 className="text-gray-800 text-xl font-semibold  mt-2 w-52">
                  {service.description}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraServices;
