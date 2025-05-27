/** @format */
import React from "react";
import ListofCategories from "./ListofCategories";
import AccountLayout from "./AccountLayout";
import BannerSection from "./BannerSection";

const ElectronicsItem = () => {
  return (
    <div className="container mx-auto px-3 pt-5">
      <div className="hidden md:flex items-start justify-between bg-white px-4 py-4">
        <ListofCategories />
        <BannerSection
          titleLines={["Electronic items"]}
          subtitle="Latest trending"
          image="main11.png"
          buttonText="Learn more"
          customWidth="w-[500px]"
        />
        <AccountLayout />
      </div>

      {/* Mobile Vie*/}
      <div className="md:hidden bg-white px-4 py-4 overflow-hidden">
        <BannerSection
          titleLines={["Electronic items"]}
          subtitle="Latest trending"
          image="main11.png"
          buttonText="Learn more"
        />
      </div>
    </div>
  );
};

export default ElectronicsItem;
