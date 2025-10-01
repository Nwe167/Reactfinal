import React from "react";

const Product = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-24 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">About iPhone</h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          iPhone is Apple’s line of smartphones that combine cutting-edge technology with sleek design, delivering a seamless user experience for millions of people worldwide.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
          <h2 className="text-2xl font-bold mb-4">Innovative Design</h2>
          <p>The iPhone features a sleek, durable design with edge-to-edge displays and premium materials.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
          <h2 className="text-2xl font-bold mb-4">Powerful Performance</h2>
          <p>Equipped with the latest chips, iPhones deliver fast, smooth performance for all apps and games.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
          <h2 className="text-2xl font-bold mb-4">Advanced Camera</h2>
          <p>iPhone cameras capture stunning photos and videos with powerful sensors and smart computational photography.</p>
        </div>
      </section>

      {/* Story / History Section */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">The Story of iPhone</h2>
          <p className="text-lg md:text-xl text-gray-700">
            The first iPhone was released in 2007, revolutionizing the smartphone industry. Since then, Apple has continuously innovated, introducing new features, designs, and technologies to enhance user experience and connectivity.
          </p>
        </div>
      </section>

      {/* Divider / “Discotion” Section */}
      <div className="flex items-center justify-center py-16">
        <div className="relative w-full max-w-4xl">
          <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-[1px]" />
          <h1 className="absolute left-1/2 -top-6 -translate-x-1/2 
            bg-gray-50 px-6 py-3 text-3xl font-extrabold text-transparent 
            bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
            rounded-full shadow-lg border border-gray-300">
            Discotion
          </h1>
        </div>
      </div>

      {/* CTA Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">Learn More About iPhone</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Discover how Apple continues to innovate and create products that change the way we communicate, work, and play.
        </p>
        <button className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition">
          Explore
        </button>
      </section>
    </div>
  );
};

export default Product;
