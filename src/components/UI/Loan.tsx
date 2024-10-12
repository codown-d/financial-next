import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import { useMemo } from "react";
import getScrollAnimation from "@/utils/getScrollAnimation";
import FinanceCard from "./FinanceCard";

export interface FinanceItemProps {
  imgUrl: string;
  title: string;
  rateDown: string;
  rateUp: string;
  rate: string;
  term: number;
  amount: number;
  guaranteeMethod: string[];
}
export default function Loan(props) {
  let { items } = props;
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-12 lg:gap-12 ">
      {items.map((item: FinanceItemProps, index: number) => {
        return (
          <ScrollAnimationWrapper key={index} className="w-[536px]">
            <motion.div
              variants={scrollAnimation}
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
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
