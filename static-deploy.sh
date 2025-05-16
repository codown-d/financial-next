#!/bin/bash

# 静态部署脚本

# 清理旧的构建文件
echo "清理旧的构建文件..."
rm -rf out

# 安装依赖
echo "安装依赖..."
pnpm install

# 构建静态网站
echo "构建静态网站..."
pnpm run export

# 创建必要的SEO文件
echo "确保SEO文件存在..."
if [ ! -f "out/robots.txt" ]; then
  cp public/robots.txt out/
fi

if [ ! -f "out/sitemap.xml" ]; then
  cp public/sitemap.xml out/
fi

# 创建.nojekyll文件（如果部署到GitHub Pages）
touch out/.nojekyll

# 压缩输出目录
echo "压缩输出目录..."
cd out
zip -r ../dist.zip .
cd ..

echo "静态网站已构建完成！"
echo "输出目录: ./out"
echo "压缩文件: ./dist.zip"
echo ""
echo "您可以使用以下命令本地预览网站:"
echo "pnpm run static-serve"
echo ""
echo "部署提示:"
echo "1. 将out目录中的所有文件上传到您的静态托管服务"
echo "2. 或者上传dist.zip文件并在服务器上解压"
echo ""
