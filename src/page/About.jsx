import React from 'react'

const About = () => {
  return (
    <div>
        
   <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
    

      {/* Product Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src="https://cdn.thewirecutter.com/wp-content/media/2025/09/BG-IPHONE-2048px_IPHONE-17-PRO-MAX_BACK.jpg?auto=webp&quality=75&width=1024"
            alt="iPhone 15 Pro"
            className="rounded-xl shadow-lg max-w-sm"
          />
        </div>

        {/* Product Details */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            iPhone 15 Pro
          </h2>
          <p className="text-gray-600 mb-6">
            The iPhone 15 Pro is crafted from titanium, powered by the A17 Pro chip,
            and features an advanced 48MP camera system for stunning photography and
            videography.
          </p>

          <p className="text-2xl font-semibold text-blue-600 mb-4">$999</p>

          {/* Options */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Choose Color:</h3>
            <div className="flex space-x-3">
              <button className="w-8 h-8 rounded-full bg-gray-300 border-2 border-gray-400"></button>
              <button className="w-8 h-8 rounded-full bg-blue-600 border-2 border-gray-400"></button>
              <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-400"></button>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Storage:</h3>
            <div className="flex space-x-3">
              <button className="px-4 py-2 border rounded hover:bg-gray-100">
                128GB
              </button>
              <button className="px-4 py-2 border rounded hover:bg-gray-100">
                256GB
              </button>
              <button className="px-4 py-2 border rounded hover:bg-gray-100">
                512GB
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
              Add to Cart
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow hover:bg-gray-300">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-4">Product Description</h3>
        <p className="text-gray-700 leading-relaxed">
          The iPhone 15 Pro introduces breakthrough performance and design. Built with aerospace-grade titanium, it’s the lightest Pro model ever. The A17 Pro chip brings console-level gaming and unmatched efficiency. The new camera system allows you to shoot in multiple focal lengths and capture stunning low-light photos. Combined with USB-C super-fast transfer speeds, the iPhone 15 Pro is designed for professionals and enthusiasts alike.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2025 iStore. All rights reserved.</p>
        </div>
      </footer>
    </div>

    </div>
  )
}

export default About