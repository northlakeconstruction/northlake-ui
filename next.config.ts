import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "d1znezzvmoqsao.cloudfront.net",
        "northlake-construction.com",
        "www.northlake-construction.com"
      ],
    }
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;
