/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'skintific.com' },
      { hostname: 'down-id.img.susercontent.com' }
    ]
  },
  output: 'standalone'
};

export default nextConfig;
