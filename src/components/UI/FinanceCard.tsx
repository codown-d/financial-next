"use client";
import React, { useMemo } from "react";
import TzCard, { TzCardProps } from "../TzCard";
import Image from "next/image";
import { TzButton } from "../TzButton";
import TzIcon from "../TzIcon";
import { collateralOp, FinanceDataTypeEmu } from "@/constant";
import { FinanceItemProps } from "@/fetch/definition";
import TzNextImage from "../TzNextImage";
import CountUp from "react-countup";
import { useRouter } from "next/navigation";
type FinanceCardProps = TzCardProps & FinanceItemProps;
export default function (props: FinanceCardProps) {
  let {
    dataType,
    logoUrl,
    companyName,
    name,
    rateDown,
    rateUp,
    rate,
    term,
    amount,
    dealOrder,
    guaranteeMethod,
    id,
    ...otherProps
  } = props;
  console.log(props)
  let getRateList = useMemo(() => {
    return dataType === FinanceDataTypeEmu.ElectronicGuarantee
      ? [
          {
            label: (
              <span className="text-[#333]">
                收费标准
                <span className="font-normal text-xs text-gray-400 leading-3 ml-6">
                  以审批结果为准
                </span>
              </span>
            ),
            value: `${rateDown}-${rateUp}`,
            p: "%",
          },
        ]
        : dataType === FinanceDataTypeEmu.EquityFinancing?[
          {
            label: <span className="text-[#333]">最低利率</span>,
            value: <span className="text-[20px]">当期LPR</span>
          },
        ]
      : dataType === FinanceDataTypeEmu.EmergencyRefinancing
      ? [
          {
            label: <span className="text-[#333]">认缴金额</span>,
            value: amount,
            p: "亿元",
          },
        ]
      : [
          {
            label: "最低费率",
            value: rate,
            p: "%",
          },
          {
            label: "最高额度",
            value: amount,
            p: "万元",
          },
        ];
  }, [dataType, rate, amount]);
  const router = useRouter();
  return (
    <>
      <TzCard
        hoverable
        className={"!rounded-2xl h-[260px]"}
        styles={{
          body: { padding: "0", position: "relative", display: "inline-block" },
        }}
      >
        <TzNextImage
          src={dataType===FinanceDataTypeEmu.EmergencyRefinancing ?"/images/card-header-1.png":"/images/card-header.png"}
          width={360}
          height={0}
        />
        <div className="flex absolute top-3 items-center left-5">
          <div className="text-[20px] leading-[20px] font-bold">{name}</div>
          {![
            FinanceDataTypeEmu.EmergencyRefinancing,
            FinanceDataTypeEmu.EquityFinancing,
          ].includes(dataType) ? (
            <div className="relative w-[106px] mt-[2px] ml-[6px]">
              <Image
                src={"/images/label.png"}
                alt={""}
                width={106}
                height={22}
              />
              <div className="absolute top-0 flex items-center justify-between w-full h-full px-2 text-[12px] text-white-500">
                <span>期限</span>
                <span className="text-[#3D5AF5] ">1-{term}个月</span>
              </div>
            </div>
          ) : null}
        </div>
        {dataType === FinanceDataTypeEmu.EmergencyRefinancing ? null : <div className="absolute top-1 right-2 text-white-500 text-[10px]">
          <CountUp end={dealOrder} separator="," /> 笔需求对接成功
        </div>}
        <div
          className="absolute top-11  rounded-2xl bg-white-500 w-full"
          style={{ background: "#fff" }}
        >
          <div className="pt-4 pl-5 text-left">
            <div className="flex  text-[#3D5AF5]">
              {getRateList.map((item, index) => {
                return (
                  <div className="mr-2" key={index}>
                    <div className="text-[#999999] mb-[6px] text-sm">
                      {item.label}
                    </div>
                    <div className="bg-[#F9F9F9] min-w-[156px] pt-[11px] pl-[12px] pb-[10px] text-left rounded-lg">
                      <span className="text-[40px] leading-[40px] font-bold inline-flex items-center ">
                        {item.value}
                      </span>
                     &nbsp;{item.p}
                    </div>
                  </div>
                );
              })}
            </div>
            {dataType === FinanceDataTypeEmu.EmergencyRefinancing ? null : (
              <div className="mt-3 text-left leading-[14px]">
                担保方式：{ collateralOp.reduce((pre:any[],item)=>{
                  if(guaranteeMethod.includes(item.value)){
                     pre?.push?.(item.label)
                  }
                  return pre
                },[]).join('/')}
              </div>
            )}
            <div className="flex items-end justify-between">
              <TzButton
                className=" !py-[10px] !px-[28px] text-white-500"
                shape="round"
                type="primary"
                icon={
                  <TzIcon className={"fa-arrow-right text-white-500 text-sm"} />
                }
                onClick={()=>{
                  router.push(`/product-introduction?id=${id}&dataType=${dataType}`)
                }}
                iconPosition={"end"}
              >
                查看详情
              </TzButton>
              <div className="mr-[23px] mt-[-4px]">
                <Image src={logoUrl} alt={""} width={52} height={52} />
                <span className="leading-[14px]">{companyName}</span>
              </div>
            </div>
          </div>
        </div>
      </TzCard>
    </>
  );
}
