import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://built-by-spencer.vercel.app"),
  title: "Built by Spencer — Web Design",
  description: "Custom websites and landing pages for small businesses. Starting at $175.",
  openGraph: {
    title: "Built by Spencer — Web Design",
    description: "Custom websites and landing pages for small businesses. Starting at $175.",
    url: "https://built-by-spencer.vercel.app",
    siteName: "Built by Spencer",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Built by Spencer — Web Design",
    description: "Custom websites and landing pages for small businesses. Starting at $175.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-bg text-white antialiased">
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
