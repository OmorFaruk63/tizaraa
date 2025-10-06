// app/products/page.tsx
import React from "react";
import ProductsClient from "@/components/ProductsClient";
import { fetchDataSSR } from "@/lib/fetcher";
import { Product } from "../page";
import { notFound } from "next/navigation";

interface ResponseType {
 data: Product[],
 page: number,
 totalPages: number,
 total: number

}
const ProductsPage = async () => {
 const initialData: ResponseType | null = await fetchDataSSR(`/api/product?page=1&limit=8`);

 if (!initialData) {
  return notFound()
 }

 return <ProductsClient initialData={initialData} />;
};

export default ProductsPage;
