import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        hostname: '**',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
