/** @format */

import React, { createContext, useState } from "react";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [isGridview, setGridview] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState("fashion");

  const Fashion = [
    {
      id: "RI-1",
      description: "T-shirts with multiple colors, for men",
      img: "/cloth/1.jpg",
      price: "$10.30",
    },
    {
      id: "RI-2",
      description: "Jeans shorts for men, blue color",
      img: "/cloth/4.jpg",
      price: "$10.30",
    },
    {
      id: "RI-3",
      description: "Brown winter coat, medium size",
      img: "/cloth/3.jpg",
      price: "$12.50",
    },
    {
      id: "RI-4",
      description: "Jeans bag for travel, for men",
      img: "/tech/6.jpg",
      price: "$99.00",
    },
    {
      id: "RI-5",
      description: "Coat for men, blue color",
      img: "/cloth/7.jpg",
      price: "$34.00",
    },
    {
      id: "RI-6",
      description: "Canon camera, black, 100x zoom",
      img: "/cloth/1.jpg",
      price: "$9.99",
    },
    {
      id: "RI-7",
      description: "Headset for gaming with mic",
      img: "/tech/9.jpg",
      price: "$8.99",
    },
    {
      id: "RI-8",
      description: "Smartwatch, silver color modern",
      img: "/tech/8.jpg",
      price: "$10.30",
    },
    {
      id: "RI-9",
      description: "Blue wallet for men, leather material",
      img: "/cloth/6.jpg",
      price: "$10.30",
    },
    {
      id: "RI-10",
      description: "Black jug for travel, for family",
      img: "/tech/10.jpg",
      price: "$80.90",
    },
  ];

  const Interier = [
    {
      id: "H1",
      name: "Modern Sofa",
      img: "/interior/1.jpg",
      price: "USD 319",
    },
    {
      id: "H2",
      name: "Dining Table",
      img: "/interior/2.jpg",
      price: "USD 500",
    },
    {
      id: "H3",
      name: "Cozy Bed",
      img: "/interior/3.jpg",
      price: "USD 450",
    },
    {
      id: "H4",
      name: "Outdoor Grill",
      img: "/interior/4.jpg",
      price: "USD 150",
    },
    {
      id: "H5",
      name: "Garden Set",
      img: "/interior/5.jpg",
      price: "USD 200",
    },
    {
      id: "H6",
      name: "Living Room Decor",
      img: "/interior/6.jpg",
      price: "USD 350",
    },
    {
      id: "H7",
      name: "Patio Furniture",
      img: "/interior/7.jpg",
      price: "USD 600",
    },
    {
      id: "H8",
      name: "Hammock",
      img: "/interior/8.jpg",
      price: "USD 100",
    },
  ];

  const ElectronicAccessory = [
    {
      id: "EA1",
      img: "/tech/1.jpg",
      title: "Canon Camera EOS 2000, Black 10x zoom",
      discountPrice: "$998.00",
      actualPrice: "$1128.00",
      rating_no: "7.5",
      order_no: "154",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: "EA2",
      img: "/tech/2.jpg",
      title: "Sony Camera Alpha 7 III, Silver 5x zoom",
      discountPrice: "$1299.00",
      actualPrice: "$1499.00",
      rating_no: "8.2",
      order_no: "210",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "A fantastic camera for both beginners and professionals alike. Captures stunning images with ease.",
    },
    {
      id: "EA3",
      img: "/tech/3.jpg",
      title: "Nikon DSLR D850, Black 8x zoom",
      discountPrice: "$2999.00",
      actualPrice: "$3200.00",
      rating_no: "9.0",
      order_no: "320",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "The ultimate DSLR for professionals. Unmatched image quality and performance.",
    },
    {
      id: "EA4",
      img: "/tech/4.jpg",
      title: "Fujifilm Mirrorless X-T4, Black 6x zoom",
      discountPrice: "$1699.00",
      actualPrice: "$1899.00",
      rating_no: "8.5",
      order_no: "185",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "A compact and lightweight mirrorless camera with excellent image stabilization.",
    },
    {
      id: "EA5",
      img: "/tech/5.jpg",
      title: "Panasonic Lumix GH5, Black 7x zoom",
      discountPrice: "$1999.00",
      actualPrice: "$2200.00",
      rating_no: "8.8",
      order_no: "250",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "Perfect for video recording with its high-quality 4K capabilities.",
    },
    {
      id: "EA6",
      img: "/tech/6.jpg",
      title: "Olympus OM-D E-M10 Mark IV, Silver 4x zoom",
      discountPrice: "$799.00",
      actualPrice: "$999.00",
      rating_no: "7.9",
      order_no: "120",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "A stylish and user-friendly camera ideal for everyday photography.",
    },
    {
      id: "EA7",
      img: "/tech/7.jpg",
      title: "GoPro HERO9 Black, Black 1x zoom",
      discountPrice: "$349.00",
      actualPrice: "$399.00",
      rating_no: "8.3",
      order_no: "190",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "The ultimate action camera with 5K video and advanced stabilization.",
    },
    {
      id: "EA8",
      img: "/tech/8.jpg",
      title: "DJI Mavic Air 2, Gray 4x zoom",
      discountPrice: "$799.00",
      actualPrice: "$999.00",
      rating_no: "9.2",
      order_no: "280",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "Capture stunning aerial footage with this compact and intelligent drone.",
    },
    {
      id: "EA9",
      img: "/tech/9.jpg",
      title: "Insta360 ONE X2, Black 1x zoom",
      discountPrice: "$429.00",
      actualPrice: "$499.00",
      rating_no: "8.6",
      order_no: "220",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "A versatile 360 camera that captures every angle in stunning detail.",
    },
    {
      id: "EA10",
      img: "/tech/1.jpg",
      title: "Canon Camera EOS 2000, Black 10x zoom",
      discountPrice: "$998.00",
      actualPrice: "$1128.00",
      rating_no: "7.5",
      order_no: "154",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: "EA11",
      img: "/tech/2.jpg",
      title: "Sony Camera Alpha 7 III, Silver 5x zoom",
      discountPrice: "$1299.00",
      actualPrice: "$1499.00",
      rating_no: "8.2",
      order_no: "210",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "A fantastic camera for both beginners and professionals alike. Captures stunning images with ease.",
    },
    {
      id: "EA12",
      img: "/tech/3.jpg",
      title: "Nikon DSLR D850, Black 8x zoom",
      discountPrice: "$2999.00",
      actualPrice: "$3200.00",
      rating_no: "9.0",
      order_no: "320",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "The ultimate DSLR for professionals. Unmatched image quality and performance.",
    },
    {
      id: "EA13",
      img: "/tech/4.jpg",
      title: "Fujifilm Mirrorless X-T4, Black 6x zoom",
      discountPrice: "$1699.00",
      actualPrice: "$1899.00",
      rating_no: "8.5",
      order_no: "185",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "A compact and lightweight mirrorless camera with excellent image stabilization.",
    },
    {
      id: "EA14",
      img: "/tech/5.jpg",
      title: "Panasonic Lumix GH5, Black 7x zoom",
      discountPrice: "$1999.00",
      actualPrice: "$2200.00",
      rating_no: "8.8",
      order_no: "250",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "Perfect for video recording with its high-quality 4K capabilities.",
    },
    {
      id: "EA15",
      img: "/tech/6.jpg",
      title: "Olympus OM-D E-M10 Mark IV, Silver 4x zoom",
      discountPrice: "$799.00",
      actualPrice: "$999.00",
      rating_no: "7.9",
      order_no: "120",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "A stylish and user-friendly camera ideal for everyday photography.",
    },
    {
      id: "EA16",
      img: "/tech/7.jpg",
      title: "GoPro HERO9 Black, Black 1x zoom",
      discountPrice: "$349.00",
      actualPrice: "$399.00",
      rating_no: "8.3",
      order_no: "190",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "The ultimate action camera with 5K video and advanced stabilization.",
    },
    {
      id: "EA17",
      img: "/tech/8.jpg",
      title: "DJI Mavic Air 2, Gray 4x zoom",
      discountPrice: "$799.00",
      actualPrice: "$999.00",
      rating_no: "9.2",
      order_no: "280",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "Capture stunning aerial footage with this compact and intelligent drone.",
    },
    {
      id: "EA18",
      img: "/tech/9.jpg",
      title: "Insta360 ONE X2, Black 1x zoom",
      discountPrice: "$429.00",
      actualPrice: "$499.00",
      rating_no: "8.6",
      order_no: "220",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "A versatile 360 camera that captures every angle in stunning detail.",
    },
    {
      id: "EA19",
      img: "/tech/1.jpg",
      title: "Canon Camera EOS 2000, Black 10x zoom",
      discountPrice: "$998.00",
      actualPrice: "$1128.00",
      rating_no: "7.5",
      order_no: "154",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: "EA20",
      img: "/tech/2.jpg",
      title: "Sony Camera Alpha 7 III, Silver 5x zoom",
      discountPrice: "$1299.00",
      actualPrice: "$1499.00",
      rating_no: "8.2",
      order_no: "210",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "A fantastic camera for both beginners and professionals alike. Captures stunning images with ease.",
    },
    {
      id: "EA21",
      img: "/tech/3.jpg",
      title: "Nikon DSLR D850, Black 8x zoom",
      discountPrice: "$2999.00",
      actualPrice: "$3200.00",
      rating_no: "9.0",
      order_no: "320",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "The ultimate DSLR for professionals. Unmatched image quality and performance.",
    },
    {
      id: "EA22",
      img: "/tech/4.jpg",
      title: "Fujifilm Mirrorless X-T4, Black 6x zoom",
      discountPrice: "$1699.00",
      actualPrice: "$1899.00",
      rating_no: "8.5",
      order_no: "185",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "A compact and lightweight mirrorless camera with excellent image stabilization.",
    },
    {
      id: "EA23",
      img: "/tech/5.jpg",
      title: "Panasonic Lumix GH5, Black 7x zoom",
      discountPrice: "$1999.00",
      actualPrice: "$2200.00",
      rating_no: "8.8",
      order_no: "250",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "Perfect for video recording with its high-quality 4K capabilities.",
    },
    {
      id: "EA24",
      img: "/tech/6.jpg",
      title: "Olympus OM-D E-M10 Mark IV, Silver 4x zoom",
      discountPrice: "$799.00",
      actualPrice: "$999.00",
      rating_no: "7.9",
      order_no: "120",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "A stylish and user-friendly camera ideal for everyday photography.",
    },
    {
      id: "EA25",
      img: "/tech/7.jpg",
      title: "GoPro HERO9 Black, Black 1x zoom",
      discountPrice: "$349.00",
      actualPrice: "$399.00",
      rating_no: "8.3",
      order_no: "190",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "The ultimate action camera with 5K video and advanced stabilization.",
    },
    {
      id: "EA26",
      img: "/tech/8.jpg",
      title: "DJI Mavic Air 2, Gray 4x zoom",
      discountPrice: "$799.00",
      actualPrice: "$999.00",
      rating_no: "9.2",
      order_no: "280",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "Capture stunning aerial footage with this compact and intelligent drone.",
    },
    {
      id: "EA27",
      img: "/tech/9.jpg",
      title: "Insta360 ONE X2, Black 1x zoom",
      discountPrice: "$429.00",
      actualPrice: "$499.00",
      rating_no: "8.6",
      order_no: "220",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "A versatile 360 camera that captures every angle in stunning detail.",
    },
    {
      id: "EA28",
      img: "/tech/1.jpg",
      title: "Canon Camera EOS 2000, Black 10x zoom",
      discountPrice: "$998.00",
      actualPrice: "$1128.00",
      rating_no: "7.5",
      order_no: "154",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: "EA29",
      img: "/tech/2.jpg",
      title: "Sony Camera Alpha 7 III, Silver 5x zoom",
      discountPrice: "$1299.00",
      actualPrice: "$1499.00",
      rating_no: "8.2",
      order_no: "210",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "A fantastic camera for both beginners and professionals alike. Captures stunning images with ease.",
    },
    {
      id: "EA30",
      img: "/tech/3.jpg",
      title: "Nikon DSLR D850, Black 8x zoom",
      discountPrice: "$2999.00",
      actualPrice: "$3200.00",
      rating_no: "9.0",
      order_no: "320",
      addtocart: "fa-regular fa-heart",
      details: "View details",
      description:
        "The ultimate DSLR for professionals. Unmatched image quality and performance.",
    },
  ];
  const allProducts = {
    fashion: Fashion,
    interior: Interier, // Corrected spelling used here
    electronics: ElectronicAccessory,
  };

  const productsToShow = allProducts[categories] || [];
  let selectArrayToRender = productsToShow;

  if (categories === "Interior") {
    selectArrayToRender = Interier;
  } else if (categories === "Fashion") {
    selectArrayToRender = Fashion;
  } else {
    selectArrayToRender = ElectronicAccessory;
  }
  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const paginatedProducts =
    selectArrayToRender?.slice(indexOfFirstItem, indexOfLastItem) || [];

  return (
    <ProductContext.Provider
      value={{
        allProducts,
        selectArrayToRender,
        isGridview,
        setGridview,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        paginatedProducts,
        categories,
        setCategories,
        Fashion,
        Interier,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
