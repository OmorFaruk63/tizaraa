import HomePage from "@/components/HomePage";
import { fetchDataSSR } from "@/lib/fetcher";
import { notFound } from "next/navigation";

export type Product = {
  id: number;
  product_thumbnail: string;
  product_name: string;
  product_slug: string;
  seeling_price: number;
  discount_price: number | null;
  rating: number;
};

export default async function Home() {

  const data: Product[] | null = await fetchDataSSR(`/api/home`)

  if (!data) {
    return notFound()
  }
  return (
    <div>
      <HomePage data={data} />
    </div>
  );
}
