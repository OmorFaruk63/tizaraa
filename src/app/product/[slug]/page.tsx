
import { Product } from "@/app/page";
import ProductDetails from "@/components/ProductDetails";
import ProductListing from "@/components/ProductListing";
import { fetchDataSSR } from "@/lib/fetcher";
import { Metadata } from "next";
import React from "react";
type ProductDetailsType = {
  product: Product;
  relatedProducts: Product[]
}

export async function generateStaticParams() {
  return ['transcend-esd380c-500gb-type-c-portable-ssd'].map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const res: ProductDetailsType | null = await fetchDataSSR(`/api/product/${slug}`);
  if (!res) {
    return {
      title: "Product Not Found | MiniShop",
      description: "Sorry, the product you're looking for doesn't exist.",
    };
  }

  const product = res.product
  const productName = product.product_name;
  const productImage =
    "https://minio.tizaraa.shop/tizaraa/" + product.product_thumbnail;
  const productPrice = product.seeling_price;

  return {
    title: `${productName} | MiniShop`,
    description: `${productName} available for only $${productPrice}. Explore this and more on MiniShop – a modern demo eCommerce site.`,
    openGraph: {
      title: `${productName} | MiniShop`,
      description: `${productName} available for only $${productPrice}.`,
      url: `https://mini-rho-two.vercel.app/product/${product.product_slug}`,
      siteName: "MiniShop",
      images: [
        {
          url: productImage,
          width: 1200,
          height: 630,
          alt: productName,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${productName} | MiniShop`,
      description: `Buy ${productName} for just $${productPrice}.`,
      images: [productImage],
    },
  };
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
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

