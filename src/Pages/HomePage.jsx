/** @format */

import React from "react";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import ShopNow from "../components/ShopNow";
import Footer from "../components/Footer";
import Region from "../components/Region";
import ExtraServices from "../components/ExtraServices";
import RecomandedItems from "../components/RecomandedItems";
import AllSupplier from "../components/AllSupplier";
import ConsumerElectronicsGadgets from "../components/ConsumerElectronicsGadgets";
import HomeandOutdoor from "../components/HomeandOutdoor";
import DealsAndOffers from "../components/DealsAndOffers";
import ElectronicsItem from "../components/ElectronicsItem";

const Home = () => {
  return (
    <>
      <div className="min-h-screen">
        <ElectronicsItem />
        <DealsAndOffers />
        <HomeandOutdoor />
        <ConsumerElectronicsGadgets />
        <AllSupplier />
        <RecomandedItems />
        <ExtraServices />
        <Region />
        <ShopNow />
        <NewsLetter />
      </div>
    </>
  );
};

export default Home;
