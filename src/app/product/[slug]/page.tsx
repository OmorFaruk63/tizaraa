
import { Product } from "@/app/page";
import ProductDetails from "@/components/ProductDetails";
import { fetchDataSSR } from "@/lib/fetcher";
import React from "react";


export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  type ProductDetailsType = {
    product: Product;
    relatedProducts: Product[]
  }



  const productData: ProductDetailsType = await fetchDataSSR(`/api/product/${slug}`)
  return (
    <ProductDetails productData={productData} />
  );
};

