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
import FinanceCard from "./FinanceCard";
import Meta from "antd/es/card/Meta";

export interface FinanceItemProps{
  imgUrl: string;
  title: string;
  rateDown: string;
  rateUp: string;
  rate: string;
  term: number;
  amount: number;
  guaranteeMethod: string[];
}
export default function Loan() {
  let financial = [
    {
      imgUrl: '/images/gxxd.jpg',
      title: `小微贷`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.35",
      term: 36,
      amount: 50,
      guaranteeMethod: ["信用", "抵押", "质押", "保证"],
    },
    {
      imgUrl: '/images/gxxd.jpg',
      title: `小微贷`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.35",
      term: 36,
      amount: 500,
      guaranteeMethod: ["抵押", "质押", "保证"],
    },
    {
      imgUrl: '/images/gxxd.jpg',
      title: `小微贷`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.25",
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
              <FinanceCard {...item}/>
            </motion.div>
          </ScrollAnimationWrapper>
        );
      })}
    </div>
  );
}
