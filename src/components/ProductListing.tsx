"use client"
import { Product } from "@/app/page";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

type PropsType = {
  title: string
  data: Product[]
}

const ProductListing: React.FC<PropsType> = ({ title, data }) => {

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">{title}</h2>
      <Swiper
        // modules={[Navigation, Pagination]}
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
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col items-center text-center">
                {/* Product Image */}
                <div className="w-40 h-40 mb-4 flex items-center justify-center">
                  <Link href={`/product/${product.product_slug}`}>
                    <img
                      src={'https://minio.tizaraa.shop/tizaraa/' + product.product_thumbnail}
                      alt={product.product_name}
                      className="max-h-full object-contain"
                    />
                  </Link>
                </div>

                {/* Product Title */}
                <Link href={`/product/${product.product_slug}`} className="text-gray-800 font-semibold text-lg mb-2 line-clamp-2 h-15">
                  {product.product_name}
                </Link>

                {/* Product Price */}
                <p className="text-indigo-600 font-bold mb-4 text-lg">${product.seeling_price}</p>

                {/* Add to Cart Button */}
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>

  );
};

export default ProductListing;
