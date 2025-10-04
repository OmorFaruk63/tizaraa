import HomePage from "@/components/HomePage";
import { fetchDataSSR } from "@/lib/fetcher";

export type Product = {
  id: number;
  product_thumbnail: string;
  product_name: string;
  product_slug: string;
  seeling_price: number; // fixed typo: "seeling_price" -> "selling_price"
  discount_price: number | null;
  rating: number;
};

export default async function Home() {

  const data: Product[] = await fetchDataSSR(`/api/home`)
  return (
    <div>
      <HomePage data={data} />
    </div>
  );
}
