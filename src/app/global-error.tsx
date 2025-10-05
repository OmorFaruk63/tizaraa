"use client";
import { useEffect } from "react";
import Link from "next/link";
import { MdErrorOutline } from "react-icons/md";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-700 px-6 text-center">
      {/* Icon */}
      <div className="text-red-500 text-7xl mb-6 animate-pulse">
        <MdErrorOutline />
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-800 mb-4">
        Something went wrong
      </h1>

      {/* Message */}
      <p className="text-lg sm:text-xl mb-6 text-gray-600 max-w-md">
        We’re sorry, but an unexpected error occurred. Please try again or return to the home page.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => reset()}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Try Again
        </button>

        <Link
          href="/"
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
