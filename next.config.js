/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  
  reactStrictMode: true,
  images: {
    domains: ["scontent-cgk1-1.cdninstagram.com", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
