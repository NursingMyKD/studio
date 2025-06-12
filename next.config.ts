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
    // allowedDevOrigins was removed due to causing a startup error.
    // The cross-origin warning might reappear but is less critical than a config error.
  }
};

export default nextConfig;
