import type { NextConfig } from 'next';
import path from 'path'; // added

const nextConfig: NextConfig = {
  // Explicitly pin the root to silence monorepo lockfile warning
  outputFileTracingRoot: path.resolve(__dirname), // ensures we don't climb to /Users/ngocnhanne
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 1080, 1920],
    imageSizes: [64, 128, 256],
    minimumCacheTTL: 31536000,
    unoptimized: false,
    remotePatterns: [{ protocol: 'https', hostname: 'res.cloudinary.com' }],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  compress: true,
  productionBrowserSourceMaps: false,
  generateBuildId: async () => 'static-build-' + Date.now(),
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
