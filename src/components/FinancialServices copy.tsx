"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [{
  title:'财务咨询',
  subTitle:'为企业和个人提供量身定制的财务规划和投资策略。'
},{
  title:'资产管理',
  subTitle:'管理客户的投资组合，优化收益，降低风险。'
},{
  title:'税务规划',
  subTitle:'帮助客户合理规划税务，以实现税收优化。'
},{
  title:'融资服务',
  subTitle:'提供贷款、信贷和其他融资解决方案，助力企业发展。'
},{
  title:'市场分析',
  subTitle:'深入研究市场动态，为客户提供精准的市场洞察和建议。'
},{
  title:'风险管理',
  subTitle:'评估和管理潜在风险，制定应对策略，确保财务安全。'
}
];

const FinancialServices = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600 w-full mb-2 text-center">
              金融服务
            </h3>
            <p className="my-2 text-black-500 text-left w-full text-xl">
              我们提供专业的金融服务，包括：
            </p>
            <ul className="text-black-500 self-start list-inside ml-8 ">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list my-4"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={index}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                   <span className="text-black-600 font-medium">{feature.title}：</span>
                   <span>{feature.subTitle}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default FinancialServices;
