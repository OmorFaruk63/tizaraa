'use client'; // ক্লায়েন্ট-সাইড কম্পোনেন্ট

import { FC } from 'react';

// প্রোডাক্ট কার্ডের প্রপস টাইপ
interface ProductCardProps {
 id: number;
 name: string;
 price: number;
 image: string;
}

// প্রোডাক্ট কার্ড কম্পোনেন্ট
const ProductCard: FC<ProductCardProps> = ({ id, name, price, image }) => {
 return (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
   <img
    src={image}
    alt={name}
    className="w-full h-48 object-cover"
   />
   <div className="p-4">
    <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
    <p className="text-gray-600 mt-1">${price.toFixed(2)}</p>
    <button
     className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
     onClick={() => alert(`Added ${name} to cart`)} // ডামি ফাংশনালিটি
    >
     Add to Cart
    </button>
   </div>
  </div>
 );
};

export default ProductCard;