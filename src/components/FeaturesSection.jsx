/** @format */
import React from "react";

const FeaturesSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Secure Payment */}
        <div className="  flex items-start gap-4">
          <div className="bg-gray-200 rounded-full px-4 py-3 text-xl text-gray-700">
            <i className="ri-lock-2-line"></i>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Secure payment</h3>
            <p className="text-gray-600">Have you ever finally just</p>
          </div>
        </div>

        {/* Customer Support */}
        <div className="flex items-start gap-4">
          <div className="bg-gray-200 rounded-full px-4 py-3 text-xl text-gray-700">
            <i className="ri-message-2-line"></i>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Customer support</h3>
            <p className="text-gray-600">Have you ever finally just</p>
          </div>
        </div>

        {/* Free Delivery */}
        <div className="flex items-start gap-4">
          <div className="bg-gray-200 rounded-full px-4 py-3 text-xl text-gray-700">
            <i className="ri-truck-line"></i>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Free delivery</h3>
            <p className="text-gray-600">Have you ever finally just</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
