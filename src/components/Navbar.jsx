/** @format */
import React, { useContext, useState } from "react";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";
import Flagdropdown from "./Flagdropdown";
import { ProductContext } from "../context/Productcontex";

const Navbar = () => {
  const topIcons = ["contact", "message", "order", "cart"];
  const menuLinks = ["Hot offers", "Gift boxes", "Projects", "Menu item"];
  const { categories, setCategories } = useContext(ProductContext);
  const currencyOptions = [
    { value: "usd", label: "English, USD" },
    { value: "pkr", label: "Pakistan, PKR" },
    { value: "gbp", label: "UK, Pound" },
    { value: "sar", label: "Saudi Arabia, Riyal" },
  ];
  console.log(categories);

  const handlecategory = (e) => {
    const selectedCategory = e.target.value;
    if (setCategories === "all") {
      setCategories([]);
    } else {
      setCategories(selectedCategory);
    }
  };

  return (
    <nav className="w-full  top-0 left-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-2 ">
        <section className="flex flex-col md:flex-row items-center justify-between py-3 gap-4">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center gap-4">
              <button className="md:hidden text-2xl text-gray-700">
                <i className="ri-menu-line"></i>
              </button>
              <Link to="/">
                <img
                  src="/logo-colored.svg"
                  alt="Company Logo"
                  className="h-8 md:h-10"
                />
              </Link>
            </div>
            <div className="flex gap-4 md:hidden">
              <button className="flex flex-col items-center">
                <img src="/Icons/contact.png" alt="Profile" className="h-6" />
                <span className="text-xs mt-1">Profile</span>
              </button>
              <button className="flex flex-col items-center">
                <img src="/Icons/cart.png" alt="Cart" className="h-6" />
                <span className="text-xs mt-1">Cart</span>
              </button>
            </div>
          </div>
          <div className="hidden md:flex items-center border border-blue-500 rounded-md overflow-hidden flex-1 max-w-xl mx-4">
            <input
              type="text"
              placeholder="Search products..."
              className="px-4 py-2 w-full outline-none text-sm md:text-base"
            />
            <select
              onChange={handlecategory}
              value={categories}
              className="border-l border-blue-500 px-3 text-gray-600 bg-white outline-none text-sm md:text-base h-full"
            >
              <option value="all">All</option>
              <option value="Electronic">Electronic</option>
              <option value="Interior">Interior</option>
              <option value="Fashion">Fashion</option>
            </select>
            <Link
              to={"/order"}
              className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors ml-2"
            >
              Search
            </Link>
          </div>

          <div className="hidden md:flex gap-4">
            {topIcons.map((icon) => (
              <Link
                key={icon}
                to={
                  icon.toLowerCase() === "cart"
                    ? "/cart"
                    : icon.toLowerCase() === "order"
                    ? "/order"
                    : "/"
                }
                className="flex flex-col items-center min-w-[60px] hover:text-blue-500"
              >
                <img src={`/Icons/${icon}.png`} alt={icon} className="h-6" />
                <span className="text-xs mt-1 capitalize">{icon}</span>
              </Link>
            ))}
          </div>
        </section>

        <div className="md:hidden my-3 relative">
          <i className="ri-search-line absolute left-3 text-center pt-10 transform -translate-y-1/2 text-gray-400"></i>
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 mb-2 border border-blue-500 rounded-md outline-none"
          />
        </div>
      </div>

      <section className="bg-white border-t border-gray-100 hidden md:block">
        <div className="container px-2 mx-auto ">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-blue-600 font-medium">
                <i className="ri-menu-line text-xl"></i>
                <span>All Categories</span>
              </button>

              <div className="flex gap-6">
                {menuLinks.map((link) => (
                  <Link
                    key={link}
                    to={`/`}
                    className="font-medium text-gray-700 hover:text-blue-500"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <select className="border-none font-medium text-gray-700 bg-transparent focus:outline-none">
                {currencyOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <Flagdropdown />
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
