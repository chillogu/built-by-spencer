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
  metadataBase: new URL("https://protectedwithspencer.com"),
  title: "Built by Spencer — Web Design",
  description: "Custom websites and landing pages. Starting at $175.",
  openGraph: {
    title: "Built by Spencer — Web Design",
    description: "Custom websites and landing pages. Starting at $175.",
    url: "https://protectedwithspencer.com",
    siteName: "Built by Spencer",
    images: [{ url: "/business_card.jpeg", width: 1191, height: 672, alt: "Built by Spencer" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Built by Spencer — Web Design",
    description: "Custom websites and landing pages. Starting at $175.",
    images: ["/business_card.jpeg"],
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
