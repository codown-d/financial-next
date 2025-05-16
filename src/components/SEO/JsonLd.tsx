"use client";

import React from 'react';

interface JsonLdProps {
  type: 'Organization' | 'WebSite' | 'BreadcrumbList' | 'FAQPage' | 'Service';
  data: any;
}

const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  let jsonLdData = {};

  switch (type) {
    case 'Organization':
      jsonLdData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: data.name || '广元金融服务集团',
        url: data.url || 'https://www.gyzhjr.com',
        logo: data.logo || 'https://www.gyzhjr.com/logo.png',
        contactPoint: data.contactPoint || {
          '@type': 'ContactPoint',
          telephone: '+86-XXX-XXXX-XXXX',
          contactType: 'customer service'
        },
        sameAs: data.sameAs || []
      };
      break;
    case 'WebSite':
      jsonLdData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: data.name || '广元市综合金融服务平台',
        url: data.url || 'https://www.gyzhjr.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.gyzhjr.com/search?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        }
      };
      break;
    case 'BreadcrumbList':
      jsonLdData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: data.itemListElement || []
      };
      break;
    case 'FAQPage':
      jsonLdData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.mainEntity || []
      };
      break;
    case 'Service':
      jsonLdData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: data.name || '',
        description: data.description || '',
        provider: {
          '@type': 'Organization',
          name: data.providerName || '广元金融服务集团',
          url: data.providerUrl || 'https://www.gyzhjr.com'
        }
      };
      break;
    default:
      jsonLdData = {};
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
};

export default JsonLd;
