import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/damon-portfolio",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: "/damon-portfolio",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
