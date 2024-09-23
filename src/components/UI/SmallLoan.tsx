import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import { useMemo } from "react";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { Tag } from "antd";
import { TzEffectButton } from "../TzEffectButton";
import CountUp from "react-countup";
import TzCard from "../TzCard";
import TzSplitter, { TzPanel } from "../TzSplitter";

export default function SmallLoan() {
  let financial = [
    {
      title: "建设银行-抵押快贷",
      type: "不限",
      rateDown: "3.10",
      rateUp: "3.90",
      term: 36,
      amount: 1000,
    },
    {
      title: "建设银行-抵押快贷",
      type: "不限",
      rateDown: "3.10",
      rateUp: "3.90",
      term: 36,
      amount: 1000,
    },
    {
      title: "建设银行-抵押快贷",
      type: "不限",
      rateDown: "3.10",
      rateUp: "3.90",
      term: 36,
      amount: 1000,
    },
    {
      title: "建设银行-抵押快贷",
      type: "不限",
      rateDown: "3.10",
      rateUp: "3.90",
      term: 36,
      amount: 1000,
    },
  ];

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-4 gap-4 lg:gap-12 py-8 lg:py-8 px-6 sm:px-0 lg:px-6">
      {financial.map((item, index) => {
        let { title, type, rateDown, rateUp, amount, term } = item;
        return (
          <ScrollAnimationWrapper key={index}>
            <motion.div
              variants={scrollAnimation}
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <TzCard className="text-left">
                <div className="p-4 lg:p-0 mt-0 lg:mt-2 flex items-center">
                  <img
                    src="https://www3.ccb.com/chn/imageDir/2022/09/2022091417041391737.png"
                    className="h-[40px] mr-2"
                  />
                  {/* <span>建设银行</span> */}
                </div>
                <p className="text-lg text-black-600 font-bold capitalize my-2 sm:mt-4 sm:mb-2">
                  {title}
                </p>
                <div className="flex">
                  <Tag className="!text-l">{type}</Tag>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-primary-100 text-3xl mr-2">
                    {rateDown}
                  </span>
                  ——
                  <span className="text-primary-100  text-3xl  ml-2 mr-2">
                    {rateUp}
                  </span>
                  %
                </div>
                <div className="mt-2">参考利率（年化）</div>
                <TzSplitter className="!mt-2">
                  <TzPanel>
                    1 - {term}个月
                    <br />
                    贷款期限
                  </TzPanel>
                  <TzPanel className="ml-4">
                    1 - {amount}万
                    <br />
                    贷款额度
                  </TzPanel>
                </TzSplitter>
                <div className="mt-2">
                  <CountUp
                    end={Math.floor(Math.random() * 100000 + 10000)}
                    separator=","
                  />
                  笔需求对接成功
                </div>
                <div className="flex flex-col w-full justify-center mt-4">
                  <TzEffectButton type="primary" effectType={"inset"}>
                    查看详情
                  </TzEffectButton>
                </div>
              </TzCard>
            </motion.div>
          </ScrollAnimationWrapper>
        );
      })}
    </div>
  );
}
