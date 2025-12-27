/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // images: {
  //   domains: ["i.ibb.co", "lh3.googleusercontent.com"], // Add external domains
  // },

  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "plate-share-server-sand.vercel.app",
      //   port: "",
      //   pathname: "/**",
      //   search: "",
      // },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
