import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Raj Gold | Premium Gold Buyers",
  description: "Sell Your Gold With Confidence. Trusted Gold Buyers Offering Maximum Value, Instant Payment & Transparent Evaluation.",
  keywords: "sell gold, gold buyers, cash for gold, best gold rate, raj gold",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-light-bg text-dark-text selection:bg-gold-classic selection:text-emerald-deep overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
