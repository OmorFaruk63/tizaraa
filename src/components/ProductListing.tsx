"use client"
import { Product } from "@/app/page";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";

type PropsType = {
  title: string
  data: Product[]
}

const ProductListing: React.FC<PropsType> = ({ title, data }) => {

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">{title}</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {data?.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="m-3">
              <ProductCard product={product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

  );
};

export default ProductListing;
