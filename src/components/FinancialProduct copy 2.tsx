"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Tabs, Tag } from "antd";
import SmallLoan from "./UI/SmallLoan";

const FinancialProduct = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  let tabItems = [
    {
      label: `小额贷款`,
      key: 'smallLoan',
      children: <SmallLoan />,
    },
    
    {
      label: `融资担保`,
      key: 'financeGuarantee',
      children: <SmallLoan />,
    },
    
    {
      label: `应急转贷`,
      key: 'emergencyRefinance',
      children: <SmallLoan />,
    },
  ];
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              金融产品
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              让我们选择最适合您的套餐，并愉快地探索它。
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-4 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <Tabs tabPosition={"left"} items={tabItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialProduct;
