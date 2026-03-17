import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Disable Turbopack to avoid cache corruption issues
  turbopack: undefined,
};

export default nextConfig;
