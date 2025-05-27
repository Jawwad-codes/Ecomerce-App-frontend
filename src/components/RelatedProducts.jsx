/** @format */

import React from "react";

const RelatedProducts = () => {
  const relatedItems = [
    {
      id: "1",
      img: "/cloth/6.jpg",
      name: "Xiamo Redmi 8",
      type: "original",
      priceRange: "$32.00-$40.00",
    },
    {
      id: "2",
      img: "/cloth/1.jpg",
      name: "Xiamo Redmi 8",
      type: "original",
      priceRange: "$32.00-$40.00",
    },
    {
      id: "3",
      img: "/cloth/2.jpg",
      name: "Xiamo Redmi 8",
      type: "original",
      priceRange: "$32.00-$40.00",
    },
    {
      id: "4",
      img: "/cloth/3.jpg",
      name: "Xiamo Redmi 8",
      type: "original",
      priceRange: "$32.00-$40.00",
    },
    {
      id: "5",
      img: "/cloth/4.jpg",
      name: "Xiamo Redmi 8",
      type: "original",
      priceRange: "$32.00-$40.00",
    },
    {
      id: "6",
      img: "/cloth/5.jpg",
      name: "Xiamo Redmi 8",
      type: "original",
      priceRange: "$32.00-$40.00",
    },
  ];

  return (
    <div className="container mx-auto px-4 bg-white mt-4 rounded-md shadow-lg">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800 pt-4 ml-4">
          Related Products
        </h1>
      </div>
      <div className="rounded-md p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 bg-white">
        {relatedItems.map((item) => (
          <div key={item.id} className="text-left">
            <div className="border border-3  p-6 rounded">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-contain"
              />
            </div>
            <h1 className="font-semibold text-md mt-2">{item.name}</h1>
            <h2 className="text-sm text-gray-500">{item.type}</h2>
            <h2 className="text-sm text-green-600">{item.priceRange}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
