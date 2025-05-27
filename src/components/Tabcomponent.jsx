/** @format */

import React from "react";
import Tab from "../Utils/Tab";
import LikeProducts from "./LikeProducts";

const Tabcomponent = () => {
  const tabData = [
    {
      heading: "Description",
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam,
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,

      table: [
        { id: 1, title: "Model", detail: "#8786867" },
        { id: 2, title: "Style", detail: "Classic style" },
        { id: 3, title: "Certificate", detail: "ISO-898921212" },
        { id: 4, title: "Size", detail: "34mm x 450mm x 19mm" },
        { id: 5, title: "Memory", detail: "36GB RAM" },
      ],
    },
    {
      heading: "Specification",
      content: `
            Model #8786867
            Style Classic style
            Certificate ISO-898921212
            Size 34mm x 450mm x 19mm
            Memory 36GB RAM
            `,
      table: [
        { id: 1, title: "Overview", detail: "Product Description" },
        { id: 2, title: "Material", detail: "High Quality Material" },
        { id: 3, title: "Usage", detail: "Multi-purpose" },
      ],
    },
    {
      heading: "Features",
      content: `
            Some great feature name here
            Lorem ipsum dolor sit amet, consectetur
            Duis aute irure dolor in reprehenderit
            Some great feature name here
            `,
      table: [
        { id: 1, title: "Feature 1", detail: "Some great feature name here" },
        { id: 2, title: "Feature 2", detail: "Lorem ipsum dolor sit amet" },
        { id: 3, title: "Feature 3", detail: "Duis aute irure dolor" },
        { id: 4, title: "Feature 4", detail: "Advanced functionality" },
      ],
    },
    {
      heading: "About Seller",
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.`,
      table: [
        { id: 1, title: "Seller Name", detail: "John Doe" },
        { id: 2, title: "Rating", detail: "4.5/5" },
        { id: 3, title: "Experience", detail: "5+ years" },
        { id: 4, title: "Location", detail: "New York, USA" },
      ],
    },
  ];

  const onTabChangeHandler = (index) => {
    console.log(`Tab Changed to index: ${index}`);
  };

  return (
    <div className="container flex gap-2 mx-auto mt-3">
      <div className="w-[80%] bg-white py-2  rounded-md max-h-[80%] overflow-y-auto ">
        <Tab tabData={tabData} onChange={onTabChangeHandler} />
      </div>
      <div className="w-[20%] bg-white py-2 rounded-md">
        <h1 className="text-lg font-semibold px-3">You may like</h1>
        <LikeProducts />
      </div>
    </div>
  );
};

export default Tabcomponent;
