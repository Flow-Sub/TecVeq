import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'encrypted-tbn0.gstatic.com',
      'placehold.co',
      'images.unsplash.com',
      'picsum.photos',
    ],
  },
};

export default nextConfig;
