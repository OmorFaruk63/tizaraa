import { NextResponse, NextRequest } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { Product } from "@/app/page";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "public/json/flash-sales.json");
  const fileData = await fs.readFile(filePath, "utf-8");
  const products: Product[] = JSON.parse(fileData);

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
