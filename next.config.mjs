/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://preview.stemcyte.workers.dev/:path*',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
