import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import { useMemo } from "react";
import getScrollAnimation from "@/utils/getScrollAnimation";
import FinanceCard from "./FinanceCard";
import { FinanceItemProps } from "@/fetch/definition";


export default function Loan(props:{items:FinanceItemProps[]}) {
  let { items } = props;
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="grid grid-flow-row grid-cols-1 screen_1080:grid-cols-2 screen_1440:grid-cols-3">
      {items.map((item, index: number) => {
        return (
          <ScrollAnimationWrapper key={index} className='flex justify-center'>
            <motion.div
            className="w-[360px] mb-10 flex"
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
