/** @format */

import React from "react";
import TopofTheList from "../components/TopofTheList";
import MenuofProducts from "../components/MenuOfProducts";
import NewsLetter from "../components/NewsLetter";
import PaginatonUI from "../components/PaginatonUI";

const ProductSearch = () => {
  return (
    <>
      <div className="bg-[#F7FAFC]">
        <TopofTheList />
        <MenuofProducts />
        <NewsLetter />
      </div>
    </>
  );
};

export default ProductSearch;
