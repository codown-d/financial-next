"use client";
import { useCallback, useMemo } from "react";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import TzCard from "../TzCard";
import Meta from "antd/es/card/Meta";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { motion } from "framer-motion";
import TzSearch from "../TzSearch";
import TzTabs from "../TzTabs";
import PolicyTable from "./PolicyTable";
import { TzParagraph, TzTitle } from "../TzTypography";
import Title from "./Title";
import Image from "next/image";
import SeeMore from "./SeeMore";
import PublicServicesDes from "./PublicServicesDes";

export default function PolicyArea() {
  let columns = [
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "时间",
      dataIndex: "time",
      key: "time",
    },
  ];
  let dataSource = [
    {
      title: "科技型企业贷款风险补偿",
      time: "2023-05-01",
      id: 0,
    },
    {
      title: "安徽省普惠型小微企业贷款风险补偿",
      time: "2023-05-01",
      id: 1,
    },
    {
      title: " 促进经济高质量发展 ",
      time: "2023-05-01",
      id: 2,
    },
    {
      title: "助企促发展若干举措  ",
      time: "2023-05-01",
      id: 3,
    },
    {
      title: "  科技型中小企业担保费补贴  ",
      time: "2023-05-01",
      id: 4,
    },
  ];
  let dataList = [
    {
      title: "科技型企业贷款风险补偿",
      desc: "绿色保险是指保险业在环境资源保护与社会治理、绿色产业运行和绿色生活消费等",
    },
    {
      title: "科技型企业贷款风险补偿",
      desc: "绿色保险是指保险业在环境资源保护与社会治理、绿色产业运行和绿色生活消费等",
    },
  ];
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
      <Title
        title={"融资服务"}
        bg={"/images/financingservices.png"}
        className="mb-[56px]"
      />
      <div className="flex justify-between h-[473px] mb-[268px] ">
        <div className=" flex bg-white-500 flex-1 w-0 border border-solid border-[#3D5AF5] rounded-[16px] shadow-[0_4px_20px_0_rgba(119,98,170,0.21)]">
          <Image src={"/images/ggfw_1.png"} alt={""} width={280} height={0} />
          <div className="flex-1 px-7 w-0 pt-6">
            <TzTitle level={3} className=" flex justify-between !mb-0">
              <span className="leading-6">政策原文</span> <SeeMore />
            </TzTitle>
            <PolicyTable columns={columns} dataSource={dataSource} />
            <TzTitle level={3} className="text-2xl flex justify-between mt-6">
              <span className="leading-6">政策解读</span> <SeeMore />
            </TzTitle>
            <ScrollAnimationWrapper>
              <motion.div variants={scrollAnimation}>
                {dataList.map((item) => {
                  return (
                    <PublicServicesDes className="mt-3">
                      <div className="flex flex-col w-[100%]">
                        <span className="text-base mb-1">{item.title}</span>
                        <TzParagraph
                          ellipsis={true}
                          className="text-xs text-[#999] !mb-0"
                        >
                          {item.desc}
                        </TzParagraph>
                      </div>
                    </PublicServicesDes>
                  );
                })}
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="w-[280px] ml-8">
          <Image src={"/images/ggfw_2.png"} alt={""} width={280} height={0} />
        </div>
        <div className="w-[280px] ml-8">
          <Image src={"/images/ggfw_3.png"} alt={""} width={280} height={0} />
        </div>
      </div>
    </>
  );
}
