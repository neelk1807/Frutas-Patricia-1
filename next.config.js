/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // ensure App Router is enabled
  },
  output: 'standalone', // needed for Vercel
}

export default nextConfig
