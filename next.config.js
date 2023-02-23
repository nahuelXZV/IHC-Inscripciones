/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: [
      'tailus.io',
      'images.unsplash.com',
    ],

  },
}

module.exports = nextConfig
