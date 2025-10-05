import React from "react";

const HeroSection: React.FC = () => {

  return (
    <section className="bg-indigo-600 text-white py-20 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to MiniShop</h1>
      <p className="text-lg md:text-2xl mb-6">
        Discover amazing products at unbeatable prices!
      </p>
    </section>
  );
};

export default HeroSection;
