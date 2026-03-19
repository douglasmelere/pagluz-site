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
      // Redirecionamento para o encurtador de newsletter do Backend
      {
        source: '/n/:id',
        destination: 'https://api.pagluz.com.br/newsletter/r/:id',
        permanent: false, // 302
      },
      // You can add other legacy URL redirects here if needed
    ];
  },
};

export default nextConfig;
