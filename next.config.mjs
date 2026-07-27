/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can be hosted on any static host (rsconsultants.in)
  output: "export",
  reactStrictMode: true,
  images: {
    // next/image with static export requires unoptimized images
    unoptimized: true,
  },
};

export default nextConfig;
