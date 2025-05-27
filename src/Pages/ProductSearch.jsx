/** @format */

import React from "react";
import TopofTheList from "../components/TopofTheList";
import NewsLetter from "../components/NewsLetter";
import MenuOfProducts from "../components/MenuOfProducts";

const ProductSearch = () => {
  return (
    <>
      <div className="bg-[#F7FAFC]">
        <TopofTheList />
        <MenuOfProducts />
        <NewsLetter />
      </div>
    </>
  );
};

export default ProductSearch;
