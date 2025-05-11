"use client";
import React, { useMemo, useState } from "react";
import TzCard, { TzCardProps } from "../TzCard";
import Image from "next/image";
import { TzButton } from "../TzButton";
import TzIcon from "../TzIcon";
import { collateralOp, term_unit } from "@/constant";
import { FinanceDataTypeEmu, FinanceItemProps } from "@/fetch/definition";
import TzNextImage from "../TzNextImage";
import CountUp from "react-countup";
import { useRouter } from "next/navigation";
import TzImage from "../TzImage";
import { useDataType } from "@/hooks";
import DataType from "./DataType";
export type FinanceCardProps = FinanceItemProps;
export default function (props: FinanceCardProps) {
  let {
    dataType,
    productType,
    name,
    rateDown,
    rateUp,
    rate,
    term,
    amount,
    success_count,
    id,
    financial_organs,
    ...otherProps
  } = props;
  let getRateList = useMemo(() => {
    return productType === FinanceDataTypeEmu.Insurance
      ? [
          {
            label: "保额",
            value: amount,
            p: "万元",
          },
        ]
      : productType === FinanceDataTypeEmu.ElectronicGuarantee
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
            value: `${rate}`,
            p: "%",
          },
        ]
      : productType === FinanceDataTypeEmu.EquityFinancing
      ? [
          {
            label: <span className="text-[#333]">最低利率</span>,
            value: (
              <span className="text-[20px]">
                <span className="text-[40px]">{rate}</span>%
              </span>
            ),
          },
        ]
      : productType === FinanceDataTypeEmu.EmergencyRefinancing
      ? [
          {
            label: <span className="text-[#333]">认缴金额</span>,
            value: amount,
            p: "万元",
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
        className={"!rounded-2xl h-[260px] flex flex-1 w-0 "}
        styles={{
          body: { padding: "0", position: "relative", display: "inline-block" },
        }}
      >
        <TzImage
          src={
            productType === FinanceDataTypeEmu.EmergencyRefinancing
              ? "/images/card-header-1.png"
              : "/images/card-header.png"
          }
          width={"100%"}
        />
        <div className="flex absolute top-3 items-center left-5">
          <div className="text-[20px] leading-[20px] font-bold">{name}</div>
          {![
            FinanceDataTypeEmu.EmergencyRefinancing,
            FinanceDataTypeEmu.EquityFinancing,
          ].includes(productType) ? (
            <div className="relative w-[106px] mt-[2px] ml-[6px]">
              <Image
                src={"/images/label.png"}
                alt={""}
                width={106}
                height={22}
              />
              <div className="absolute top-0 flex items-center justify-between w-full h-full px-2 text-[12px] text-white-500">
                <span>期限</span>
                <span className="text-[#3D5AF5] ">
                  1-{term}
                  {term_unit[props.term_unit]?.text}
                </span>
              </div>
            </div>
          ) : null}
        </div>
        {productType === FinanceDataTypeEmu.EmergencyRefinancing ? null : (
          <div className="absolute top-1 right-2 text-white-500 text-[10px]">
            <CountUp end={success_count} separator="," /> 笔需求对接成功
          </div>
        )}
        <div
          className="absolute top-11  rounded-2xl bg-white-500 w-full"
          style={{ background: "#fff" }}
        >
          <div className="pt-4 pl-5 text-left">
            <div className="flex  text-[#3D5AF5]">
              {getRateList.map((item, index) => {
                return (
                  <div className={`flex flex-col mr-2`} key={index}>
                    <div className="text-[#999999] mb-[6px] text-sm">
                      {item.label}
                    </div>
                    <div className="bg-[#F9F9F9]  pt-[11px] px-[16px] pb-[10px] text-left rounded-lg">
                      <span className="text-[40px] leading-[40px] font-bold inline-flex items-center ">
                        {item.value}
                      </span>
                      &nbsp;{item.p}
                    </div>
                  </div>
                );
              })}
            </div>
            <DataType {...props} />
            <div className="flex items-end justify-between">
              <TzButton
                className=" !py-[10px] !px-[28px]  text-white-500"
                shape="round"
                type="primary"
                icon={
                  <TzIcon className={"fa-arrow-right text-white-500 text-sm"} />
                }
                onClick={() => {
                  router.push(`/product-introduction?id=${id}`);
                }}
                iconPosition={"end"}
              >
                查看详情
              </TzButton>
              <div className="mr-[23px] mt-[-4px] flex flex-col">
                <TzNextImage
                  src={financial_organs?.logo}
                  alt={""}
                  style={{ width: "52px", height: "52px" }}
                />
                <span className="leading-[14px] mt-1">
                  {financial_organs?.organs_name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </TzCard>
    </>
  );
}
