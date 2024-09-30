import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import { useMemo } from "react";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { Tag } from "antd";
import { TzEffectButton } from "../TzEffectButton";
import CountUp from "react-countup";
import TzCard from "../TzCard";
import TzSplitter, { TzPanel } from "../TzSplitter";
import Image from "next/image";
export default function Emergency() {
  let financial = [
    {
      title: "工业应急转贷-双创贷",
      type: "不限",
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.35",
      guaranteedRate: "0.8",
      term: 36,
      amount: 30,
      guaranteeMethod: ["信用"],
      policies: ["贴息"],
    },
    // {
    //   title: "工业应急转贷-融创科贷",
    //   type: "不限",
    //   rateDown: "3.10",
    //   rateUp: "3.90",
    //   rate: "3.35",
    //   guaranteedRate: "0.8",
    //   term: 36,
    //   amount: 60,
    //   guaranteeMethod: ["信用"],
    //   policies: ["贴息"],
    // },
    // {
    //   title: "工业应急转贷-产业贷",
    //   type: "不限",
    //   rateDown: "3.10",
    //   rateUp: "3.90",
    //   rate: "3.35",
    //   guaranteedRate: "0.6",
    //   term: 36,
    //   amount: 200,
    //   guaranteeMethod: ["信用", "抵押", "质押", "保证"],
    // },
    // {
    //   title: "工业应急转贷-蜀担快贷",
    //   type: "不限",
    //   rateDown: "3.10",
    //   rateUp: "3.90",
    //   rate: "3.35",
    //   guaranteedRate: "0.8",
    //   term: 36,
    //   amount: 500,
    //   guaranteeMethod: ["信用", "抵押", "质押", "保证"],
    // },
  ];

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-x-12 lg:gap-12">
      {financial.map((item, index) => {
        let {
          title,
          type,
          rateDown,
          rateUp,
          amount,
          term,
          rate,
          guaranteeMethod = [],
          guaranteedRate,
          policies = [],
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
              <TzCard className="text-left h-full max-w-md">
                <div className="h-[330px] flex flex-col justify-between">
                  <div>
                    <div className=" lg:p-0 mt-0 lg:mt-2 flex items-center">
                      <Image
                        src={"/images/logo-small.jpg"}
                        className="h-[40px] mr-2"
                        alt={"logo"}
                      />
                      <p className="text-lg text-black-600 font-bold capitalize my-2 sm:mt-4 sm:mb-2">
                        {title}
                      </p>
                    </div>
                    {/* <div className="flex">
                  <Tag className="!text-l">{type}</Tag>
                </div> */}
                    {/* <div className="flex items-center mt-2">
                  <span className="text-primary-100 text-3xl mr-2">
                    {rateDown}
                  </span>
                  ——
                  <span className="text-primary-100  text-3xl  ml-2 mr-2">
                    {rateUp}
                  </span>
                  %
                </div> */}
                    <div className="mt-2">
                      {rate ? (
                        <>
                          最低利率：
                          <span className="text-primary-100 text-3xl mr-2">
                            {rate}
                          </span>
                          %
                        </>
                      ) : (
                        " 参考利率（年化）"
                      )}
                    </div>
                    {!guaranteedRate || (
                      <div className="mt-2">
                        最低担保费率：{guaranteedRate}%
                      </div>
                    )}
                    <div>
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
                    </div>
                    <div className="mt-2">
                      担保方式：{guaranteeMethod.join("/")}
                    </div>
                    {policies.length == 0 || (
                      <div className="text-xxl text-primary-100 mt-2">
                        优惠政策：{policies.join("/")}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="mt-2">
                      <CountUp
                        end={Math.floor(Math.random() * 100000 + 10000)}
                        separator=","
                      />
                      笔需求对接成功
                    </div>
                    <TzEffectButton
                      type="primary"
                      effectType={"inset"}
                      className=" mt-4"
                    >
                      查看详情
                    </TzEffectButton>
                  </div>
                </div>
              </TzCard>
            </motion.div>
          </ScrollAnimationWrapper>
        );
      })}
    </div>
  );
}
