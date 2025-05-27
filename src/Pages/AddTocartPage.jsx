/** @format */

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopNow from "../components/ShopNow";
import RelatedProducts from "../components/RelatedProducts";
import FeaturesSection from "../components/FeaturesSection";
import MainCartComponent from "../components/maincartComponent";

const AddTocartPage = () => {
  return (
    <>
      <MainCartComponent />
      <FeaturesSection />
      <RelatedProducts />
      <ShopNow />
    </>
  );
};

export default AddTocartPage;
