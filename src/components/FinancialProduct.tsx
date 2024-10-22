"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import TzTabs from "./TzTabs";
import Loan from "./UI/Loan";
import TitleBg from "./UI/TitleBg";
import Image from "next/image";
import FinancialTab from "./UI/FinancialTab";
import {
  BankLoans,
  ElectronicGuarantee,
  EmergencyRefinancing,
  EquityFinancing,
  FinanceGuarantee,
  Microloans,
} from "@/constant";
import { TzButton } from "./TzButton";
import { SwapRightOutlined } from "@ant-design/icons";
import { Span } from "next/dist/trace";
import InnovativeServicesCard from "./UI/InnovativeServicesCard";
import FinancialServices from "./FinancialServices";

export type TabPosition = "left" | "right" | "top" | "bottom";
const FinancialProduct = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  let tabItems_1 = [Microloans, EmergencyRefinancing, EquityFinancing];
  let tabItems_2 = [FinanceGuarantee, ElectronicGuarantee];
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
    <div className="overflow-hidden bg-gradient-to-r from-[#F9F9F9] to-white-500 ">
      <div className="max-w-screen-lg  mx-auto flex mt-14 flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <TitleBg title={"金融服务"} bg={"/images/financingservices.png"} />
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
      <div className=" bg-[url('/images/jrcxfw-bg.png')] bg-size-auto-repeat h-[976px]">
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center">
          <FinancialServices />
        </div>
      </div>
    </div>
  );
};

export default FinancialProduct;
