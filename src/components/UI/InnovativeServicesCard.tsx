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
export default function InnovativeServicesCard(props) {
  let { children } = props;
  return (
    <TzCard
      cover={
        <Image
          src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
          alt={""}
          width={536}
          height={0}
        />
      }
    >
      {children}
    </TzCard>
  );
}
