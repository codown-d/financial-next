"use client";
import FinanceCard from "@/components/UI/FinanceCard";
import { MarketDataList } from "@/constant";
import { FinanceDataTypeEmu } from "@/fetch/definition";

export default function ClientFinanceCard() {
  let items = MarketDataList.filter(
    (item) => item.productType===FinanceDataTypeEmu.Microloans
  );
  return (
    <div className="flex justify-between mb-[140px]">
      {items.map((item,index) => {
        return <FinanceCard {...item} key={index}/>;
      })}
    </div>
  );
}
