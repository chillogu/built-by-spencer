import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spencer Hanson | Independent Life Insurance Broker",
  description: "Independent life insurance broker working alongside Solace Financial. Serving clients nationwide with personalized coverage and the best rates from top carriers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable}`}>
      <body className="bg-cream-100 text-charcoal-900 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
