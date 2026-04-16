import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://protectedwithspencer.com"),
  title: "Spencer Hanson | Independent Life Insurance Broker",
  description:
    "Independent life insurance broker licensed in New York, Texas, and Ohio. I compare top carriers and match you with the right coverage — no pressure, no runaround.",
  openGraph: {
    title: "Spencer Hanson | Independent Life Insurance Broker",
    description:
      "Independent life insurance broker licensed in New York, Texas, and Ohio. Compare top carriers and get the right coverage.",
    url: "https://protectedwithspencer.com",
    siteName: "Protected With Spencer",
    images: [
      {
        url: "/business_card.jpeg",
        width: 1191,
        height: 672,
        alt: "Spencer Hanson — Independent Insurance Broker",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spencer Hanson | Independent Life Insurance Broker",
    description:
      "Independent life insurance broker licensed in NY, TX, and OH. Compare carriers, get real coverage.",
    images: ["/business_card.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-ink-900 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
