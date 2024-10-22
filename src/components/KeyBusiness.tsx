"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Tabs } from "antd";
import TzForm, { TzFormItem } from "./TzForm";
import { TzTitle } from "./TzTypography";
import TzInput from "./TzInput";
import TzSelect from "./TzSelect";
import TzCard from "./TzCard";

const items = [
  {
    title: "我要贷款",
    subTitle: "为企业和个人提供量身定制的财务规划和投资策略。",
  },
  {
    title: "我要担保",
    subTitle: "管理客户的投资组合，优化收益，降低风险。",
  },
  {
    title: "我要转贷",
    subTitle: "帮助客户合理规划税务，以实现税收优化。",
  },
  {
    title: "我要保函",
    subTitle: "提供贷款、信贷和其他融资解决方案，助力企业发展。",
  },
  {
    title: "我要保险",
    subTitle: "深入研究市场动态，为客户提供精准的市场洞察和建议。",
  },
  {
    title: "我要引资",
    subTitle: "评估和管理潜在风险，制定应对策略，确保财务安全。",
  },
  {
    title: "我要政策",
    subTitle: "评估和管理潜在风险，制定应对策略，确保财务安全。",
  },
  {
    title: "我要服务",
    subTitle: "评估和管理潜在风险，制定应对策略，确保财务安全。",
  },
];

const KeyBusiness = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div
      className="max-w-screen-lg mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row   ">
        <ScrollAnimationWrapper>
          <div className="flex ">
            <motion.div
              className="h-full w-full p-4"
              variants={scrollAnimation}
            >
              <TzCard>
                <TzForm wrapperCol={{ span: 12 }} layout={"vertical"}>
                  <TzTitle level={3}>一键融资</TzTitle>
                  <TzFormItem label="金额">
                    <TzInput />
                  </TzFormItem>
                  <TzFormItem label="期限">
                    <TzSelect options={[]} />
                  </TzFormItem>
                  <TzFormItem label="用途">
                    <TzSelect options={[]} />
                  </TzFormItem>
                </TzForm>
              </TzCard>
            </motion.div>
            <motion.div
              className="h-full w-full p-4"
              variants={scrollAnimation}
            >
              <div className="grid grid-cols-4 gap-7">
                {items.map((item) => (
                  <TzCard key={item.title} hoverable>
                    {item.title}
                  </TzCard>
                ))}
              </div>
            </motion.div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default KeyBusiness;
