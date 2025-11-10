/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: { remotePatterns: [new URL(process.env.AWS_S3_BUCKET_URL + "/**")] },
};

export default nextConfig;
