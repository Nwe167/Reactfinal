import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const About = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

  const Cards = [
    { id: 1, img: "/img1/17.png", brand: "Apple", name: "iPhone 17", price: 799, dprice: 899 },
    { id: 2, img: "/img1/13.png", brand: "Apple", name: "iPhone 13", price: 999, dprice: 1099 },
    { id: 3, img: "/img1/ip13kky-removebg-preview.png", brand: "Apple", name: "iPhone 13", price: 699, dprice: 799 },
    { id: 4, img: "/img1/ip15gg-removebg-preview.png", brand: "Apple", name: "iPhone 12", price: 599, dprice: 699 },
    { id: 5, img: "/img1/ip15w-removebg-preview.png", brand: "Apple", name: "iPhone 15", price: 899, dprice: 999 },
    { id: 6, img: "/img1/ip15ww-removebg-preview.png", brand: "Apple", name: "iPhone 15 Pro", price: 1199, dprice: 1299 },
    { id: 7, img: "/img1/Ip16b-removebg-preview.png", brand: "Apple", name: "iPhone 14 Pro", price: 1099, dprice: 1199 },
    { id: 8, img: "/img1/wip17-removebg-preview.png", brand: "Apple", name: "iPhone 14 Plus", price: 899, dprice: 999 },
    { id: 9, img: "/img/download (1).jpg", brand: "Apple", name: "iPhone 14", price: 799, dprice: 899 },
    { id: 10, img: "/img/download.jpg", brand: "Apple", name: "iPhone 12 Mini", price: 599, dprice: 699 },
    { id: 11, img: "/img1/iphone-16-removebg-preview.png", brand: "Apple", name: "iPhone 11", price: 499, dprice: 599 },
    { id: 12, img: "/img/download (4).jpg", brand: "Apple", name: "iPhone SE", price: 399, dprice: 499 },
    
    
    // ... add more products
  ];

  // Add product to cart
  const handleBuy = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Remove a product from cart
  const handleRemove = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Handle checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }
    setShowReceipt(true);
    setShowCart(false); // hide cart
  };

  // Clear cart after payment
  const handlePaymentDone = () => {
    setCartItems([]);
    setShowReceipt(false);
    alert("Payment successful! Thank you for your purchase 🎉");
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">

      {/* Cart Icon */}
      <div
        className="fixed top-4 right-4 flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-lg cursor-pointer"
        onClick={() => setShowCart(!showCart)}
      >
        <AiOutlineShoppingCart className="text-2xl text-indigo-600" />
        <span className="font-bold">{cartItems.length}</span>
      </div>

      {/* Mini Cart Dropdown */}
      {showCart && (
        <div className="fixed top-16 right-4 w-72 bg-white shadow-lg rounded-lg p-4 z-50">
          <h2 className="font-bold mb-2">Cart Items</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">No items in cart.</p>
          ) : (
            <>
              <ul className="space-y-2 max-h-64 overflow-y-auto">
                {cartItems.map((item, index) => (
                  <li key={index} className="flex items-center justify-between space-x-2">
                    <div className="flex items-center space-x-2">
                      <img src={item.img} alt={item.name} className="h-10 w-10 object-contain" />
                      <div>
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className="text-xs text-gray-500">${item.price}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemove(index)}
                      className="text-red-500 font-bold px-2 py-1 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t pt-2 font-bold text-right">
                Total: ${totalPrice}
              </div>
              <button
                onClick={handleCheckout}
                className="mt-2 w-full bg-green-500 text-white py-1 rounded-full hover:bg-green-600 transition"
              >
                Checkout
              </button>
            </>
          )}
        </div>
      )}

      {/* Receipt Modal */}
      {showReceipt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Receipt</h2>
            <ul className="space-y-2 max-h-64 overflow-y-auto mb-4">
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </li>
              ))}
            </ul>
            <div className="border-t pt-2 font-bold text-right mb-4">
              Total: ${totalPrice}
            </div>
            <button
              onClick={handlePaymentDone}
              className="w-full bg-indigo-500 text-white py-2 rounded-full hover:bg-indigo-600 transition"
            >
              Pay Now
            </button>
            <button
              onClick={() => setShowReceipt(false)}
              className="w-full mt-2 text-gray-600 py-1 rounded-full border hover:bg-gray-100 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <h1 className="text-5xl font-extrabold mb-4">About iPhones</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Explore the latest iPhone models, their features, and prices.
        </p>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-20 px-4">
        {Cards.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={card.img}
              alt={card.name}
              className="h-64 w-full object-contain bg-gray-50"
            />
            <div className="p-5">
              <span className="text-gray-400 uppercase text-xs">{card.brand}</span>
              <h2 className="text-xl font-bold mt-1 truncate">{card.name}</h2>
              <div className="flex items-center mt-3">
                <p className="text-lg font-semibold text-indigo-600">${card.price}</p>
                <del className="text-gray-500 ml-2">${card.dprice}</del>
                <button
                  onClick={() => handleBuy(card)}
                  className="ml-auto bg-indigo-500 text-white px-4 py-1 rounded-full hover:bg-indigo-600 transition"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
