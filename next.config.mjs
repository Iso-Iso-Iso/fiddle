/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: {
      //   TODO: figure out how to avoid it
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
