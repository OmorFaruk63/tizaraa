"use client";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const OrderSuccessPage: React.FC = () => {
 return (
  <div className="max-w-3xl mx-auto px-4 py-16 flex flex-col items-center text-center">
   {/* Success Icon */}
   <div className="text-green-500 mb-6">
    <FaCheckCircle size={90} />
   </div>

   {/* Success Message */}
   <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
    Order Placed Successfully!
   </h1>
   <p className="text-gray-600 max-w-md mb-8">
    Thank you for your purchase. Your order has been confirmed and is now
    being processed. You’ll receive an email confirmation shortly with your
    order details.
   </p>

   {/* Order Summary Card */}
   <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-3/4 mb-8 text-left">
    <h2 className="text-xl font-semibold mb-4 text-gray-800">
     Order Summary
    </h2>
    <div className="divide-y divide-gray-200">
     <div className="flex justify-between py-2">
      <span>Order Number</span>
      <span className="font-medium">#TIZ123456</span>
     </div>
     <div className="flex justify-between py-2">
      <span>Payment Method</span>
      <span className="font-medium">Credit Card</span>
     </div>
     <div className="flex justify-between py-2">
      <span>Shipping</span>
      <span className="text-green-600">Free</span>
     </div>
     <div className="flex justify-between py-2 font-semibold text-lg">
      <span>Total</span>
      <span>$249.99</span>
     </div>
    </div>
   </div>

   {/* Actions */}
   <div className="flex flex-col sm:flex-row gap-4">
    <Link
     href="/"
     className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
    >
     Continue Shopping
    </Link>
   </div>
  </div>
 );
};

export default OrderSuccessPage;
