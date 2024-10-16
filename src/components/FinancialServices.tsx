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
        desc: "基础数字化技术的到金融项目管理服务，通过统一的数据底座结合云化数据平台构建与运用，助力我市地方金融机构数字化转型，拓展金融服务半径。",
      },
    },
    {
      coverImg: "/images/blzcgl.png",
      title: "不良资产管理",
      hover: {
        desc: "基于云计算、物联网技术的不良资产智能化管理服务，解决不良资产管理信息链条日趋复杂，传统手工作业不规范的诸多操作风险，实现不良资产清收作业全流程闭环自动化、节点化，大幅提升清收处置效率与能力。",
      },
    },
    {
      coverImg: "/images/fxpgfw.png",
      title: "风险评估服务",
      hover: {
        desc: "基于云计算、物联网技术的不良资产智能化管理服务，解决不良资产管理信息链条日趋复杂，传统手工作业不规范的诸多操作风险，实现不良资产清收作业全流程闭环自动化、节点化，大幅提升清收处置效率与能力。",
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
      <div className="flex justify-between px-[40px] sm:px-[30px] lg:px-[96px] flex">
        {item.map((item, index) => {
          return (
            <InnovativeServicesCard key={index} className={'w-[320px] sm:w-[280px]'}>
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
