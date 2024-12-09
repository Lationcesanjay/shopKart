import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter, FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full text-white mt-8">
      <div className="container  mx-auto px-6 ">
        <div className="grid  md:grid-cols-5 gap-10 cursor-pointer pt-3">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 text-gray-300">ABOUT US</h3>
            <ul className="text-sm text-gray-400">
              <li>Store Location</li>
              <li>Contact</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 text-gray-300">USEFUL LINKS</h3>
            <ul className="text-sm text-gray-400">
              <li>Returns</li>
              <li>Support Policy</li>
              <li>Size Guide</li>
              <li>FAQS</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 text-gray-300">CATEGORIES</h3>
            <ul className="text-sm text-gray-400">
              <div className="grid md:grid-cols-3 gap-2 cursor-pointer">
                <li>Men</li>
                <li>Women</li>
                <li>Accessories</li>
                <li>Kids</li>
                <li>Home</li>
                <li>Beauty</li>
                <li>Health</li>
                <li>Kitchen</li>
                <li>Cosmetics</li>
              </div>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 text-gray-300">CONTACT US</h3>
            <p className="text-sm text-gray-400">
              Email:{" "}
              <a href="mailto:support@shopkart.com" className="text-blue-400 hover:underline">
                support@shopkart.com
              </a>
            </p>
            <p className="text-sm mb-4 text-gray-400">
              Phone: <span className="text-blue-400">(123) 456-7890</span>
            </p>

            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://www.facebook.com" target="_blank" className="text-white hover:text-blue-500 transition duration-300 ease-in-out">
                <FaFacebook size={22} />
              </a>

              <a href="https://www.instagram.com" target="_blank" className="text-white hover:text-pink-500 transition duration-300 ease-in-out">
                <FaInstagram size={22} />
              </a>

              <a href="https://www.twitter.com" target="_blank" className="text-white hover:text-blue-400 transition duration-300 ease-in-out">
                <FaTwitter size={22} />
              </a>

              <a href="https://www.linkedin.com" target="_blank" className="text-white hover:text-blue-700 transition duration-300 ease-in-out">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 text-gray-300">SUBSCRIBE</h3>
            <p className="text-sm text-gray-400">Get E-mail updates about our latest shop and special offers.</p>

            <input
              type="text"
              placeholder="Enter your email address"
              className="border border-zinc-400 mt-4 p-2 w-full max-w-md rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 ease-in-out bg-gray-600"
            />
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 p-3 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} ShopKart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
