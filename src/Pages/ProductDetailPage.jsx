/** @format */

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopNow from "../components/ShopNow";
import RelatedProducts from "../components/RelatedProducts";
import Tabcomponent from "../components/Tabcomponent";
import ItemcompleteDetail from "../components/ItemcompleteDetail";
import TopofTheList from "../components/TopofTheList";

const ProductDetailPage = () => {
  return (
    <>
      <TopofTheList />
      <ItemcompleteDetail />
      <Tabcomponent />
      <RelatedProducts />
      <ShopNow />
    </>
  );
};

export default ProductDetailPage;
