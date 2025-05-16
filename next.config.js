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
  trailingSlash: true, // 生成 URL 尾部加上斜杠，有助于静态部署
  images: {
    // 静态导出必须禁用图片优化或使用外部图片优化服务
    unoptimized: true, // 禁用图片优化，必须为静态导出设置为true
  },
  // 禁用需要服务器的功能
  compress: true, // 启用静态资源压缩
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
