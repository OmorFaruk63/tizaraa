import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-indigo-600 mb-2">MiniShop</h1>
            <p className="text-gray-400 max-w-xs">
              Simple and modern e-commerce store for your everyday needs.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="hover:text-indigo-500 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-indigo-500 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-indigo-500 transition">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-indigo-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-indigo-500 transition">
                  Product
                </Link>
              </li>
              <li>
                <a href="/login" className="hover:text-indigo-500 transition">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          &copy; 2025 MiniShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
