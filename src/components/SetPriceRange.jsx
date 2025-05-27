/** @format */

import React, { useState } from "react";

const SetPriceRange = () => {
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);

  const [range1, setRange1] = useState(25);
  const [range2, setRange2] = useState(75);

  const handleRange1Change = (value) => {
    const val = Math.min(Number(value), range2);
    setRange1(val);
  };

  const handleRange2Change = (value) => {
    const val = Math.max(Number(value), range1);
    setRange2(val);
  };

  return (
    <div className="p-4 w-full">
      <div className="relative w-full h-6 mb-4">
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-blue-200 rounded" />

        <input
          type="range"
          min={min}
          max={max}
          value={range1}
          onChange={(e) => handleRange1Change(e.target.value)}
          className="absolute top-1/2 transform -translate-y-1/2 w-full appearance-none bg-transparent z-10"
        />

        <input
          type="range"
          min={min}
          max={max}
          value={range2}
          onChange={(e) => handleRange2Change(e.target.value)}
          className="absolute top-1/2 transform -translate-y-1/2 w-full appearance-none bg-transparent z-20"
        />
      </div>

      <div className="flex gap-4 mb-4">
        <label className="flex flex-col text-sm text-gray-700 w-full">
          Min
          <input
            placeholder="0"
            type="number"
            value={min}
            onChange={(e) => {
              const val = Number(e.target.value);
              setMin(val);
              if (range1 < val) setRange1(val);
            }}
            className="border p-1 rounded text-gray-600 w-full"
          />
        </label>
        <label className="flex flex-col text-sm text-gray-700 w-full">
          Max
          <input
            type="number"
            placeholder="100"
            value={max}
            onChange={(e) => {
              const val = Number(e.target.value);
              setMax(val);
              if (range2 > val) setRange2(val);
            }}
            className="border p-1 rounded text-gray-600 w-full"
          />
        </label>
      </div>

      <button className="text-blue-600 font-semibold bg-slate-100 px-4 py-2 rounded hover:bg-gray-50 w-full">
        Apply
      </button>
    </div>
  );
};

export default SetPriceRange;
