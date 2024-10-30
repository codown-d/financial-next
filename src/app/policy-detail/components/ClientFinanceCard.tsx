"use client";
import FinanceCard from "@/components/UI/FinanceCard";
import { FinanceDataTypeEmu, MarketDataList } from "@/constant";

export default function ClientFinanceCard() {
  let items = MarketDataList.filter(
    (item) => item.dataType === FinanceDataTypeEmu.Microloans
  );
  return (
    <div className="flex justify-between mb-[140px]">
      {items.map((item,index) => {
        return <FinanceCard {...item} key={index}/>;
      })}
    </div>
  );
}
