/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/spotless-blinds',
  images: { unoptimized: true },
};
module.exports = nextConfig;
