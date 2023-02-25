/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: [
      'tailus.io',
      'images.unsplash.com',
      'scontent.fcbb2-1.fna.fbcdn.net'
    ],

  },
}

module.exports = nextConfig
