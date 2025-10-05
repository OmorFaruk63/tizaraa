import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Header from "@/components/header";
import Footer from "@/components/Footer";
import StoreProvider from "./StoreProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MiniShop – Demo eCommerce Website",
    template: "%s | MiniShop",
  },
  description:
    "MiniShop is a modern demo eCommerce website built with Next.js. Browse a wide range of products, experience fast performance, and explore smooth UI design.",
  keywords: [
    "MiniShop",
    "demo ecommerce",
    "nextjs ecommerce",
    "react ecommerce",
    "online shopping demo",
    "frontend portfolio project",
  ],
  authors: [{ name: "Omor Faruk" }],
  openGraph: {
    title: "MiniShop – Demo eCommerce Website",
    description:
      "A modern eCommerce demo website built with Next.js and Tailwind CSS. Fast, responsive, and clean UI.",
    url: "https://mini-rho-two.vercel.app",
    siteName: "MiniShop",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/image/og-image.png",
        width: 1200,
        height: 630,
        alt: "MiniShop – Demo eCommerce Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MiniShop – Demo eCommerce Website",
    description:
      "A clean and modern demo eCommerce platform built with Next.js.",
    creator: "@minishop",
    images: ["/image/og-image.png"],
  },


};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
            style: {
              fontSize: "14px",
            },
          }}
        />
        <StoreProvider>

          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
