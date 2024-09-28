"use client";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import { useMemo } from "react";
import getScrollAnimation from "@/utils/getScrollAnimation";
import TzCard from "../TzCard";
import Meta from "antd/es/card/Meta";
import TzCardColorUI from "./TzCardColorUI";
import { getColorScale } from "@/lib";

export default function ServiceAgency() {
  let list = [
    {
      imgUrl: "建设银行-小微贷",
      title: "业务办理管理系统链接",
      description: 1000,
    },
    {
      imgUrl: "建设银行-及时贷",
      title: "不良资产管理系统链接",
      description: 1000,
    },
    {
      imgUrl: "建设银行-搭桥贷",
      title: "风险预警系统链接",
      description: 1000,
    },
  ];

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
        >
          服务机构
        </motion.h3>
        {/* <motion.p
            className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
            variants={scrollAnimation}
          >
            服务机构介绍
          </motion.p> */}
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-12 py-8 lg:py-8 px-6 sm:px-0 lg:px-6"
          variants={scrollAnimation}
        >
          {list.map((item, index) => {
            let { imgUrl, title, description } = item;
            let bg = getColorScale(index+3);
            return (
              <TzCardColorUI
                style={{ backgroundColor: bg }}
                title={title}
                key={index}
              />
            );
          })}
        </motion.div>
      </ScrollAnimationWrapper>
    </>
  );
  return;
}
