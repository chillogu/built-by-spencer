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
  openGraph: {
    title: "Spencer Hanson | Independent Life Insurance Broker",
    description: "Independent life insurance broker working alongside Solace Financial. Serving clients nationwide with personalized coverage and the best rates from top carriers.",
    url: "https://protectedwithspencer.com", // Assuming this is the root URL
    siteName: "Protected With Spencer",
    images: ["/business_card.jpeg"], // Use path relative to public directory
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spencer Hanson | Independent Life Insurance Broker",
    description: "Independent life insurance broker working alongside Solace Financial. Serving clients nationwide with personalized coverage and the best rates from top carriers.",
    images: ["/business_card.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable}`}>
      <body className="bg-charcoal-950 text-cream-100 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
