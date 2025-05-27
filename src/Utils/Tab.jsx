/** @format */

import React, { useState } from "react";

const Tab = ({ tabData, onChange }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabClick = (index) => {
    setCurrentTab(index);
    onChange(index);
  };

  return (
    <div className="tab">
      <div className="tab-btn flex gap-5 mb-2 px-4">
        {tabData.map((item, index) => (
          <button
            key={index}
            className={`  ${
              currentTab === index
                ? "text-blue-600 border-b-blue-500 border-b-4"
                : "text-gray-700 botder"
            }`}
            onClick={() => handleTabClick(index)}
            data-selected={index === currentTab}
          >
            {item.heading}
          </button>
        ))}
      </div>
      <hr className="border-gray-400" />

      <div className="tabs-content mb-4 text-gray-700 whitespace-pre-line mt-3 px-4 w-9/13">
        {tabData[currentTab].content}
      </div>

      {tabData[currentTab].table && (
        <div className="tab-table pl-4 pr-72">
          <table className="w-full  border border-gray-300 text-left text-sm">
            <tbody>
              {tabData[currentTab].table.map((row) => (
                <tr key={row.id} className="border-b">
                  <td className="p-2 font-semibold bg-gray-300 ">
                    {row.title}
                  </td>
                  <td className="p-2">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="flex gap-3 flex-col px-4 py-3">
        <p>
          <span className="text-green-600">✔</span> Some great feature name here
        </p>
        <p>
          <span className="text-green-600">✔</span> Another amazing feature
        </p>
        <p>
          <span className="text-green-600">✔</span> One more fantastic feature
        </p>
        <p>
          <span className="text-green-600">✔</span> The last awesome feature
        </p>
      </div>
    </div>
  );
};

export default Tab;
