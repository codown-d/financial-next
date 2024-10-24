// next.config.js
/** @type {import('next').NextConfig} */
// let { getPublicEnvVariables } = require("./utils/env");
// let env = getPublicEnvVariables();
// console.log(env);
const nextConfig = {
  // env,
  // basePath: env.NEXT_PUBLIC_BASE_PATH,
  // output: "export", //适合不需要图片优化的静态网站，适合不依赖服务器的纯静态站点。
  // images: {
  //   // 默认情况下会启用图片优化
  //   path: `${env.NEXT_PUBLIC_BASE_PATH}`,
  //   unoptimized: true, // 禁用图片优化
  // },
  // reactStrictMode: true,
  // distDir: "dist",
  async redirects() {
    return [
      {
        source: '/home', // 旧路径
        destination: '/',    // 新路径
        permanent: true,     // 如果为 true，则表示永久重定向（301），false 为临时重定向（302）
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    domains: ['os.alipayobjects.com'], // 允许 os.alipayobjects.com 加载图片
  },
};

module.exports = nextConfig;
