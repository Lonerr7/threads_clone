/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'img.clerk.com' }],
  },
  experimental: {
    serverComponentsExternalPackages: ['mongoose'],
  },
};

module.exports = nextConfig;
