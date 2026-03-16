import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/whoami',
        destination: '/quem-somos',
        permanent: true,
      },
      // You can add other legacy URL redirects here if needed
    ];
  },
};

export default nextConfig;
