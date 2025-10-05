"use client";
import { decrementQuantity, deleteCartItem, incrementQuantity } from "@/lib/redux/features/cart";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const SkeletonItem = () => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-4 animate-pulse">
    {/* Product info */}
    <div className="flex flex-col sm:flex-row items-center sm:items-start flex-1 gap-4 w-full">
      <div className="w-full sm:w-28 h-28 bg-gray-200 rounded-md" />
      <div className="flex flex-col gap-2 w-full sm:w-auto">
        <div className="h-5 w-3/4 sm:w-32 bg-gray-200 rounded" />
        <div className="h-5 w-1/2 sm:w-20 bg-gray-200 rounded mt-1" />
      </div>
    </div>

    {/* Quantity Controls */}
    <div className="flex items-center justify-start sm:justify-center gap-2 mt-4 sm:mt-0">
      <div className="w-8 h-8 bg-gray-200 rounded" />
      <div className="w-6 h-5 bg-gray-200 rounded" />
      <div className="w-8 h-8 bg-gray-200 rounded" />
    </div>

    {/* Remove Button */}
    <div className="w-6 h-6 bg-gray-200 rounded mt-4 sm:mt-0 sm:mx-auto" />
  </div>
);


const SkeletonSummary = () => (
  <div className="bg-white shadow-md rounded-lg p-6 h-fit animate-pulse">
    <h2 className="text-xl font-bold mb-6 bg-gray-200 w-32 h-6 rounded" />
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="w-20 h-4 bg-gray-200 rounded" />
        <div className="w-12 h-4 bg-gray-200 rounded" />
      </div>
      <div className="flex justify-between">
        <div className="w-20 h-4 bg-gray-200 rounded" />
        <div className="w-12 h-4 bg-gray-200 rounded" />
      </div>
      <div className="flex justify-between font-bold text-lg">
        <div className="w-20 h-5 bg-gray-200 rounded" />
        <div className="w-12 h-5 bg-gray-200 rounded" />
      </div>
    </div>
    <div className="mt-6 w-full h-10 bg-gray-200 rounded" />
  </div>
);

const CartPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [cartItems]);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item.discount_price ?? item.seeling_price) * item.quantity,
    0
  );

  return (
    <div className="min-h-[50vh] max-w-7xl mx-auto px-4 py-8 sm:py-12 flex flex-col">
      <h1 className="text-3xl font-bold mb-8 text-center sm:text-left">Shopping Cart</h1>

      {loading ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          <div className="lg:col-span-2 bg-white shadow-md rounded-lg overflow-hidden">
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
          </div>
          <SkeletonSummary />
        </div>
      ) : cartItems.length === 0 ? (
        <div className="flex-1 flex flex-col justify-center items-center">
          <p className="text-gray-600 text-lg mb-4">Your cart is empty.</p>
          <Link
            href="/"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-4"
                  >
                    {/* Product Info */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start flex-1 gap-4">
                      <Link href={`/product/${item.product_slug}`}>
                        <Image
                          width={112}
                          height={112}
                          src={'https://minio.tizaraa.shop/tizaraa/' + item.product_thumbnail}
                          alt={item.product_name}
                          className="w-28 h-28 object-contain bg-gray-100 rounded-md"
                        />
                      </Link>
                      <div className="text-center sm:text-left">
                        <Link href={`/product/${item.product_slug}`} className="text-lg font-semibold text-gray-800">
                          {item.product_name}
                        </Link>
                        <p className="text-indigo-600 font-bold mt-1">
                          ${item.discount_price ?? item.seeling_price}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        className="px-3 cursor-pointer py-1 border rounded hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        className="px-3 cursor-pointer py-1 border rounded hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => dispatch(deleteCartItem(item.id))}
                      className="text-red-500 hover:text-red-700 cursor-pointer flex justify-center mt-2 sm:mt-0"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white shadow-md rounded-lg p-6 h-fit sticky top-4">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <Link
              href={"/order-success"}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
