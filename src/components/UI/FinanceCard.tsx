"use client";
import React from "react";
import Meta from "antd/es/card/Meta";
import { getColorScale } from "@/lib";
import TzCard, { TzCardProps } from "../TzCard";
import Image from "next/image";
import { FinanceItemProps } from "./Loan";
import { TzButton } from "../TzButton";
type FinanceCardProps = TzCardProps & FinanceItemProps;
export default function (props: FinanceCardProps) {
  let {
    imgUrl,
    title,
    rateDown,
    rateUp,
    rate,
    term,
    amount,
    guaranteeMethod,
    ...otherProps
  } = props;
  return (
    <>
      <TzCard
        {...otherProps}
        hoverable
        className={"!rounded-2xl h-[312px]"}
        styles={{ body: { padding: "0", position: "relative" } }}
      >
        <Image
          src={"/images/card-header.png"}
          alt={""}
          width={536}
          height={0}
        />
        <div className="flex absolute top-4 items-center left-6">
          <div className="text-[32px] leading-[34px] font-bold">{title}</div>
          <div className="relative w-[106px] mt-[2px] ml-4">
            <Image src={"/images/label.png"} alt={""} width={106} height={22} />
            <div className="absolute top-0 flex items-center justify-between w-full h-full px-2 text-[12px] text-white-500">
              <span>期限</span>
              <span className="text-[#3D5AF5] ">1-{term}个月</span>
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-5 text-white-500 text-[12px]">
          84,972 笔需求对接成功
        </div>
        <div
          className="absolute top-16  rounded-2xl bg-white-500 w-full"
          style={{ background: "#fff" }}
        >
          <div className="pt-6 pl-6">
            <div className="flex  text-[#3D5AF5]">
              {[
                {
                  label: "最低利率",
                  value: rate,
                  p: "%",
                },
                {
                  label: "最低利率",
                  value: amount,
                  p: "万元",
                },
              ].map((item) => {
                return (
                  <div className="mr-2">
                    <div className="text-[#999999] mb-[6px] ">{item.label}</div>
                    <div className="bg-[#F9F9F9] w-[156px] pt-[11px] pl-[12px] pb-[10px] text-left rounded-lg">
                      <span className="text-[40px] leading-[40px]">
                        {item.value}
                      </span>{" "}
                      {item.p}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 text-left">
              担保方式：{guaranteeMethod.join("/")}
            </div>
            <TzButton
              className="mt-[53px] !py-[10px] !px-[28px] text-white-500"
              shape="round"
              type="primary"
            >
              查看详情
            </TzButton>
          </div>
        </div>
      </TzCard>
    </>
  );
}
