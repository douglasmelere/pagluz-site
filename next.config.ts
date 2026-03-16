import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
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
