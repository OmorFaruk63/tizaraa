
"use client"
import { useAppSelector } from "@/lib/redux/hooks";
import Link from "next/link";
import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.items);
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const totalCart = cartItems.reduce((acc, curr) => acc += curr.quantity, 0)
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={"/"} className="text-2xl font-bold text-indigo-600">MiniShop</Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium">Home</Link>
            <Link href="/product" className="text-gray-700 hover:text-indigo-600 font-medium">Product</Link>
            <Link href="/login" className="text-gray-700 hover:text-indigo-600 font-medium">Login</Link>
            <Link href={"/cart"} className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              <FaShoppingCart className="mr-2" />
              Cart ({totalCart})
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-[500px]" : "max-h-0"
          } bg-white shadow-md`}
      >
        <nav className="flex flex-col space-y-2 px-4 py-4">
          <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium">Home</Link>
          <Link href="/product" className="text-gray-700 hover:text-indigo-600 font-medium">Product</Link>
          <Link href="/login" className="text-gray-700 hover:text-indigo-600 font-medium">Login</Link>
          <Link href={"/cart"} className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition mt-2">
            <FaShoppingCart className="mr-2" />
            Cart ({totalCart})
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;


