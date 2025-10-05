
import { Product } from "@/app/page";
import ProductDetails from "@/components/ProductDetails";
import ProductListing from "@/components/ProductListing";
import { fetchDataSSR } from "@/lib/fetcher";
import React from "react";

export async function generateStaticParams() {
  return ['transcend-esd380c-500gb-type-c-portable-ssd'].map((slug) => ({ slug }));
}

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

  const productData: ProductDetailsType | null = await fetchDataSSR(`/api/product/${slug}`)

  if (!productData) {
    return <div>fetch filed data</div>
  }
  return (
    <main>
      <ProductDetails productData={productData} />
      <ProductListing data={productData.relatedProducts} title="Related Products" />
    </main>
  );
};

