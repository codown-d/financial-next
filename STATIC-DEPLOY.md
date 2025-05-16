# 广元市综合金融服务平台 - 静态部署指南

本文档提供了如何构建和部署广元市综合金融服务平台静态网站的详细说明。

## 构建静态网站

### 前提条件

- Node.js 16.x 或更高版本
- pnpm 包管理器

### 构建步骤

1. 安装依赖：

```bash
pnpm install
```

2. 构建静态网站：

```bash
pnpm run export
```

或者使用提供的脚本：

```bash
chmod +x static-deploy.sh
./static-deploy.sh
```

构建完成后，静态文件将生成在 `out` 目录中。

## 部署选项

### 1. 通用静态托管服务

将 `out` 目录中的所有文件上传到您的静态托管服务，如：

- Netlify
- Vercel
- GitHub Pages
- 阿里云 OSS
- 腾讯云 COS
- 七牛云存储

### 2. Apache 服务器

1. 将 `out` 目录中的所有文件上传到您的网站根目录
2. 确保 `.htaccess` 文件已正确上传
3. 确保 Apache 已启用 `mod_rewrite` 模块：

```bash
sudo a2enmod rewrite
sudo systemctl restart apache2
```

### 3. Nginx 服务器

1. 将 `out` 目录中的所有文件上传到您的网站根目录
2. 使用提供的 `nginx.conf.example` 作为配置参考
3. 修改 Nginx 配置：

```bash
sudo nano /etc/nginx/sites-available/gyzhjr.com
```

4. 创建符号链接并重启 Nginx：

```bash
sudo ln -s /etc/nginx/sites-available/gyzhjr.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## 本地预览

构建完成后，您可以使用以下命令在本地预览静态网站：

```bash
pnpm run static-serve
```

这将在 http://localhost:3000 启动一个本地服务器。

## 注意事项

1. **API 请求**：静态网站不包含服务器端代码，所有 API 请求应指向外部 API 服务。

2. **环境变量**：确保所有必要的环境变量都已在构建时设置。

3. **图片优化**：由于静态导出禁用了 Next.js 的图片优化，请确保您的图片已经过优化。

4. **路由**：静态导出会为每个页面生成一个 HTML 文件。确保您的服务器配置正确处理路由。

5. **动态路由**：如果您使用动态路由，确保已经为所有可能的路径生成了静态页面。

## 故障排除

如果您在部署过程中遇到问题，请检查：

1. 确保所有文件都已正确上传
2. 检查服务器错误日志
3. 验证服务器配置是否正确
4. 确保域名 DNS 设置正确指向您的服务器

## 联系支持

如需进一步帮助，请联系技术支持团队。
