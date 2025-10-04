"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { Product } from "@/app/page";


export interface PageProps {
  productData: {
    product: Product;
    relatedProducts: Product[]
  }
}

const ProductDetails: React.FC<PageProps> = ({ productData }) => {

  const product = productData.product

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
              src={'https://minio.tizaraa.shop/tizaraa/' + product.product_thumbnail}
              alt={product.product_name}
              className="w-full h-[400px] object-contain bg-white rounded-lg"
            />
          </SwiperSlide>
          {/* Duplicate main image for demo - in real API, use multiple images */}
          <SwiperSlide>
            <img
              src={'https://minio.tizaraa.shop/tizaraa/' + product.product_thumbnail}
              alt={product.product_name}
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
              src={'https://minio.tizaraa.shop/tizaraa/' + product.product_thumbnail}
              alt="thumbnail"
              className="w-full h-20 object-contain bg-white p-2 rounded border cursor-pointer hover:border-indigo-500"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={'https://minio.tizaraa.shop/tizaraa/' + product.product_thumbnail}
              alt="thumbnail"
              className="w-full h-20 object-contain bg-white p-2 rounded border cursor-pointer hover:border-indigo-500"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={'https://minio.tizaraa.shop/tizaraa/' + product.product_thumbnail}
              alt="thumbnail"
              className="w-full h-20 object-contain bg-white p-2 rounded border cursor-pointer hover:border-indigo-500"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Right: Product Info */}
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.product_name}</h1>
        <p className=" text-gray-600 mb-6">
          {`Discover the quality and value of ${product.product_name}. Designed to meet your everyday needs, ${product.product_name} combines durability, style, and functionality, making it a perfect choice for anyone looking for reliability and convenience. Whether you're using it at home, in the office, or on the go, ${product.product_name} ensures a seamless experience. Don't miss out on bringing ${product.product_name} into your daily routine — it's a product you'll love and use every day.`}
        </p>
        <p className="text-2xl font-bold text-indigo-600 mb-6">${product.seeling_price}</p>

        {/* Cart Button */}
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition w-fit">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
