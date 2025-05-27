/** @format */

import React from "react";

const LikeProducts = () => {
  const likeItems = [
    {
      id: "1",
      img: "/cloth/6.jpg",
      name: "Summer Cotton T-Shirt",
      type: "original",
      priceRange: "$32.00-$40.00",
    },
    {
      id: "2",
      img: "/cloth/1.jpg",
      name: "Casual Denim Jacket",
      type: "original",
      priceRange: "$32.00-$40.00",
    },
    {
      id: "3",
      img: "/cloth/2.jpg",
      name: "Floral Print Dress",
      type: "original",
      priceRange: "$32.00-$40.00",
    },
    {
      id: "4",
      img: "/cloth/3.jpg",
      name: "Classic White Shirt",
      type: "original",
      priceRange: "$32.00-$40.00",
    },
    {
      id: "5",
      img: "/cloth/4.jpg",
      name: "Slim Fit Jeans",
      type: "original",
      priceRange: "$32.00-$40.00",
    },
    {
      id: "6",
      img: "/cloth/5.jpg",
      name: "Knit Sweater",
      type: "original",
      priceRange: "$32.00-$40.00",
    },
  ];

  return (
    <div className="space-y-4">
      {likeItems.map((item) => (
        <div key={item.id} className="flex items-center gap-4 px-3 py-2 mt-1">
          <div>
            <img
              className="w-20 h-20 object-cover rounded bg-gray-50  border-2"
              src={item.img}
              alt={item.name}
            />
          </div>
          <div>
            <h1 className="text-sm font-medium w-24">{item.name}</h1>
            <p className="text-gray-500 text-sm">{item.priceRange}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LikeProducts;
