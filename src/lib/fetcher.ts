export const fetchDataSSR = async <T>(url: string): Promise<T | null> => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  const fullUrl = `${baseUrl}${url}`;

  try {
    const res = await fetch(fullUrl, { cache: "force-cache" });
    if (!res.ok) {
      console.error(`Fetch error: ${res.status} ${res.statusText}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.error(`Fetcher failed: ${(err as Error).message}`);
    return null; // Return null on network or other errors
  }
};
