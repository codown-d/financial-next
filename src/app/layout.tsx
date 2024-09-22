import React from "react";
import { Metadata } from "next";
import MainLayout from "@/components/Layout/MainLayout";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";
import "@/styles/tailwind.css";
import "@/styles/slick.css";
// import '@/styles/fonts.css';
import '@public/fonts/css2.css';

// 设置页面的元数据
export const metadata: Metadata = {
  title: "My Next.js App",
  description: "A description of my Next.js app",
};

// 根布局组件
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <ConfigProvider theme={theme} button={{autoInsertSpace:false}}>
            <MainLayout>{children}</MainLayout>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
