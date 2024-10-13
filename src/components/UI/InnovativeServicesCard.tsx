"use client";
import Link from "next/link";
import Image from "next/image";
import { useResize } from "@/hooks";
import { useMemo, useState } from "react";
import CardOverview from "./CardOverview";
import Loan, { FinanceItemProps } from "./Loan";
import { TzButton } from "../TzButton";
import { SwapRightOutlined } from "@ant-design/icons";
import TzCard from "../TzCard";
interface TabItem {
  title: string;
  description: string;
  key: string;
  list: FinanceItemProps[];
}
interface FinancialTabProps {
  items: TabItem[];
}
export default function InnovativeServicesCard(props: {
  children: React.ReactNode;
}) {
  let { children } = props;
  return (
    <TzCard
      className="!rounded-2xl !border-0 overflow-hidden"
      styles={{body:{padding:0}}}
    >
      {children}
    </TzCard>
  );
}
