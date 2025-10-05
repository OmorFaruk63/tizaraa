// app/api/products/route.ts
import { NextResponse, NextRequest } from "next/server";
import products from "../../../lib/json/flash-sales.json";

export async function GET(request: NextRequest) {
  // Wait 1 minute server delay To get a taste of real servers
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { searchParams } = new URL(request.url);

  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "12");
  const query = searchParams.get("q")?.toLowerCase() || "";
  const sort = searchParams.get("sort") || "";

  let filteredProducts = [...products];

  // Search
  if (query) {
    filteredProducts = filteredProducts.filter((p) =>
      p.product_name.toLowerCase().includes(query)
    );
  }

  // Sort by price
  if (sort === "asc") {
    filteredProducts.sort((a, b) => a.seeling_price - b.seeling_price);
  } else if (sort === "desc") {
    filteredProducts.sort((a, b) => b.seeling_price - a.seeling_price);
  }

  const total = filteredProducts.length;
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedProducts = filteredProducts.slice(start, end);

  return NextResponse.json({
    data: paginatedProducts,
    page,
    totalPages: Math.ceil(total / limit),
    total,
  });
}
