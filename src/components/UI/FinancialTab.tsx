"use client";
import Link from "next/link";
import Image from "next/image";
import { useResize } from "@/hooks";
import { useMemo, useState } from "react";
import CardOverview from "./CardOverview";
import Loan, { FinanceItemProps } from "./Loan";
import { TzButton } from "../TzButton";
import { SwapRightOutlined } from "@ant-design/icons";
interface TabItem {
  title: string;
  description: string;
  key: string;
  list: FinanceItemProps[];
}
interface FinancialTabProps {
  items: TabItem[];
}
export default function FinancialTab(props: FinancialTabProps) {
  let { items } = props;
  let { isMobile } = useResize();
  let [activeKey, setActiveKey] = useState(items[0].key);
  let list = useMemo(() => {
    return items.find((item) => item.key === activeKey).list;
  }, [items, activeKey]);
  return (
    <div className="flex mt-[52px]">
      <div className="mr-14">
        {items.map((item) => {
          let { key, title, description } = item;
          return (
            <div
              className="mt-6 "
              key={key}
              onClick={() => {
                console.log(key);
                setActiveKey(key);
              }}
            >
              <CardOverview
                description={description}
                title={title}
                isActive={activeKey === key}
              />
            </div>
          );
        })}
      </div>
      <div className="text-left">
        <Loan items={list} />
      </div>
    </div>
  );
}