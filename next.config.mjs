/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",
      },
      {
        protocol: "https",
        hostname: "sslcommerz.com",
      },
      {
        protocol: "https",
        hostname: "www.tbsnews.net",
      },
      {
        protocol: "https",
        hostname: "download.logo.wine",
      },
    ],
  },
};

export default nextConfig;
