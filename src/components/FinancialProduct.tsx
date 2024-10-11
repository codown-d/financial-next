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
import CardOverview from "./UI/CardOverview";
import FinancialTab from "./UI/FinancialTab";

export type TabPosition = "left" | "right" | "top" | "bottom";
const FinancialProduct = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  let tabItems_1 = [
    {
      label: (
        <CardOverview
          description={"银行或其他金融机构向个人或企业发放的资金"}
          title={"银行贷款"}
        />
      ),
      key: "key_1",
      children: <Loan />,
    },
    {
      label: (
        <CardOverview
          description={"银行或其他金融机构向个人或企业发放的资金"}
          title={"小额贷款"}
        />
      ),
      key: "key_2",
      children: <Guaranteed />,
    },
    {
      label: (
        <CardOverview
          description={"银行或其他金融机构向个人或企业发放的资金"}
          title={"应急转贷"}
        />
      ),
      key: "key_3",
      children: <Emergency />,
    },
    {
      label: (
        <CardOverview
          description={"银行或其他金融机构向个人或企业发放的资金"}
          title={"股权融资"}
        />
      ),
      key: "key_4",
      children: <Emergency />,
    },
  ];
  let tabItems_2 = [
    { label: "融资担保", key: "key_1", children: <Loan /> },
    { label: "电子保函", key: "key_2", children: <Guaranteed /> },
    { label: "综合保险", key: "key_3", children: <Emergency /> },
  ];
  let items = [
    {
      label: (
        <div className="flex flex-col items-center px-[76px]">
          <Image src={"/images/rzfw.png"} alt={""} width={88} height={88} />
          <span>融资服务</span>
        </div>
      ),
      key: "key_1",
      children: <FinancialTab items={tabItems_1} />,
    },
    {
      label: (
        <div className="flex flex-col items-center px-[76px]">
          <Image src={"/images/zxfw.png"} alt={""} width={88} height={88} />
          <span>增信服务</span>
        </div>
      ),
      key: "key_2",
      children: <FinancialTab items={tabItems_2} />,
    },
  ];
  return (
    <div  style={{background: 'linear-gradient( 180deg, #F9F9F9 0%, rgba(249,249,249,0) 100%)'}}>
      <div className="max-w-screen-lg  mx-auto flex mt-20 flex-col w-full text-center justify-center">
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
    </div>
  );
};

export default FinancialProduct;
