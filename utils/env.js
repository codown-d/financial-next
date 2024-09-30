// utils/env.js
const dotenv = require("dotenv");
dotenv.config();
// 提取所有以 NEXT_PUBLIC_ 开头的环境变量
const getPublicEnvVariables = () => {
  return Object.entries(process.env)
    .filter(([key]) => key.startsWith("NEXT_PUBLIC_"))
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
};

// 导出服务器端和客户端的环境变量
module.exports = {
  getPublicEnvVariables,
  // 其他需要导出的环境变量可以直接使用 process.env 访问
  SERVER_SECRET_KEY: process.env.SERVER_SECRET_KEY, // 仅服务器端可用
};
