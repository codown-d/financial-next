"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import TzTabs from "./TzTabs";
import ServiceAgency from "./UI/ServiceAgency";
import InvestmentServices from "./UI/InvestmentServices";
import PolicyArea from "./UI/PolicyArea";
import Loan from "./UI/Loan";
import Guaranteed from "./UI/Guaranteed";

const FinancialProduct = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  let tabItems = [
    { label: "贷款类", key: "loan", children: <Loan /> },
    { label: "担保类", key: "guarantee", children: <Guaranteed /> },
    // { label: "保险类", key: "insurance", children: <SmallLoan /> },
    // { label: "转贷类", key: "refinancing", children: <SmallLoan /> },
    // { label: "租赁类", key: "leasing", children: <SmallLoan /> },
    // { label: "保理类", key: "factoring", children: <SmallLoan /> },
    // { label: "服务类", key: "service", children: <SmallLoan /> },
  ];

  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14">
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
          <TzTabs
            items={tabItems}
            destroyInactiveTabPane
            className="!text-xl"
            size={"large"}
          />
        </div>
      </div>
    </div>
  );
};

export default FinancialProduct;
