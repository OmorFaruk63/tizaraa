"use client";
import Link from "next/link";
import { FaRegSadTear } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-700 px-6 text-center">
      {/* Icon */}
      <div className="text-blue-600 text-7xl mb-6 animate-bounce">
        <FaRegSadTear />
      </div>

      {/* 404 Text */}
      <h1 className="text-5xl sm:text-7xl font-extrabold text-gray-800 mb-4">
        404
      </h1>

      {/* Message */}
      <p className="text-lg sm:text-xl mb-6 text-gray-600 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Back Home Button */}
      <Link
        href="/"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
