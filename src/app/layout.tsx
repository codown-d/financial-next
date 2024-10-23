import React from "react";
import { Metadata } from "next";
import MainLayout from "@/components/Layout/MainLayout";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";
import zhCN from 'antd/locale/zh_CN';
import "@/styles/globals.scss";
// 设置页面的元数据
export const metadata: Metadata = {
  title: "广元金融服务集团",
  description: "广元金融服务集团",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="/fontawesome/css/all.css"
          type="text/css"
        />
        <link rel="stylesheet" href="/fonts/index.css" type="text/css" />
      </head>
      <body>
        <AntdRegistry>
          <ConfigProvider theme={theme} button={{ autoInsertSpace: false }} locale={zhCN}>
            <MainLayout>{children}</MainLayout>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
