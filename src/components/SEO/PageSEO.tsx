"use client";

import React from 'react';
import Head from 'next/head';
import JsonLd from './JsonLd';

interface PageSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  jsonLdType?: 'Organization' | 'WebSite' | 'BreadcrumbList' | 'FAQPage' | 'Service';
  jsonLdData?: any;
  children?: React.ReactNode;
}

const PageSEO: React.FC<PageSEOProps> = ({
  title = "广元市综合金融服务平台 | 专业金融服务",
  description = "广元市综合金融服务平台提供小额贷款、担保、转贷、保函、基金等全方位金融服务，助力企业发展。",
  keywords = "广元金融,金融服务,小额贷款,担保,转贷,保函,基金,广元市,金融平台",
  ogImage = "https://www.gyzhjr.com/images/og-image.jpg",
  ogUrl = "https://www.gyzhjr.com",
  jsonLdType,
  jsonLdData,
  children
}) => {
  return (
    <>
      <Head>
        {/* 基本元数据 */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={ogUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={ogImage} />
      </Head>

      {/* 结构化数据 */}
      {jsonLdType && jsonLdData && (
        <JsonLd type={jsonLdType} data={jsonLdData} />
      )}

      {children}
    </>
  );
};

export default PageSEO;
