/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
  reactStrictMode: true,
	distDir: 'dist',
  images: {
		unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_API
      },
    ],
  },
}


module.exports = nextConfig
