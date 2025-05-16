import { Metadata } from "next";
import { pageSEO } from "@/config/seo.config";
import PolicyServicesWrapper from "./components/PolicyServicesWrapper";

// 为政策服务页面设置特定的元数据
export const metadata: Metadata = {
  title: pageSEO.policyServices.title,
  description: pageSEO.policyServices.description,
  keywords: pageSEO.policyServices.keywords,
};

export default function PolicyServicesPage() {
  return <PolicyServicesWrapper />;
}
