/** @format */
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MainCartComponent = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { product } = state || {};

  const [items, setItems] = useState([]);

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    const cleaned = priceStr.replace(/[^0-9.,]/g, "");
    const normalized = cleaned.replace(/,/g, "");
    const result = parseFloat(normalized);
    return isNaN(result) ? 0 : result;
  };

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = existingCart.map((item) =>
      item.quantity ? item : { ...item, quantity: 1 }
    );

    if (product) {
      const isAlreadyInCart = updatedCart.some(
        (item) => item.id === product.id
      );

      if (!isAlreadyInCart) {
        const newCart = [...updatedCart, { ...product, quantity: 1 }];
        localStorage.setItem("cart", JSON.stringify(newCart));
        setItems(newCart);
      } else {
        setItems(updatedCart);
      }
    } else {
      setItems(updatedCart);
    }
  }, [product]);

  const handleRemoveItem = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const handleRemoveAll = () => {
    setItems([]);
    localStorage.removeItem("cart");
  };

  const handleQuantityChange = (id, qty) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, quantity: qty } : item
    );

    setItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const subtotal = items.reduce(
    (acc, item) =>
      acc +
      Number(item.quantity) * parsePrice(item.discountPrice || item.price),
    0
  );

  const discount = subtotal > 0 ? 60.0 : 0.009;
  const tax = subtotal > 0 ? 14.0 : 0.0;
  const total = subtotal - discount + tax;

  return (
    <div className="py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-6">
          My Cart ({items.length})
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 space-y-6 bg-white">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white flex flex-col sm:flex-row justify-between items-start p-4 rounded-md shadow-sm"
              >
                <div className="flex gap-4 w-full sm:w-auto">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded border"
                  />
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-semibold text-base md:text-lg">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        Size: {item.size}, Color: {item.color}
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">
                        Seller: XYZ Pvt Ltd
                      </p>
                    </div>
                    <div className="flex gap-3 mt-2">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 border px-3 py-2 rounded-md text-sm font-medium hover:underline"
                      >
                        Remove
                      </button>
                      <button className="text-blue-600 border px-3 py-2 rounded-md text-sm font-medium hover:underline">
                        Save for later
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-4 mt-4 sm:mt-0 sm:ml-4">
                  <p className="text-lg font-bold text-gray-800">
                    {parsePrice(item.discountPrice || item.price) *
                      item.quantity}
                  </p>
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, Number(e.target.value))
                    }
                    className="text-sm rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    {[...Array(10)].map((_, qtyIndex) => (
                      <option key={qtyIndex + 1} value={qtyIndex + 1}>
                        Qty: {qtyIndex + 1}
                      </option>
                    ))}
                  </select>
                  <hr className="my-4" />
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center mt-6 px-4">
              <button
                onClick={() => navigate("/order")}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center text-sm"
              >
                Back to shop
              </button>
              <button
                onClick={handleRemoveAll}
                className="text-blue-600 text-sm font-medium border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50"
              >
                Remove all
              </button>
            </div>
          </div>

          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white p-4 rounded-md shadow-md">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Have a coupon?
              </h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Add coupon"
                  className="flex-grow p-2 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 text-sm">
                  Apply
                </button>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md shadow-md space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal:</span>
                <span className="text-gray-800">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Discount:</span>
                <span className="text-red-500">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax:</span>
                <span className="text-green-500">+${tax.toFixed(2)}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 font-semibold mt-4">
                Checkout
              </button>

              <div className="flex justify-center items-center space-x-3 mt-4 pt-2">
                {[
                  {
                    src: "https://www.svgrepo.com/show/393979/american-express.svg",
                    alt: "American Express",
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png",
                    alt: "MasterCard",
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
                    alt: "PayPal",
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
                    alt: "Visa",
                  },
                  {
                    src: "https://www.svgrepo.com/show/303357/google-pay-primary-logo-logo.svg",
                    alt: "Google Pay",
                  },
                ].map(({ src, alt }, idx) => (
                  <img key={idx} src={src} alt={alt} className="w-10 h-auto" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCartComponent;
