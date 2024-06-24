/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qn-resource.playmods.net",
      },
    ],
  },
};

export default nextConfig;
