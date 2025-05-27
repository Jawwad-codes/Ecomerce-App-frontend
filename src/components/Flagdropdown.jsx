/** @format */
import React, { useState } from "react";

export const countries = [
  {
    code: "AE",
    name: "United Arab Emirates",
    flag: "/flags/dubai.png",
    info: "shopname.ae",
  },
  {
    code: "AUS",
    name: "Australia",
    flag: "/flags/australia.png",
    info: "shopname.ae",
  },
  {
    code: "DN",
    name: "Denmark",
    flag: "/flags/scotland.png",
    info: "denmark.com.dk",
  },
  {
    code: "UAE",
    name: "Arab Emirates",
    flag: "/flags/dubai.png",
    info: "shopname.ae",
  },
  {
    code: "FN",
    name: "France",
    flag: "/flags/france.png",
    info: "shopname.com.fr",
  },
  {
    code: "US",
    name: "United States",
    flag: "/flags/usa.png",
    info: "shopname.ae",
  },
  {
    code: "Rus",
    name: "Russia",
    flag: "/flags/russia.png",
    info: "shopname.ru",
  },
  {
    code: "CN",
    name: "China",
    flag: "/flags/china.png",
    info: "shopname.ae",
  },
  {
    code: "IY",
    name: "Italy",
    flag: "/flags/itlay.png",
    info: "shopname.it",
  },
  {
    code: "GB",
    name: "Great Britain",
    flag: "/flags/england.png",
    info: "shopname.co.uk",
  },
];
const Flagdropdown = () => {
  const [selected, setSelected] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (country) => {
    setSelected(country);
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-2 px-4 py-2 border-1 border-gray-300 bg-white rounded-md  "
        >
          <span className="font-semibold text-xl text-gray-600">Send to</span>
          <img src={selected.flag} alt={selected.name} className="w-8 h-6" />
          <i className="ri-arrow-down-s-line text-lg"></i>
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-2 w-full bg-white  rounded-md shadow-lg">
            {countries.map((country) => (
              <div
                key={country.code}
                onClick={() => handleSelect(country)}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-5 h-5"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Flagdropdown;
