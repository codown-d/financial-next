const os = require('os');

// 获取本机的内网 IP 地址
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (let interfaceName in interfaces) {
    for (let net of interfaces[interfaceName]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address; // 返回第一个找到的内网 IP
      }
    }
  }
}
const localIP = getLocalIP();
module.exports = {
    apps: [
      {
        name: 'next-app',
        script: 'npm',
        args: 'start',
        instances: 'max',  // 可以根据 CPU 核心数设置实例数量
        autorestart: true, // 自动重启
        watch: true,       // 文件变化时自动重启
        env: {
          NODE_ENV: 'production',
          PORT: 3000,
          HOST: localIP, // 使用动态获取的 IP 地址
          // 其他环境变量
        },
      },
    ],
  };
  