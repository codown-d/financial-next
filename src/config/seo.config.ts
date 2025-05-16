// SEO配置文件

export const siteUrl = 'https://www.gyzhjr.com'; // 实际网站URL

export const defaultSEO = {
  title: '广元市综合金融服务平台 | 专业金融服务',
  description: '广元市综合金融服务平台提供小额贷款、担保、转贷、保函、基金等全方位金融服务，助力企业发展。',
  keywords: '广元金融,金融服务,小额贷款,担保,转贷,保函,基金,广元市,金融平台',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: siteUrl,
    site_name: '广元市综合金融服务平台',
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: '广元市综合金融服务平台',
      },
    ],
  },
  twitter: {
    handle: '@example',
    site: '@example',
    cardType: 'summary_large_image',
  },
};

// 页面特定的SEO配置
export const pageSEO = {
  home: {
    title: '广元市综合金融服务平台 | 首页',
    description: '广元市综合金融服务平台是您的一站式金融服务解决方案，提供小额贷款、担保、转贷、保函、基金等全方位金融服务。',
    keywords: '广元金融,金融服务,小额贷款,担保,转贷,保函,基金,广元市,金融平台,首页',
  },
  policyServices: {
    title: '广元市综合金融服务平台 | 政策服务',
    description: '了解广元市最新金融政策和服务，获取政策支持和金融服务指导。',
    keywords: '广元金融政策,金融服务,政策支持,金融指导,广元市,金融平台',
  },
  productIntroduction: {
    title: '广元市综合金融服务平台 | 产品介绍',
    description: '探索广元市综合金融服务平台提供的各类金融产品，包括小额贷款、担保、转贷、保函、基金等。',
    keywords: '广元金融产品,小额贷款,担保,转贷,保函,基金,广元市,金融平台,产品介绍',
  },
  dataElements: {
    title: '广元市综合金融服务平台 | 数据要素',
    description: '了解广元市综合金融服务平台的数据要素和金融数据分析。',
    keywords: '广元金融数据,数据要素,金融分析,广元市,金融平台,数据',
  },
  equityInvestment: {
    title: '广元市综合金融服务平台 | 股权投资',
    description: '了解广元市综合金融服务平台提供的股权投资服务和机会。',
    keywords: '广元股权投资,金融服务,投资机会,广元市,金融平台,股权',
  },
};
