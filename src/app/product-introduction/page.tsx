import { Metadata } from "next";
import { pageSEO } from "@/config/seo.config";
import ProductIntroductionClient from "./ProductIntroductionClient";

// 为产品介绍页面设置特定的元数据
export const metadata: Metadata = {
  title: pageSEO.productIntroduction.title,
  description: pageSEO.productIntroduction.description,
  keywords: pageSEO.productIntroduction.keywords,
};

export default function ProductIntroduction() {
  return <ProductIntroductionClient />;
}
