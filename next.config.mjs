/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co", "lh3.googleusercontent.com"], // Add external domains
  },
};

export default nextConfig;
