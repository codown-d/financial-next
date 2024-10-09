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
import Title from "./UI/Title";
import Image from "next/image";

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
      label: (
        <div className="flex flex-col items-center px-[76px]">
          <Image src={"/images/rzfw.png"} alt={""} width={88} height={88} />
          <span>融资服务</span>
        </div>
      ),
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
      label: (
        <div className="flex flex-col items-center px-[76px]">
          <Image src={"/images/zxfw.png"} alt={""} width={88} height={88} />
          <span>增信服务</span>
        </div>
      ),
      key: "key_2",
      children: (
        <TzTabs
          items={tabItems_2}
          tabBarStyle={{ paddingTop: isMobile ? 0 : 60 }}
          destroyInactiveTabPane
          tabPosition={isMobile ? "top" : "left"}
          className="!text-xl"
          size={"large"}
        />
      ),
    },
  ];
  return (
    <div className="max-w-screen-lg  px-6 sm:px-8 lg:px-16 mx-auto flex mt-20 flex-col w-full text-center justify-center">
      <div className="flex flex-col w-full">
        <Title title={"融资服务"} bg={"/images/financingservices.png"} />
        <ScrollAnimationWrapper className="mt-3">
          <TzTabs
            className="financing-services-tab"
            items={items}
            centered
            destroyInactiveTabPane
            tabBarGutter={96}
            tabBarStyle={{ padding: "0px 76px" }}
          />
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default FinancialProduct;
