/** @format */
import React from "react";
import SupplierForm from "./SupplierForm";

const AllSupplier = () => {
  return (
    <div className="md:px-4  py-10">
      <div className="container mx-auto  overflow-hidden ">
        <div className="rounded-none relative w-full h-48 sm:h-60 md:h-72 lg:h-80 xl:h-[650px] md:rounded-md overflow-hidden">
          <img
            src="Supplier.png"
            className="w-full h-full object-cover rotate-180"
            alt="Supplier background"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#00D1FF80] to-[#2C7CF1] opacity-100"></div>

          <div className="absolute inset-0 flex flex-col md:flex-row justify-between px-1 sm:p-8 md:p-14 ">
            <div className="flex flex-col justify-center md:justify-start w-full md:w-auto">
              <h1 className="text-white text-xl  md:text-4xl lg:text-5xl font-semibold max-w-[700px]">
                An easy way to send <br /> requests to all suppliers
              </h1>

              <p className="hidden md:block text-white mt-3 sm:mt-5 text-sm sm:text-base md:text-xl font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing <br />
                elit, sed do eiusmod tempor incididunt.
              </p>

              <button className="md:hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg shadow-md mt-4 w-40 sm:w-auto">
                Send inquiry
              </button>
            </div>

            <div className="hidden md:block w-full max-w-[650px] mt-0 md:mt-4 ">
              <SupplierForm />
            </div>
          </div>
        </div>
        <div className="md:hidden mt-6">
          <SupplierForm />
        </div>
      </div>
    </div>
  );
};

export default AllSupplier;
