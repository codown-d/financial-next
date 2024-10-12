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
import FinancialTab from "./UI/FinancialTab";
import {
  BankLoans,
  EmergencyRefinancing,
  EquityFinancing,
  Microloans,
} from "@/constant";

export type TabPosition = "left" | "right" | "top" | "bottom";
const FinancialProduct = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  let tabItems_1 = [
    BankLoans,
    Microloans,
    EmergencyRefinancing,
    EquityFinancing,
  ];
  let tabItems_2 = [BankLoans, Microloans, EmergencyRefinancing];
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
    <div
      style={{
        background:
          "linear-gradient( 180deg, #F9F9F9 0%, rgba(249,249,249,0) 100%)",
      }}
      className="overflow-hidden"
    >
      <div className="max-w-screen-lg  mx-auto flex mt-14 flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <Title title={"融资服务"} bg={"/images/financingservices.png"} />
          <TzTabs
            className="financing-services-tab mt-3"
            items={items}
            centered
            destroyInactiveTabPane
            tabBarGutter={96}
            tabBarStyle={{ padding: "0px 76px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default FinancialProduct;
