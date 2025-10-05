import { NextResponse, NextRequest } from "next/server";

import products from "../../../../lib/json/flash-sales.json";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const product = products.find((p) => p.product_slug === slug);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const relatedProducts = products
    .filter((p) => p.product_slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);

  return NextResponse.json({ product, relatedProducts });
}
