/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'blog.openreplay.com',
        pathname: '/**'
      }
    ]
  }
}

export default nextConfig
