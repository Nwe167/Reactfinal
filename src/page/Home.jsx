import React, { useContext } from "react";
import ProductContext from "../contect/ProductContext";

const Home = () => {
  const { theme } = useContext(ProductContext);
  return (
    <div>
      <div
        className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}
      >
        {/* Hero Soection */}
        <section className="bg-gradient-to-r from-white to-indigo-950 text-white py-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-5xl font-extrabold mb-4">
                Buy the New iPhone 15
              </h2>
              <p className="text-lg mb-6">
                Experience the future of mobile technology with powerful
                performance, stunning design, and advanced camera systems.
              </p>
              <a
                href="#shop"
                className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100"
              >
                Shop Now
              </a>
            </div>
            {/* Image */}
            <div className="flex-1 mt-8 md:mt-0 md:ml-10">
              <img
                src="https://images.macrumors.com/t/wWStCx80czI9Ltbqy1GgamqPwiA=/1600x/article-new/2018/12/iphone-xr-apple-homepage.jpg"
                alt="iPhone 15"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="shop" className="py-16 bg-gray-100 ">
          <div className="max-w-6xl mx-auto px-7 grid md:grid-cols-3 gap-10 text-center">
            <div className="p-7 bg-white shadow rounded-lg">
              <h3 className="text-xl font-bold mb-2">📱 Stunning Display</h3>
              <p>
                Enjoy the Super Retina XDR display with ProMotion technology.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-bold mb-2">📸 Advanced Camera</h3>
              <p>Capture every detail with the new 48MP main camera system.</p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-bold mb-2">⚡️ Lightning Fast</h3>
              <p>Powered by the A17 Pro chip for next-level performance.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-black text-white py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your iPhone Today</h2>
          <p className="mb-6">Order now and enjoy fast delivery worldwide.</p>
          <a
            href="#"
            className="bg-green-500 text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-50"
          >
            Buy Now
          </a>
        </section>

        <div className="bg-white dark:bg-gray-800 h-screen py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
              <div className="flex items-center gap-12">
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                  Gallery
                </h2>

                <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>
              </div>

              <a
                href="#"
                className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
              >
                More
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  VR
                </span>
              </a>

              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Tech
                </span>
              </a>

              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Dev
                </span>
              </a>

              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Retro
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-6">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>&copy; 2025 iStore. All rights reserved.</p>
          </div>
        </footer>
      </div>
      <main>
        <div></div>
      </main>
    </div>
  );
};

export default Home;
