"use client";
import { TzButton } from "../TzButton";
import { useRouter } from "next/navigation";
import DataTypeCom from "./DataTypeCom";
import LogoInfo from "./LogoInfo";
import DataTypeTitleCom from "./DataTypeTitleCom";
import { FinanceItemProps } from "@/fetch/definition";
import { collateralOp } from "@/constant";
import CountUp from "react-countup";
import { isArray } from "lodash";
import { useDataType } from "@/hooks";

export default function MarketCard(props: FinanceItemProps) {
  let {
    name,
    companyName,
    dataType,
    amount,
    logoUrl,
    dealOrder,
    productType,
    id,
  } = props;
  const router = useRouter();
let {dataTypeLabel} = useDataType(props);
  return (
    <div className="flex bg-white-500 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.04)] rounded-[16px] py-9">
      <LogoInfo logo={companyName} logoUrl={logoUrl} />
      <div className="flex flex-row border-x-[1px] flex-1 border-dashed border-[#EEEEEE] pl-[50px]">
        <div className="flex flex-col mr-9">
          <DataTypeTitleCom dataType={dataType} amount={amount} name={name} productType={productType} />
          <div className="font-normal text-sm text-[#333333]  text-left mt-6">
            担保方式：
            {dataTypeLabel}
            <br />
            <span className="text-xs mt-2 text-[#999999]">
              <CountUp end={dealOrder} /> 笔需求对接成功
            </span>
          </div>
        </div>
        <div className="flex flex-wrap">
          <DataTypeCom {...props} />
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <TzButton
          className=" mx-4"
          shape={"round"}
          onClick={() => {
            router.push(`/product-introduction?id=${id}&productType=${productType}`);
          }}
        >
          查看详情
        </TzButton>
      </div>
    </div>
  );
}
