// next.config.js
/** @type {import('next').NextConfig} */
// let { getPublicEnvVariables } = require("./utils/env");
// let env = getPublicEnvVariables();
// console.log(env);
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "development",
  swcMinify: true,
  // assetPrefix: env.NEXT_PUBLIC_BASE_PATH,
  // env,
  // basePath: env.NEXT_PUBLIC_BASE_PATH,
  trailingSlash: true, // 可选，生成 URL 尾部加上斜杠
  images: {
    // 默认情况下会启用图片优化
    // path: `${env.NEXT_PUBLIC_BASE_PATH}`,
    unoptimized: true, // 禁用图片优化
  },
  // async rewrites() {
  //   if (process.env.NEXT_EXPORT) {
  //     return [];
  //   } else {
  //     return [
  //       {
  //         source: "/api/:path*",
  //         destination: process.env.NEXT_PUBLIC_API_HOST + "/:path*", // 目标 API 地址
  //       },
  //     ];
  //   }
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: "/home", // 旧路径
  //       destination: "/", // 新路径
  //       permanent: true, // 如果为 true，则表示永久重定向（301），false 为临时重定向（302）
  //     },
  //   ];
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'example.com',
  //       port: '', // 端口可选
  //       pathname: '/**', // 匹配的路径
  //     },
  //   ],
  // },
  // experimental: {
  //   optimizeCss: false,
  //   appDir: true, // 只在使用 app 路由时启用
  // },
  output: "export", //适合不需要图片优化的静态网站，适合不依赖服务器的纯静态站点。
};

module.exports = nextConfig;
