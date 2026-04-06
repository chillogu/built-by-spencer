import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-navy-950 text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
