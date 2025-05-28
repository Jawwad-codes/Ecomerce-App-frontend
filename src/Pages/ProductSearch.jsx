/** @format */

import React from "react";
import TopofTheList from "../components/TopofTheList";
import NewsLetter from "../components/NewsLetter";
import MenuProducts from "../components/MenuProducts";

const ProductSearch = () => {
  return (
    <>
      <div className="bg-[#F7FAFC]">
        <TopofTheList />
        <MenuProducts />
        <NewsLetter />
      </div>
    </>
  );
};

export default ProductSearch;
