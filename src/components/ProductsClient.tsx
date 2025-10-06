"use client";
import React from "react";
import { useProducts } from "@/hook/useProducts";
import ProductCard from "./ProductCard";
import { Product } from "@/app/page";
import { FiSearch } from "react-icons/fi";

interface Props {
  initialData: {
    data: Product[];
    page: number;
    totalPages: number;
    total: number;
  };
}

// Simple loading skeleton component
const ProductSkeleton = () => (
  <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center animate-pulse">
    {/* Image Placeholder */}
    <div className="w-40 h-40 mb-4 bg-gray-200 rounded-lg"></div>

    {/* Title Placeholder */}
    <div className="h-5 w-32 bg-gray-200 rounded mb-2"></div>
    <div className="h-5 w-24 bg-gray-200 rounded mb-4"></div>

    {/* Price Placeholder */}
    <div className="h-5 w-16 bg-gray-300 rounded mb-4"></div>

    {/* Button Placeholder */}
    <div className="h-10 w-32 bg-gray-300 rounded"></div>
  </div>
);

// No product found component
const NoProductFound = () => (
  <div className="flex flex-col items-center justify-center py-20 text-gray-400">
    <div className="text-6xl mb-4">
      <FiSearch />
    </div>
    <h2 className="text-2xl font-semibold mb-2">No Products Found</h2>
    <p className="text-gray-500 text-center max-w-sm">
      We couldn&apos;t find any products matching your search or filter criteria.
      Try adjusting your search or clearing filters.
    </p>
  </div>
);

const ProductsClient: React.FC<Props> = ({ initialData }) => {
  const {
    products,
    page,
    totalPages,
    pageSetter,
    query,
    setQuery,
    sort,
    setSort,
    loading,
  } = useProducts(initialData);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">All Products</h1>

      {/* Search + Sort */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 w-full">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full bg-white border border-gray-200 rounded-lg shadow-sm p-3 sm:p-4">
          {/* Search Input */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-full"
          />

          {/* Sort Dropdown */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-full sm:w-48 mt-2 sm:mt-0"
          >
            <option value="">Sort by Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

      </div>

      {/* Product Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, idx) => (
            <ProductSkeleton key={idx} />
          ))}
        </div>
      ) : products.length === 0 ? (
        <NoProductFound />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p: Product) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {products.length > 0 && (
        <div className="flex justify-center items-center mt-8 space-x-3">
          <button
            disabled={page === 1}
            onClick={() => pageSetter(page - 1)}
            className="px-4 py-2 cursor-pointer bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => pageSetter(page + 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductsClient;
