"use client"
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface Product {
 id: number;
 title: string;
 price: number;
 description: string;
 category: string;
 image: string;
}

const ProductDetails: React.FC = () => {
 const [product, setProduct] = useState<Product | null>(null);

 // Example: fetch a single product from FakeStoreAPI
 useEffect(() => {
  fetch("https://fakestoreapi.com/products/1")
   .then((res) => res.json())
   .then((data: Product) => setProduct(data))
   .catch((err) => console.error(err));
 }, []);

 if (!product) {
  return <div className="text-center py-20">Loading product...</div>;
 }

 return (
  <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
   {/* Left: Image Gallery */}
   <div>
    <Swiper
     modules={[Navigation, Thumbs]}
     spaceBetween={10}
     navigation
     className="mb-4 rounded-lg shadow-lg"
    >
     {/* Main Image */}
     <SwiperSlide>
      <img
       src={product.image}
       alt={product.title}
       className="w-full h-[400px] object-contain bg-white rounded-lg"
      />
     </SwiperSlide>
     {/* Duplicate main image for demo - in real API, use multiple images */}
     <SwiperSlide>
      <img
       src={product.image}
       alt={product.title}
       className="w-full h-[400px] object-contain bg-white rounded-lg"
      />
     </SwiperSlide>
    </Swiper>

    {/* Thumbnail Gallery */}
    <Swiper
     modules={[Navigation]}
     spaceBetween={10}
     slidesPerView={4}
     className="mt-4"
    >
     <SwiperSlide>
      <img
       src={product.image}
       alt="thumbnail"
       className="w-full h-20 object-contain bg-white p-2 rounded border cursor-pointer hover:border-indigo-500"
      />
     </SwiperSlide>
     <SwiperSlide>
      <img
       src={product.image}
       alt="thumbnail"
       className="w-full h-20 object-contain bg-white p-2 rounded border cursor-pointer hover:border-indigo-500"
      />
     </SwiperSlide>
     <SwiperSlide>
      <img
       src={product.image}
       alt="thumbnail"
       className="w-full h-20 object-contain bg-white p-2 rounded border cursor-pointer hover:border-indigo-500"
      />
     </SwiperSlide>
    </Swiper>
   </div>

   {/* Right: Product Info */}
   <div className="flex flex-col justify-center">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
    <p className="text-lg text-gray-600 mb-6">{product.description}</p>
    <p className="text-2xl font-bold text-indigo-600 mb-6">${product.price}</p>

    {/* Cart Button */}
    <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition w-fit">
     Add to Cart
    </button>
   </div>
  </div>
 );
};

export default ProductDetails;
