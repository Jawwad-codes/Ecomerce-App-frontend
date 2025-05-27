/** @format */

import React from "react";

const BannerSection = ({
  image,
  titleLines = [],
  buttonText,
  containerWidth,
  subtitle,
}) => {
  return (
    <div className={`relative bg-gray-100 ${containerWidth}`}>
      <img
        className="w-full md:h-[444px] object-cover contrast-200 brightness-75 rounded-sm"
        src={image}
        alt="A promotional banner showcasing the product"
      />
      <div className="absolute inset-0 flex flex-col md:gap-8 px-3 py-8 md:px-8 md:py-14">
        <h1
          className="text-xl md:text-2xl text-black font-semibold"
          role="heading"
          aria-level="1"
        >
          {titleLines.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </h1>
        <p className="text-md font-normal">{subtitle}</p>
        <button
          aria-label={buttonText}
          className="bg-white px-4 py-2 md:px-7 rounded-md text-black text-sm md:text-base w-fit"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default BannerSection;
