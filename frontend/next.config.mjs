/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iptv-necro.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'blog.iptv-necro.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  // Add headers for XML content type
  async headers() {
    return [
      {
        source: "/:path*\\.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
