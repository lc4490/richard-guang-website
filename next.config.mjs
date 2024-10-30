/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img-de-v2.gtsstatic.net",
        pathname: "/reno/imagereader.aspx/**", // Allows all images from this path
      },
      {
        protocol: "https",
        hostname: "mmsmedia.vht.com",
        pathname: "/Media/**", // Allows images from this specific path
      },
      {
        protocol: "https",
        hostname: "static-ind-elliman-newyorkcity-production.gtsstatic.net",
        pathname: "/resources/**", // Allows images from this specific path
      },
    ],
  },
};

export default nextConfig;
