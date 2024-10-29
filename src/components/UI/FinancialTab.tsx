"use client";
import Link from "next/link";
import Image from "next/image";
import { useResize } from "@/hooks";
import { useMemo, useState } from "react";
import CardOverview from "./CardOverview";
import Loan from "./Loan";
import { TzButton } from "../TzButton";
import { SwapRightOutlined } from "@ant-design/icons";
import { FinanceItemProps } from "@/fetch/definition";
import { useRouter } from "next/navigation";
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
  let [activeKey, setActiveKey] = useState(items[0].key);
  let { isMobile } = useResize();
  const router = useRouter();
  let list = useMemo(() => {
    return items.find((item) => item.key === activeKey).list;
  }, [items, activeKey]);
  return (
    <div className="flex mt-[52px] justify-center px-10 screen_1440:px-0 ">
      <div className="mr-14">
        {items.map((item) => {
          let { key, title, description } = item;
          return (
            <div
              className="mb-6 "
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
      <div className="w-0 flex-1">
        <Loan items={list} />
        <div className="flex flex-row">
          <TzButton
            className="!px-[56px] "
            shape="round"
            icon={<SwapRightOutlined style={{ fontSize: 18 }} />}
            iconPosition={"end"}
            onClick={() => {
              router.push(`/small-loan`);
            }}
          >
            查看全部
          </TzButton>
        </div>
      </div>
    </div>
  );
}
