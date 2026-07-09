import type { Metadata } from "next";
import { Product_Sans } from "next/font/google";
import "./globals.css";

const productSans = Product_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${productSans.className}`}>
        {children}
      </body>
    </html>
  );
}
