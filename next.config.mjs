/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qn-resource.playmods.net",
      },
      {
        protocol: "https",
        hostname: "savemp3.net",
      },
    ],
  },
};

export default nextConfig;
