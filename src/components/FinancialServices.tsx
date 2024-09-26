"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Tabs } from "antd";

const features = [{
  title: '财务咨询',
  subTitle: '为企业和个人提供量身定制的财务规划和投资策略。'
}, {
  title: '资产管理',
  subTitle: '管理客户的投资组合，优化收益，降低风险。'
}, {
  title: '税务规划',
  subTitle: '帮助客户合理规划税务，以实现税收优化。'
}, {
  title: '融资服务',
  subTitle: '提供贷款、信贷和其他融资解决方案，助力企业发展。'
}, {
  title: '市场分析',
  subTitle: '深入研究市场动态，为客户提供精准的市场洞察和建议。'
}, {
  title: '风险管理',
  subTitle: '评估和管理潜在风险，制定应对策略，确保财务安全。'
}
];

const FinancialServices = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div
      className="max-w-screen-lg mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Tabs
              tabPosition={'left'}
              items={new Array(3).fill(null).map((_, i) => {
                const id = String(i + 1);
                return {
                  label: `Tab ${id}`,
                  key: id,
                  children: `Content of Tab ${id}`,
                };
              })}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        
      </div>
    </div>
  );
};

export default FinancialServices;
