/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: ['skintific.com', 'down-id.img.susercontent.com']
  },
  output: 'standalone'
};

export default nextConfig;
