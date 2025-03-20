/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Officially recommended
    images: {
      unoptimized: true, // Required for GitHub Pages
    },
    basePath: "/Aadarsh_Portfolio",
    assetPrefix: "/Aadarsh_Portfolio",
  };
  
  module.exports = nextConfig;
  