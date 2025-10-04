"use client"
import React, { useState } from "react";

interface CartItem {
 id: number;
 title: string;
 price: number;
 image: string;
 quantity: number;
}

const CheckoutPage: React.FC = () => {
 // Demo cart items
 const [cartItems] = useState<CartItem[]>([
  {
   id: 1,
   title: "Elegant Leather Backpack",
   price: 89.99,
   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
   quantity: 1,
  },
  {
   id: 2,
   title: "Stylish Cotton T-Shirt",
   price: 19.99,
   image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
   quantity: 2,
  },
 ]);

 const subtotal = cartItems.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
 );

 return (
  <div className="max-w-3xl mx-auto px-4 py-12">
   <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

   {/* Order Summary */}
   <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-xl font-bold mb-6">Order Summary</h2>

    {/* Items */}
    <div className="space-y-4">
     {cartItems.map((item) => (
      <div
       key={item.id}
       className="flex items-center justify-between border-b pb-4"
      >
       <div className="flex items-center gap-4">
        <img
         src={item.image}
         alt={item.title}
         className="w-16 h-16 object-contain rounded"
        />
        <div>
         <p className="text-sm font-medium">{item.title}</p>
         <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
        </div>
       </div>
       <p className="font-semibold">
        ${(item.price * item.quantity).toFixed(2)}
       </p>
      </div>
     ))}
    </div>

    {/* Summary */}
    <div className="mt-6">
     <div className="flex justify-between mb-2">
      <span>Subtotal</span>
      <span>${subtotal.toFixed(2)}</span>
     </div>
     <div className="flex justify-between mb-2">
      <span>Shipping</span>
      <span className="text-green-600">Free</span>
     </div>
     <div className="flex justify-between font-bold text-lg mb-4">
      <span>Total</span>
      <span>${subtotal.toFixed(2)}</span>
     </div>
    </div>

    {/* Demo Checkout Button */}
    <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
     Place Order (Demo)
    </button>
   </div>
  </div>
 );
};

export default CheckoutPage;
