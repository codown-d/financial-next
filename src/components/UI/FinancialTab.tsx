"use client";
import Link from "next/link";
import Image from "next/image";
import SvgLogo from "@public/images/logo.png";
import TzTabs, { TzTabsProps } from "../TzTabs";
import { useResize } from "@/hooks";
import { useState } from "react";
export default function FinancialTab(props: TzTabsProps) {
  let { isMobile } = useResize();
  let { items } = props;
  let [activeKey, setActiveKey] = useState(items[0].key);
  return (
    <div className="flex ">
      <div>
        {items.map((item) => {
          return <div className="mt-6" onClick={() => setActiveKey(item.key)}>{item.label}</div>;
        })}
      </div>
      <div>{items.find((item) => item.key === activeKey).children}</div>
    </div>
  );
}
