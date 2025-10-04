"use client"
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

interface CartItem {
 id: number;
 title: string;
 price: number;
 image: string;
 quantity: number;
}

const CartPage: React.FC = () => {
 const [cartItems, setCartItems] = useState<CartItem[]>([
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

 // Increase quantity
 const increaseQty = (id: number) => {
  setCartItems((prev) =>
   prev.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
   )
  );
 };

 // Decrease quantity
 const decreaseQty = (id: number) => {
  setCartItems((prev) =>
   prev.map((item) =>
    item.id === id && item.quantity > 1
     ? { ...item, quantity: item.quantity - 1 }
     : item
   )
  );
 };

 // Remove item
 const removeItem = (id: number) => {
  setCartItems((prev) => prev.filter((item) => item.id !== id));
 };

 // Calculate totals
 const subtotal = cartItems.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
 );

 return (
  <div className="max-w-7xl mx-auto px-4 py-12">
   <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

   {cartItems.length === 0 ? (
    <p className="text-gray-600">Your cart is empty.</p>
   ) : (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
     {/* Cart Items Table */}
     <div className="lg:col-span-2 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="divide-y divide-gray-200">
       {cartItems.map((item) => (
        <div
         key={item.id}
         className="flex flex-col sm:flex-row items-center sm:items-stretch justify-between p-4"
        >
         {/* Image + Info */}
         <div className="flex items-center gap-4 flex-1">
          <img
           src={item.image}
           alt={item.title}
           className="w-24 h-24 object-contain bg-gray-100 rounded"
          />
          <div>
           <h2 className="text-lg font-semibold text-gray-800">
            {item.title}
           </h2>
           <p className="text-indigo-600 font-bold mt-1">
            ${item.price}
           </p>
          </div>
         </div>

         {/* Quantity Controls */}
         <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <button
           onClick={() => decreaseQty(item.id)}
           className="px-3 py-1 border rounded hover:bg-gray-100"
          >
           -
          </button>
          <span className="px-4">{item.quantity}</span>
          <button
           onClick={() => increaseQty(item.id)}
           className="px-3 py-1 border rounded hover:bg-gray-100"
          >
           +
          </button>
         </div>

         {/* Remove */}
         <button
          onClick={() => removeItem(item.id)}
          className="text-red-500 hover:text-red-700 mt-4 sm:mt-0 sm:ml-6"
         >
          <FaTrash />
         </button>
        </div>
       ))}
      </div>
     </div>

     {/* Order Summary */}
     <div className="bg-white shadow-md rounded-lg p-6 h-fit">
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

      <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
       Proceed to Checkout
      </button>
     </div>
    </div>
   )}
  </div>
 );
};

export default CartPage;
