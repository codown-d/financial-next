import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import { useMemo } from "react";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { Tag } from "antd";
import { TzEffectButton } from "../TzEffectButton";
import CountUp from "react-countup";
import TzCard from "../TzCard";
import TzSplitter, { TzPanel } from "../TzSplitter";
import Meta from "antd/es/card/Meta";
export default function ServiceAgency() {
  let list = [
    {
      imgUrl: "建设银行-抵押快贷",
      title: "业务办理管理系统链接",
      description: 1000,
    },
    {
      imgUrl: "建设银行-抵押快贷",
      title: "不良资产管理系统链接",
      description: 1000,
    },
    {
      imgUrl: "建设银行-抵押快贷",
      title: "风险预警系统链接",
      description: 1000,
    },
  ];
  return list.map((item, index) => {
    let { imgUrl, title, description } = item;
    return (
      <>
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
          >
            投资服务
          </motion.h3>
          <motion.p
            variants={scrollAnimation}
            className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
          >
            投资服务介绍
          </motion.p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="w-full flex flex-col py-12">
          <motion.div variants={scrollAnimation}>
            <TzCard
              key={index}
              hoverable
              cover={<img alt="example" src={imgUrl} />}
              className="!p-10"
            >
              <Meta title={<span className="text-lg">{title}</span>} />
            </TzCard>
          </motion.div>
        </ScrollAnimationWrapper>
      </>
    );
  });
}
