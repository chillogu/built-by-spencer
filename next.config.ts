import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/", permanent: true },
      { source: "/carriers", destination: "/", permanent: true },
      { source: "/contact", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
