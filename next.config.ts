const { APP1_URL } = process.env;
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/test",
        destination: `${APP1_URL}/test`,
      },
      {
        source: "/test/:path+",
        destination: `${APP1_URL}/test/:path+`,
      },
      {
        source: "/test-static/_next/:path+",
        destination: `${APP1_URL}/test-static/_next/:path+`,
      },
    ];
  },
};

export default nextConfig;
