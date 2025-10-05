import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://minio.tizaraa.shop",
      },
      {
        protocol: "https",
        hostname: "minio.tizaraa.shop",
      },
    ],
  },
};

export default nextConfig;
