"use client"
import React from "react";

import ProductListing from "./ProductListing";
import HeroSection from "./HeroSection";
import { Product } from "@/app/page";

export interface HomePageProps {
  data: Product[];
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <HeroSection />
      {/* Product Listing */}
      <ProductListing data={data} title="Featured Products" />
      <ProductListing data={data.slice(20)} title=" Best selling products" />
    </div>
  );
};

export default HomePage;
