import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Next doesn't walk up into the home directory.
  turbopack: { root: __dirname },
};

export default nextConfig;
