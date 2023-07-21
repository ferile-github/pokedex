/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	distDir: 'dist',
  images: {
		unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.API
      },
    ],
  },
}


module.exports = nextConfig
