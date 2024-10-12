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
import { TzTitle } from "../TzTypography";
import Title from "./Title";
import Image from "next/image";
import SeeMore from "./SeeMore";

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
  let tabItems = useMemo(
    () => [
      {
        label: "政策原文",
        key: "policyText",
        children: (
          <PolicyTable
            key={"policyText"}
            columns={columns}
            dataSource={dataSource}
          />
        ),
      },
      {
        label: "政策解析",
        key: "policyAnalysis",
        children: <PolicyTable columns={columns} dataSource={dataSource} />,
      },
      // {
      //   label: "申报日历",
      //   key: "reportingCalendar",
      //   children: <PolicyTable columns={[]} dataSource={[]} />,
      // },
    ],
    []
  );
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  let onSearch = useCallback(() => {}, []);
  return (
    <>
      <Title title={"融资服务"} bg={"/images/financingservices.png"} />
      <div className="grid grid-flow-row md:grid-cols-12 grid-cols-1 gap-8 h-[473px]">
        <div className="md:col-span-6 col-span-6 flex bg-white-500">
          <Image src={"/images/ggfw_1.png"} alt={""} width={280} height={0} />
          <div className="flex-1 px-7">
            <TzTitle level={3} className="text-2xl flex justify-between">
              <span>政策原文</span> <SeeMore />
            </TzTitle>
            <PolicyTable columns={columns} dataSource={dataSource} />
            <TzTitle level={3} className="text-2xl flex justify-between mt-7">
              <span>政策解读</span> <SeeMore />
            </TzTitle>
          </div>
        </div>
        <div className="md:col-span-3 col-span-3 ">
          <Image src={"/images/ggfw_2.png"} alt={""} width={280} height={0} />
        </div>
        <div className="md:col-span-3 col-span-3 ">
          <Image src={"/images/ggfw_3.png"} alt={""} width={280} height={0} />
        </div>
      </div>
    </>
  );
}
