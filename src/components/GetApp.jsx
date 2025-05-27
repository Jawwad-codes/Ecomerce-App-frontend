/** @format */

import React from "react";

const GetApp = () => {
  return (
    <>
      <div className="p-4 text-center">
        <p className="text-lg font-medium mb-4">Get app</p>
        <div className="flex flex-col items-center gap-2">
          <a
            href="https://apps.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 h-12"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="w-full h-full object-contain"
            />
          </a>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="w-36 h-12"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default GetApp;
