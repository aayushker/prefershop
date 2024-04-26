import type { Metadata } from "next";
import { Inter } from "next/font/google";

import '@/vendor/bootstrap/css/bootstrap.min.css';
import '@/vendor/bootstrap-icons/bootstrap-icons.css';
import '@/vendor/glightbox/css/glightbox.css';
import '@/vendor/swiper/swiper-bundle.min.css';
import '@/vendor/aos/aos.css';
import '@/assests/main.css'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PreferShop",
  description: "Product suggestion at a glance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
