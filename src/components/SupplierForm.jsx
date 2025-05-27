/** @format */
import React, { useState } from "react";

const SupplierForm = () => {
  const [Quantity, setQuantity] = useState("");
  const [selectedValue, setSelectedValue] = useState("pcs");
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200 bg-white">
        <div className="flex flex-col gap-6">
          <div className="heading">
            <h4 className="text-2xl font-bold text-gray-900">
              Send quote to suppliers
            </h4>
          </div>

          <div className="item-need">
            <input
              className="text-black w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
              type="text"
              name="supplier"
              id="quote"
              placeholder="What item do you need"
            />
          </div>

          <div>
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 min-h-[120px]"
              name="supplier"
              id="detail"
              placeholder="Type more details"
            />
          </div>
          <div className="flex justify-start gap-2 items-center">
            <div>
              <input
                className="text-black w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                type="text"
                name="supplier"
                id="quote"
                placeholder="Quantity"
                onChange={() => {
                  setQuantity(e.target.value);
                }}
                value={Quantity}
              />
            </div>
            <div>
              <select
                className="py-3.5 border  border-gray-300 px-4 rounded-lg "
                name="Quantity"
                id="Quantity"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                value={selectedValue}
              >
                <option value="0">pcs</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>

          <div className="mt-2">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-3 px-6 rounded-md transition duration-200 w-full sm:w-auto">
              Send inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierForm;
