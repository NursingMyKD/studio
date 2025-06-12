import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: false, // Use false for a 307/308 temporary redirect
      },
    ];
  },
  experimental: {
    allowedDevOrigins: ['https://6000-firebase-studio-1749696820275.cluster-pgviq6mvsncnqxx6kr7pbz65v6.cloudworkstations.dev'],
  }
};

export default nextConfig;
