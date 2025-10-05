// app/hooks/useProducts.ts
import useSWR from "swr";
import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "@/app/page";

interface Response {
  data: Product[];
  page: number;
  totalPages: number;
  total: number;
}

export const useProducts = (initialData: Response, initialQuery = "") => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [sort, setSort] = useState(""); // new state for sorting

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query), 500);
    return () => clearTimeout(handler);
  }, [query]);

  const { data, isLoading, error } = useSWR<Response>(
    `/api/product?page=${page}&limit=8&q=${debouncedQuery}&sort=${sort}`,
    (url) => axios.get(url).then((res) => res.data),
    {
      fallbackData: initialData,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
      dedupingInterval: 100000000,
    }
  );

  return {
    products: data?.data || [],
    page: data?.page || 1,
    totalPages: data?.totalPages || 1,
    total: data?.total || 0,
    pageSetter: setPage,
    query,
    setQuery,
    sort,
    setSort,
    loading: isLoading,
    error,
  };
};
