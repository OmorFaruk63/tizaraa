import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { Product } from "@/app/page";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  // Absolute path to your JSON file
  const filePath = path.join(process.cwd(), "public/json/flash-sales.json");
  const fileData = await fs.readFile(filePath, "utf-8");
  const products: Product[] = JSON.parse(fileData);

  // Find the main product
  const product = products.find((p) => p.product_slug === slug);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  // Get 10 random products (excluding the current one)
  const relatedProducts = products
    .filter((p) => p.product_slug !== slug) // remove current product
    .sort(() => 0.5 - Math.random()) // shuffle
    .slice(0, 10); // take first 10

  return NextResponse.json({ product, relatedProducts });
}
