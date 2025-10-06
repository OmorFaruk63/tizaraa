"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { Product } from "@/app/page";
import Image from "next/image";
import CartButton from "./CartButton";


export interface PageProps {
  productData: {
    product: Product;
    relatedProducts: Product[]
  }
}

const ProductDetails: React.FC<PageProps> = ({ productData }) => {

  const product = productData.product

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left: Image Gallery */}
      <div>
        <Swiper
          modules={[Navigation, Thumbs]}
          spaceBetween={10}
          navigation
          className="mb-4 rounded-lg shadow-lg"
        >
          {/* Main Image */}
          {[1, 2, 3].map(a => (<SwiperSlide key={a}>
            <Image
              width={600}
              height={400}
              src={'https://minio.tizaraa.shop/tizaraa/' + product.product_thumbnail}
              alt={product.product_name}
              className="w-full h-[400px] object-contain bg-white rounded-lg"
            />
          </SwiperSlide>))}
        </Swiper>

        {/* Thumbnail Gallery */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={4}
          className="mt-4"
        >
          <SwiperSlide>
            <div className="w-full h-20 bg-white p-2 rounded border cursor-pointer hover:border-indigo-500">
              <Image
                src={`https://minio.tizaraa.shop/tizaraa/${product.product_thumbnail}`}
                alt="thumbnail"
                width={125}
                height={62}
                className="w-full h-full object-contain rounded"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-20 bg-white p-2 rounded border cursor-pointer hover:border-indigo-500">
              <Image
                src={`https://minio.tizaraa.shop/tizaraa/${product.product_thumbnail}`}
                alt="thumbnail"
                width={125}
                height={62}
                className="w-full h-full object-contain rounded"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-20 bg-white p-2 rounded border cursor-pointer hover:border-indigo-500">
              <Image
                src={`https://minio.tizaraa.shop/tizaraa/${product.product_thumbnail}`}
                alt="thumbnail"
                width={125}
                height={62}
                className="w-full h-full object-contain rounded"
              />
            </div>
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
        <CartButton className="w-fit px-8 py-3 font-semibold" product={product} />
      </div>
    </section>
  );
};

export default ProductDetails;
