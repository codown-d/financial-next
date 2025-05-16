import React from "react";
import { Metadata } from "next";
import MainLayout from "@/components/Layout/MainLayout";
import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";
import zhCN from "antd/locale/zh_CN";
import "@/styles/globals.scss";
import { GlobalProvider } from "@/hooks/GlobalContext";
import JsonLd from "@/components/SEO/JsonLd";
// 设置页面的元数据
export const metadata: Metadata = {
  title: "广元市综合金融服务平台 | 专业金融服务",
  description: "广元市综合金融服务平台提供小额贷款、担保、转贷、保函、基金等全方位金融服务，助力企业发展。",
  keywords: "广元金融,金融服务,小额贷款,担保,转贷,保函,基金,广元市,金融平台",
  authors: [{ name: "广元金融服务集团" }],
  creator: "广元金融服务集团",
  publisher: "广元金融服务集团",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.gyzhjr.com'), // 实际网站URL
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gyzhjr.com/" />
        <meta property="og:title" content="广元市综合金融服务平台 | 专业金融服务" />
        <meta property="og:description" content="广元市综合金融服务平台提供小额贷款、担保、转贷、保函、基金等全方位金融服务，助力企业发展。" />
        <meta property="og:image" content="https://www.gyzhjr.com/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.gyzhjr.com/" />
        <meta property="twitter:title" content="广元市综合金融服务平台 | 专业金融服务" />
        <meta property="twitter:description" content="广元市综合金融服务平台提供小额贷款、担保、转贷、保函、基金等全方位金融服务，助力企业发展。" />
        <meta property="twitter:image" content="https://www.gyzhjr.com/images/twitter-image.jpg" />
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

        {/* 添加结构化数据 */}
        <JsonLd
          type="Organization"
          data={{
            name: "广元金融服务集团",
            url: "https://www.gyzhjr.com",
            logo: "https://www.gyzhjr.com/logo.png"
          }}
        />
        <JsonLd
          type="WebSite"
          data={{
            name: "广元市综合金融服务平台",
            url: "https://www.gyzhjr.com"
          }}
        />
      </body>
    </html>
  );
};
export default RootLayout;
