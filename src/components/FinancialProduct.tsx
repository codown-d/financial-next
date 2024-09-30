"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import TzTabs from "./TzTabs";
import Loan from "./UI/Loan";
import Guaranteed from "./UI/Guaranteed";
import Emergency from "./UI/Emergency";
import { useResize } from "@/hooks";

export type TabPosition = "left" | "right" | "top" | "bottom";
const FinancialProduct = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  let tabItems_1 = [
    { label: "银行贷款", key: "key_1", children: <Loan /> },
    { label: "小额贷款", key: "key_2", children: <Guaranteed /> },
    { label: "应急转贷", key: "key_3", children: <Emergency /> },
    { label: "股权融资", key: "key_4", children: <Emergency /> },
    // { label: "转贷类", key: "refinancing", children: <SmallLoan /> },
    // { label: "租赁类", key: "leasing", children: <SmallLoan /> },
    // { label: "保理类", key: "factoring", children: <SmallLoan /> },
    // { label: "服务类", key: "service", children: <SmallLoan /> },
  ];
  let tabItems_2 = [
    { label: "融资担保", key: "key_1", children: <Loan /> },
    { label: "电子保函", key: "key_2", children: <Guaranteed /> },
    { label: "综合保险", key: "key_3", children: <Emergency /> },
    // { label: "转贷类", key: "refinancing", children: <SmallLoan /> },
    // { label: "租赁类", key: "leasing", children: <SmallLoan /> },
    // { label: "保理类", key: "factoring", children: <SmallLoan /> },
    // { label: "服务类", key: "service", children: <SmallLoan /> },
  ];
  let { isMobile } = useResize();
  let items = [
    {
      label: "融资服务",
      key: "key_1",
      children: (
        <TzTabs
          items={tabItems_1}
          tabBarStyle={{ paddingTop: isMobile ? 0 : 60 }}
          destroyInactiveTabPane
          tabPosition={isMobile ? "top" : "left"}
          className="!text-xl"
          size={"large"}
        />
      ),
    },
    {
      label: "增信服务", key: "key_2", children: <TzTabs
        items={tabItems_2}
        tabBarStyle={{ paddingTop: isMobile ? 0 : 60 }}
        destroyInactiveTabPane
        tabPosition={isMobile ? "top" : "left"}
        className="!text-xl"
        size={"large"}
      />
    },
  ];
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="financialProduct"
    >
      <div className="max-w-screen-lg  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed mb-10"
            >
              业务专区
            </motion.h3>
            {/* <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              让我们选择最适合您的套餐，并愉快地探索它。
            </motion.p> */}
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <TzTabs
              items={items}
              destroyInactiveTabPane
              className="!text-xl !pt-10"
              size={"large"}
            />
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default FinancialProduct;
