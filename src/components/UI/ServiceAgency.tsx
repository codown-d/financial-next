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
        <motion.p
          className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
          variants={scrollAnimation}
        >
          服务机构介绍
        </motion.p>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-12 py-8 lg:py-8 px-6 sm:px-0 lg:px-6"
          variants={scrollAnimation}
        >
          {list.map((item, index) => {
            let { imgUrl, title, description } = item;
            return (
              <TzCard
                key={index}
                hoverable
                cover={<img alt="example" src={imgUrl} />}
                className="!p-10"
              >
                <Meta title={<span className="text-lg">{title}</span>} />
              </TzCard>
            );
          })}
        </motion.div>
      </ScrollAnimationWrapper>
    </>
  );
  return;
}
