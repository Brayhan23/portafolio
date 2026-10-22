import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: { globalNotFound: true },
  async redirects() {
    return [{ source: "/", destination: "/es", permanent: false }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

