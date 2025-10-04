
"use client"
import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 const toggleMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
 };

 return (
  <header className="bg-white shadow-md sticky top-0 z-50">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
     {/* Logo */}
     <div className="flex-shrink-0">
      <h1 className="text-2xl font-bold text-indigo-600">MiniShop</h1>
     </div>

     {/* Desktop Menu */}
     <nav className="hidden md:flex space-x-6 items-center">
      <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
      <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Products</a>
      <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">About</a>
      <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
      <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Login</a>
      <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
       <FaShoppingCart className="mr-2" />
       Cart (0)
      </button>
     </nav>

     {/* Mobile Menu Button */}
     <div className="md:hidden flex items-center">
      <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
       {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
     </div>
    </div>
   </div>

   {/* Mobile Menu with smooth transition */}
   <div
    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-[500px]" : "max-h-0"
     } bg-white shadow-md`}
   >
    <nav className="flex flex-col space-y-2 px-4 py-4">
     <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
     <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Products</a>
     <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">About</a>
     <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
     <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Login</a>
     <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition mt-2">
      <FaShoppingCart className="mr-2" />
      Cart (0)
     </button>
    </nav>
   </div>
  </header>
 );
};

export default Header;


