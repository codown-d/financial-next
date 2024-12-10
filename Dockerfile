# 使用 node:20 作为基础镜像
FROM node:20

# 设置工作目录
WORKDIR /app

# 安装 Git（如果镜像中没有）
RUN apt-get update && apt-get install -y git

# 设置 npm 镜像源为淘宝镜像（加速安装）
RUN npm config set registry https://registry.npmmirror.com

# 安装 pnpm（使用 pnpm 代替 npm）
RUN npm install -g pnpm

# 复制 package.json 和 pnpm-lock.yaml（如果项目使用 pnpm）
COPY package.json pnpm-lock.yaml ./

# 使用 pnpm 安装依赖
RUN pnpm install

# 复制项目文件到容器中（可以选择性复制）
COPY . .

# 使用 pnpm 构建项目（使用 pnpm 代替 npm）
RUN pnpm build

# 暴露应用端口
EXPOSE 3000

# 启动应用（使用 pnpm 启动应用）
CMD ["pnpm", "start"]
