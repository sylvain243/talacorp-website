/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.talacorporation.com" }],
        destination: "https://talacorporation.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
