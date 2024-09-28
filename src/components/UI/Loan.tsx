import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import { useMemo } from "react";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { Tag } from "antd";
import { TzEffectButton } from "../TzEffectButton";
import CountUp from "react-countup";
import TzCard from "../TzCard";
import TzSplitter, { TzPanel } from "../TzSplitter";
import { Bank } from "@/constant";

export default function Loan() {
  let financial = [
    {
      imgUrl: '/images/gxxd.jpg',
      title: `国信小贷-小微贷`,
      type: "不限",
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.35",
      term: 36,
      amount: 50,
      guaranteeMethod: ["信用", "抵押", "质押", "保证"],
    },
    {
      imgUrl: '/images/gxxd.jpg',
      title: `国信小贷-及时贷`,
      type: "不限",
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.35",
      term: 36,
      amount: 500,
      guaranteeMethod: ["抵押", "质押", "保证"],
    },
    {
      imgUrl: '/images/gxxd.jpg',
      title: `国信小贷-搭桥贷`,
      type: "不限",
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "LPR2-4",
      term: 36,
      amount: 500,
      guaranteeMethod: ["信用", "抵押", "质押", "保证"],
    },
  ];

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-12 lg:gap-12 ">
      {financial.map((item, index) => {
        let {
          title,
          type,
          rateDown,
          rateUp,
          imgUrl,
          amount,
          term,
          rate,
          guaranteeMethod = [],
        } = item;
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
                <div className=" lg:p-0 mt-0 lg:mt-2 flex items-center">
                  <img src={imgUrl} className="h-[40px] mr-2" />
                  <p className="text-lg text-black-600 font-bold capitalize">
                    {title}
                  </p>
                </div>
                {/* <div className="flex">
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
                </div>  */}
                <div className="mt-2">
                  {rate ? (
                    <>
                      最低利率：
                      <span className="text-primary-100 text-3xl mr-2">
                        {rate}
                      </span>
                      {Number(rate) > 0 ? "%" : "倍"}
                    </>
                  ) : (
                    " 参考利率（年化）"
                  )}
                </div>
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
                  担保方式：{guaranteeMethod.join("/")}
                </div>
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
