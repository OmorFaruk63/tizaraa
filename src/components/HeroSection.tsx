
import React from "react";

const HeroSection: React.FC = () => {

  return (
    <section className="bg-indigo-600 text-white py-20 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to MiniShop</h1>
      <p className="text-lg md:text-2xl mb-6">
        Discover amazing products at unbeatable prices!
      </p>
      <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
        Shop Now
      </button>
    </section>
  );
};

export default HeroSection;
