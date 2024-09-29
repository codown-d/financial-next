// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // reactStrictMode: true,
  distDir: "dist",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
