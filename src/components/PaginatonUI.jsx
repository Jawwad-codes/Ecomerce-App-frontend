/** @format */

import React, { useContext } from "react";
import { ProductContext } from "../context/Productcontex";

const PaginatonUI = () => {
  const {
    currentPage,
    setCurrentPage,
    selectArrayToRender,
    itemsPerPage,
    setItemsPerPage,
  } = useContext(ProductContext);

  const totalPages = Math.ceil(selectArrayToRender.length / itemsPerPage);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="flex items-center gap-2 text-sm mt-4 justify-end mb-2 px-28">
      <div className="flex items-center border rounded px-3 py-3">
        <span className="mr-1">Show</span>
        <select
          className="outline-none bg-transparent"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
        </select>
      </div>

      {/* Pagination Buttons */}
      <div className="flex items-center border rounded overflow-hidden gap-2">
        <button
          className="px-2 py-3 hover:bg-gray-200 font-semibold"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-3 py-3 ${
              currentPage === page
                ? "bg-gray-300 font-bold"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          className="px-2 py-3 hover:bg-gray-200 font-semibold"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default PaginatonUI;
