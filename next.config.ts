import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '/elevate',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
