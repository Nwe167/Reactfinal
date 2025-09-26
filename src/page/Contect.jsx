import React from 'react'

const contect = () => {
  return (
    <div>
         <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
    

      {/* Contact Section */}
      <section className="flex-1 max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions about our products, your order, or need support? 
            We’d love to hear from you! Reach us through the form or details below.
          </p>

          <div className="space-y-4">
            <p className="flex items-center">
              📍 <span className="ml-2">123 Apple Street, Cupertino, CA</span>
            </p>
            <p className="flex items-center">
              📞 <span className="ml-2">+1 (800) 123-4567</span>
            </p>
            <p className="flex items-center">
              ✉️ <span className="ml-2">support@istore.com</span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
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

export default contect