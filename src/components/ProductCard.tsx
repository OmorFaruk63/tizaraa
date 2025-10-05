import React from "react";
import Image from "next/image";
import Link from "next/link";
import CartButton from "./CartButton";
import { Product } from "@/app/page";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col items-center text-center">
      {/* Product Image */}
      <Link href={`/product/${product.product_slug}`}>
        <div className="w-40 h-40 mb-4 flex items-center justify-center">
          <Image
            width={160}
            height={160}
            src={'https://minio.tizaraa.shop/tizaraa/' + product.product_thumbnail}
            alt={product.product_name}
            className="max-h-full object-contain"
          />
        </div>
      </Link>

      {/* Product Title */}
      <Link href={`/product/${product.product_slug}`} className="text-gray-800 font-semibold text-lg mb-2 line-clamp-2 h-15">
        {product.product_name}
      </Link>

      {/* Product Price */}
      <p className="text-indigo-600 font-bold mb-4 text-lg">${product.seeling_price}</p>

      {/* Add to Cart Button */}
      <CartButton product={product} />
    </div>
  );
};

export default ProductCard;
