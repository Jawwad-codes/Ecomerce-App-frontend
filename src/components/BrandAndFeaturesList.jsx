/** @format */
import React, { useState } from "react";

const BrandAndFeaturesList = ({ List, Title, Type }) => {
  const [dropdown, setdropdown] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visibleItem = showAll ? List : List.slice(0, 5);

  return (
    <>
      <hr className="my-3" />
      <div className="flex flex-col px-2">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold">{Title}</h1>
          <i
            onClick={() => setdropdown((prev) => !prev)}
            className={
              dropdown
                ? "ri-arrow-up-s-line text-xl cursor-pointer"
                : "ri-arrow-down-s-line text-xl cursor-pointer"
            }
          ></i>
        </div>
        {dropdown && (
          <div className="flex flex-col gap-2 mt-2">
            {visibleItem.map((item, index) =>
              Type === "text" ? (
                <span
                  key={index}
                  className="text-gray-600 font-normal py-1 px-2"
                >
                  {item}
                </span>
              ) : (
                <label
                  key={index}
                  className="flex items-center gap-2 text-gray-700 capitalize"
                >
                  <input
                    type={Type}
                    name={Title}
                    value={item}
                    className="accent-blue-600"
                  />
                  {item}
                </label>
              )
            )}

            {List.length > 5 && (
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="text-blue-600 text-sm mt-1 hover:underline w-fit"
              >
                {showAll ? "Show Less" : "See All"}
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default BrandAndFeaturesList;
