import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import { useMemo } from "react";
import getScrollAnimation from "@/utils/getScrollAnimation";
import FinanceCard from "./FinanceCard";
import { FinanceDataTypeEmu } from "@/constant";

export interface FinanceItemProps {
  dataType:FinanceDataTypeEmu;
  imgUrl: string;
  logo: string;
  title: string;
  rateDown: string;
  rateUp: string;
  rate: string;
  term: number;
  amount: number;
  guaranteeMethod: string[];
}
export default function Loan(props:{items:FinanceItemProps[]}) {
  let { items } = props;
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="flex justify-between flex-wrap ">
      {items.map((item, index: number) => {
        return (
          <ScrollAnimationWrapper key={index} >
            <motion.div
            className="w-[360px] mb-10"
              variants={scrollAnimation}
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              <FinanceCard {...item} />
            </motion.div>
          </ScrollAnimationWrapper>
        );
      })}

    </div>
  );
}
