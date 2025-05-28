/** @format */
import React from "react";
import { useState } from "react";
import StarRatingText from "./StarRattingtext";
import SetPriceRange from "./SetPriceRange";
import BrandAndFeaturesList from "./BrandAndFeaturesList";
import ProductsList from "./ProductsList";
const MenuProducts = () => {
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);

  const Category = [
    "Mobile accessory",
    "Electronics",
    "Smartphones",
    "Modern tech",
    "Laptops",
    "Tablets",
    "Audio",
    "Lenovo",
  ];
  const Brands = [
    "Samsung",
    "Apple",
    "Huawei",
    "Pocco",
    "Xiaomi",
    "OnePlus",
    "Oppo",
    "Vivo",
  ];
  const Features = [
    "Metallic",
    "Plastic cover",
    "8GB Ram",
    "Super power",
    "Large Memory",
    "Water Resistance",
    "Fast Charging",
    "Long Battery Life",
  ];
  const Ratings = [5, 4, 3, 2, 1];
  const Condition = [
    "Any",
    "Refurbished",
    "Brand new",
    "Old items",
    "Used - Like New",
    "Used - Good",
    "For parts or not working",
  ];

  return (
    <div className="container mx-auto px-2 xl:px-0 flex gap-4">
      <div className="w-[18%] space-y-4">
        <BrandAndFeaturesList List={Category} Title="Category" Type="text" />
        <BrandAndFeaturesList List={Brands} Title="Brand" Type="checkbox" />
        <BrandAndFeaturesList
          List={Features}
          Title="Features"
          Type="checkbox"
        />
        <hr />
        <div className="space-y-2 px-2">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsPriceDropdownOpen((prev) => !prev)}
          >
            <h1 className="font-semibold">Price Range</h1>
            <i
              className={
                isPriceDropdownOpen
                  ? "ri-arrow-up-s-line text-xl"
                  : "ri-arrow-down-s-line text-xl"
              }
            ></i>
          </div>
          {isPriceDropdownOpen && (
            <div className="pt-2">
              <SetPriceRange />
            </div>
          )}
        </div>
        <BrandAndFeaturesList List={Condition} Title="Condition" Type="radio" />
        <BrandAndFeaturesList
          List={Ratings.map((rating) => (
            <StarRatingText key={rating} rating={rating} />
          ))}
          Title="Ratings"
          Type="checkbox"
        />
      </div>
      <div className="w-[82%] space-y-4">
        <ProductsList />
      </div>
    </div>
  );
};
export default MenuProducts;
