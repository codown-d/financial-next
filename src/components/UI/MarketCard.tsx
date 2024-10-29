"use client";
import { TzButton } from "../TzButton";
import { useRouter } from "next/navigation";
import DataTypeCom from "./DataTypeCom";
import LogoInfo from "./LogoInfo";
import DataTypeTitleCom from "./DataTypeTitleCom";
import { FinanceItemProps } from "@/fetch/definition";
import { collateralOp } from "@/constant";
import CountUp from "react-countup";

export default function MarketCard(props: FinanceItemProps) {
  let {
    name,
    companyName,
    guaranteeMethod,
    dataType,
    amount,
    logoUrl,
    dealOrder,
    id,
  } = props;
  const router = useRouter();

  return (
    <div className="flex bg-white-500 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.04)] rounded-[16px] py-9">
      <LogoInfo logo={companyName} logoUrl={logoUrl} />
      <div className="flex flex-row border-x-[1px] flex-1 border-dashed border-[#EEEEEE] pl-[50px]">
        <div className="flex flex-col mr-9">
          <DataTypeTitleCom dataType={dataType} amount={amount} name={name} />
          <div className="font-normal text-sm text-[#333333]  text-left mt-6">
            担保方式：
            {collateralOp
              .reduce((pre: any[], item) => {
                if (guaranteeMethod.includes(item.value)) {
                  pre?.push?.(item.label);
                }
                return pre;
              }, [])
              .join("/")}
            <br />
            <span className="text-xs mt-2 text-[#999999]">
              <CountUp end={dealOrder} /> 笔需求对接成功
            </span>
          </div>
        </div>
        <div className="flex ">
          <DataTypeCom {...props} />
        </div>
      </div>
      <div className="w-[245px] flex justify-center items-center">
        <TzButton
          className=""
          shape={"round"}
          onClick={() => {
            router.push(`/product-introduction?id=${id}&dataType=${dataType}`);
          }}
        >
          查看详情
        </TzButton>
      </div>
    </div>
  );
}
