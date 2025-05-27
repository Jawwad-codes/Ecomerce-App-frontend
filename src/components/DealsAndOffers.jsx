/** @format */
import React from "react";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";

const DealsAndOffers = () => {
  const Items = [
    {
      id: "E1",
      name: "Smart Watches",
      img: "/tech/8.jpg",
      discount: "-10%",
    },
    {
      id: "E6",
      name: "Laptop & PC",
      img: "/tech/7.jpg",
      discount: "-50%",
    },
    {
      id: "E7",
      name: "Smartphones",
      img: "/tech/2.jpg",
      discount: "-50%",
    },
    {
      id: "E8",
      name: "iPhone",
      img: "/tech/1.jpg",
      discount: "-50%",
    },
    {
      id: "E5",
      name: "Gaming Set",
      img: "/tech/5.jpg",
      discount: "-25%",
    },
  ];

  return (
    <div className="container mx-auto px-2 2xl:px-0 pt-5">
      <div className="flex flex-col md:flex-row bg-white rounded-md shadow-sm">
        <div className="px-6 py-4 min-w-full md:min-w-[30%] flex justify-between items-start md:block border-r">
          <div>
            <h2 className="text-xl font-semibold">Deals and offers</h2>
            <p className="text-md text-gray-500">Hygiene equipments</p>
          </div>
          <div className="md:ml-auto lg:ml-0 mt-0 md:mt-10">
            <CountDown />
          </div>
        </div>

        <div className="border-t md:border-r border-gray-100 flex-1">
          <div className="hidden md:grid grid-cols-5">
            {Items.map((item) => (
              <Link
                to={`/product/${item.id}`}
                state={{ product: item }}
                key={item.id}
                className="border-r border-b border-gray-100 last:border-r-0 p-3 pt-3 flex flex-col items-center gap-2 justify-between text-center hover:shadow-inner"
              >
                <div className="mb-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-32 object-contain"
                  />
                </div>
                <h1 className="text-sm font-medium">{item.name}</h1>
                <span className="text-sm text-[#EB001B] font-bold bg-[#FFE3E3] px-4 py-1 rounded-full">
                  {item.discount}
                </span>
              </Link>
            ))}
          </div>

          <div className="md:hidden flex overflow-x-auto px-2 py-3 gap-2 hide-scrollbar">
            {Items.map((item) => (
              <Link
                to={`/product/${item.id}`}
                state={{ product: item }}
                key={item.id}
                className="flex-shrink-0 min-w-[45%] sm:min-w-[35%] h-44 border border-gray-200 p-3 rounded-sm bg-white flex flex-col items-center"
              >
                <img
                  className="w-20 h-20 object-contain mb-2"
                  src={item.img}
                  alt={item.name}
                />
                <h1 className="text-xs font-medium text-center mb-2 line-clamp-2">
                  {item.name}
                </h1>
                <span className="text-xs text-[#EB001B] font-bold bg-[#FFE3E3] px-3 py-1 rounded-full">
                  {item.discount}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsAndOffers;
