/** @format */

import React from "react";
import "./index.css";
import Home from "./Pages/HomePage"; //
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductSearch from "./Pages/ProductSearch";
import ProductDetailPage from "./Pages/ProductDetailPage";
import AddTocartPage from "./Pages/AddTocartPage";
import { Route, Router, Routes } from "react-router";
const App = () => {
  return (
    <div className="bg-[#F7FAFC] ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<ProductSearch />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<AddTocartPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
