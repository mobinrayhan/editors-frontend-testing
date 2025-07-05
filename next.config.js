// @ts-check
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/**
 * @type {import('next').NextConfig}
 */

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  const API_LINK = isDev
    ? "http://localhost:5006"
    : "https://api.editors.academy";

  // const API_LINK = isDev
  //   ? "https://api.editors.academy"
  //   : "http://localhost:5006";

  return {
    reactStrictMode: true,
    swcMinify: true,

    env: {
      API_LINK,
      API_KEY: "594dfbc9-e86e-45a5-9e99-8f39073a65f2",
    },

    images: {
      remotePatterns: [
        { protocol: "https", hostname: "i.ibb.co" },
        { protocol: "https", hostname: "dummyimage.com" },
        { protocol: "https", hostname: "sslcommerz.com" },
        { protocol: "https", hostname: "www.tbsnews.net" },
        { protocol: "https", hostname: "download.logo.wine" },
        { protocol: "https", hostname: "res.cloudinary.com" },
        { protocol: "https", hostname: "cdn.jsdelivr.net" },
      ],
    },
  };
};
