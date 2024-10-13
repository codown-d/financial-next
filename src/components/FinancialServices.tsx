"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import Title from "./UI/Title";
import InnovativeServicesCard from "./UI/InnovativeServicesCard";
import TzIcon from "./TzIcon";
import { Divider } from "antd";
import { TzButton } from "./TzButton";
import SeeMore from "./UI/SeeMore";

const FinancialServices = () => {
  let item = [
    {
      coverImg: "/images/szjrgj.png",
      title: "数字金融工具",
      hover: {
        desc: "银行或其他金融机构向个人或企业发放的资金，银行或其他金融机构向个人或企业发放的资金",
      },
    },
    {
      coverImg: "/images/blzcgl.png",
      title: "不良资产管理",
      hover: {
        desc: "银行或其他金融机构向个人或企业发放的资金，银行或其他金融机构向个人或企业发放的资金",
      },
    },
    {
      coverImg: "/images/fxpgfw.png",
      title: "风险评估服务",
      hover: {
        desc: "银行或其他金融机构向个人或企业发放的资金，银行或其他金融机构向个人或企业发放的资金",
      },
    },
  ];
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
      <Title
        className={"mt-[216px] mb-[68px]"}
        title={<span className="text-[#fff]">金融创新服务</span>}
        bg={"/images/financialinnovation.png"}
      />
      <div className="grid grid-cols-3 gap-[144px] px-[96px]">
        {item.map((item, index) => {
          return (
            <InnovativeServicesCard key={index}>
              <div className="relative !h-[400px] overflow-hidden group bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] rounded-lg hover:bg-white-500 transition-all duration-300 ">
                <div className="absolute inset-0 flex opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <Image
                    src={item.coverImg}
                    alt={""}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="flex flex-col rounded-2xl h-[140px] absolute bottom-0 w-full bg-white-500 py-[30px] px-[30px]">
                    <span className="font-medium text-[24px] text-[#333333] leading-[36px]">
                      {item.title}
                    </span>
                    <TzIcon
                      className={"fa-arrow-right mt-7 !text-[#333] text-xl"}
                    ></TzIcon>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-between  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className=" pt-[56px] px-[32px] w-full">
                    <div className="font-medium text-[24px] text-[#333333] leading-[36px]">
                      {item.title}
                    </div>
                    <Divider className="bg-[#3D5AF5] !mt-[58px]" />
                    <div className="font-normal text-[14px] text-[#999999] leading-[20px]">
                      {item.hover.desc}
                    </div>
                  </div>
                  <TzButton
                    className="!px-[56px] mb-[36px] w-fit left-[32px]"
                    shape="round"
                    icon={<TzIcon
                      className={"fa-arrow-right text-xs "}
                    ></TzIcon>}
                    iconPosition={"end"}
                  >
                    查看全部
                  </TzButton>
                </div>
              </div>
            </InnovativeServicesCard>
          );
        })}
      </div>
    </>
  );
};

export default FinancialServices;
