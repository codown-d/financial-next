#!/bin/bash

# 拉取最新代码（如果使用 Git）
git pull origin main
# 停止所有应用
pm2 stop all

# 删除所有应用
pm2 delete all

# 保存当前应用列表
pm2 save

pnpm i

# 构建项目
npm run build

# 启动 PM2 应用
pm2 start npm --name "next-app" -- start

# 查看应用状态
pm2 list

