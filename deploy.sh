#!/bin/bash

# 拉取最新代码（如果使用 Git）
git pull origin main

pm2 delete all

# 构建项目
npm run build

# 启动 PM2 应用
pm2 start npm --name "next-app" -- start

# 查看应用状态
pm2 list

