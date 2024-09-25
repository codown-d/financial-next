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

export default function PolicyArea() {
  let list = [
    {
      imgUrl: "建设银行-抵押快贷",
      title: "广财基金介绍",
      description: 1000,
    },
    {
      imgUrl: "建设银行-抵押快贷",
      title: "股权投资介绍",
      description: 1000,
    },
    {
      imgUrl: "建设银行-抵押快贷",
      title: "贸易服务介绍",
      description: 1000,
    },
  ];
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
    },
    {
      title: "安徽省普惠型小微企业贷款风险补偿",
      time: "2023-05-01",
    },
    {
      title: " 促进经济高质量发展 ",
      time: "2023-05-01",
    },
    {
      title: "助企促发展若干举措  ",
      time: "2023-05-01",
    },
    {
      title: "  科技型中小企业担保费补贴  ",
      time: "2023-05-01",
    },
  ];
  let tabItems = useMemo(
    () => [
      {
        label: "政策原文",
        key: "policyText",
        children: <PolicyTable columns={columns} dataSource={dataSource} />,
      },
      {
        label: "政策解析",
        key: "policyAnalysis",
        children: <PolicyTable columns={columns} dataSource={dataSource} />,
      },
      {
        label: "申报日历",
        key: "reportingCalendar",
        children: <PolicyTable columns={[]} dataSource={[]} />,
      },
    ],
    []
  );
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  let onSearch = useCallback(() => {}, []);
  return (
    <>
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
        >
          全方位政策服务
        </motion.h3>
        <motion.p
          variants={scrollAnimation}
          className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
        >
          <TzSearch
            addonBefore={<span className="text-lg">政策名称：</span>}
            placeholder="如：广元财政指导意见征求意见稿"
            allowClear
            enterButton="查政策"
            size="large"
            onSearch={onSearch}
          />
        </motion.p>
      </ScrollAnimationWrapper>
      <TzTabs
        items={tabItems}
        destroyInactiveTabPane
        className="!text-xl"
        size={"large"}
      />
    </>
  );
}
