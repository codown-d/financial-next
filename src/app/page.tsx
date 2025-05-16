import { Metadata } from "next";
import HomeClient from "./HomeClient";

// 为首页设置特定的元数据
export const metadata: Metadata = {
  title: "广元市综合金融服务平台 | 首页",
  description: "广元市综合金融服务平台是您的一站式金融服务解决方案，提供小额贷款、担保、转贷、保函、基金等全方位金融服务。",
  keywords: "广元金融,金融服务,小额贷款,担保,转贷,保函,基金,广元市,金融平台,首页",
};

export default function Home() {
  return <HomeClient />;
}
