"use client";
import { useMemo } from "react";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import TzCard from "../TzCard";
import Meta from "antd/es/card/Meta";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { motion } from "framer-motion";
import TzCardColorUI from "./TzCardColorUI";
import { getColorScale } from "@/lib";

export default function InvestmentServices() {
  let list = [
    {
      imgUrl: "建设银行-抵押快贷",
      title: "广财基金介绍",
      description: 1000,
    },
    {
      imgUrl: "建设银行-抵押快贷",
      title: "股权投资介绍",
      description: 1000,
    },
    {
      imgUrl: "建设银行-抵押快贷",
      title: "贸易服务介绍",
      description: 1000,
    },
  ];
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
        >
          企业公共服务
        </motion.h3>
        {/* <motion.p
          variants={scrollAnimation}
          className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
        >
          投资服务介绍
        </motion.p> */}
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper className="w-full">
        <motion.div
          variants={scrollAnimation}
          className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-12 py-8 lg:py-8 px-6 sm:px-0 lg:px-6"
        >
          {list.map((item, index) => {
            let { imgUrl, title, description } = item;
            let bg = getColorScale(index);
            return (
              <TzCardColorUI
                title={title}
                key={index}
                style={{ backgroundColor: bg }}
              />
            );
          })}
        </motion.div>
      </ScrollAnimationWrapper>
    </>
  );
}
