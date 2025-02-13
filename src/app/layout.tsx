import React from "react";
import { Metadata } from "next";
import MainLayout from "@/components/Layout/MainLayout";
import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";
import zhCN from "antd/locale/zh_CN";
import "@/styles/globals.scss";
import { GlobalProvider } from "@/hooks/GlobalContext";
// 设置页面的元数据
export const metadata: Metadata = {
  title: "广元市综合金融服务平台",
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
        <ConfigProvider
          theme={theme}
          button={{ autoInsertSpace: false }}
          locale={zhCN}
        >
          <GlobalProvider>
            <MainLayout>{children}</MainLayout>
          </GlobalProvider>
        </ConfigProvider>
      </body>
    </html>
  );
};
export default RootLayout;
