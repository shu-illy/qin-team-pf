/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.microcms-assets.io"],
  },
  env: {
    MY_TWITTER_USER_ID: "1223055801197023237",
  },
};

module.exports = nextConfig;
