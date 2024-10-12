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
export default function PublicServicesDes(props) {
  let { children, className } = props;
  return <div className={`px-[14px] py-[11px] ${className} bg-[#F9F9F9] relative before:absolute before:left-0 before:h-[100%] before:w-1 before:bg-primary-500 before:top-0`}>{children}</div>;
}
