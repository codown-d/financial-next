"use client";
import Image from "next/image";
import TzInput from "../TzInput";
import { Divider, Form, Pagination, Space } from "antd";
import { TzButton } from "../TzButton";
import TzCard from "../TzCard";
import TzForm, { TzFormItem } from "../TzForm";
import { TzCheckableTagNormal } from "../TzCheckableTag";
import {
  FinanceDataTypeEmu,
  FinancialMarket,
  MarketDataList,
} from "@/constant";
import TzDivider from "../TzDivider";
import TzSpace from "../TzSpace";
import FilterHeader from "./FilterHeader";
import MarketCard from "./MarketCard";
import TzTabs from "../TzTabs";

export default function FilterMarket(props: { type: "service" | "credit" }) {
  let { type } = props;
  return (
    <div>
      <FilterHeader />
      <TzSpace direction="vertical" size="middle" style={{ display: "flex" }}>
        {MarketDataList.map((item,index) => {
          return <MarketCard {...item} key={index}/>;
        })}
      </TzSpace>
      <div className="mt-[60px] mb-[90px] flex">
        <Pagination defaultCurrent={6} total={MarketDataList.length} />
      </div>
    </div>
  );
}
