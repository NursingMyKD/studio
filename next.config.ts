import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true, // TODO: Fix TypeScript errors and set to false
  },
  eslint: {
    ignoreDuringBuilds: true, // TODO: Fix ESLint errors and set to false
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
    unoptimized: true,
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
  allowedDevOrigins: ['https://9003-firebase-studio-1749696820275.cluster-pgviq6mvsncnqxx6kr7pbz65v6.cloudworkstations.dev'],
  devIndicators: {
    port: 9003,
  },
};

export default nextConfig;
