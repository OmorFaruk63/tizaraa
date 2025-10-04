type FetcherOptions = {
 revalidate?: number; // in seconds
 tags?: string[];     // optional, for tag-based revalidation
};


export const fetchDataSSR = async <T>(
 url: string,
 options?: FetcherOptions
): Promise<T> => {
 const revalidate = options?.revalidate ?? 3600;
 const tags = options?.tags ?? [];

 const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
 const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;

 try {
  const res = await fetch(fullUrl, {
   next: { revalidate, tags },
   cache: "force-cache",
  });

  if (!res.ok) {
   throw new Error(`Fetch error: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
 } catch (err) {
  throw new Error(`Fetcher failed: ${(err as Error).message}`);
 }
}
