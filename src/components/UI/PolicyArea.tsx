"use client";
import { useCallback, useMemo, useState } from "react";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { motion } from "framer-motion";
import PolicyTable from "./PolicyTable";
import { TzParagraph, TzTitle } from "../TzTypography";
import Title from "./Title";
import Image from "next/image";
import SeeMore from "./SeeMore";
import PublicServicesDes from "./PublicServicesDes";
import { TzButton } from "../TzButton";
import TzIcon from "../TzIcon";
import { PolicyData } from "@/constant";
import styles from "./ui.module.scss";

export default function PolicyArea() {
  let [actItem, setActItem] = useState("policy_1");
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
      <div className="flex gap-8 mt-10 screen_1440:mt-0 flex-col justify-around  mb-[268px] screen_1440:flex-row screen_1440:h-[473px] px-[100px] screen_960:px-[60px] screen_1080:px-[100px] screen_1440:px-[0px]">
        <div
          onMouseEnter={() => setActItem("policy_1")}
          className={`${
            actItem === "policy_1" ? styles["policy-hover"] : ""
          }  group flex min-w-[280px] border border-solid border-[transparent]  rounded-[16px] shadow-[0_4px_20px_0_rgba(119,98,170,0.21)]`}
        >
          <Image src={"/images/ggfw_1.png"} alt={""} width={280} height={0} />
          <div
            className={`${
              actItem === "policy_1" ? styles["desc-item"] : ""
            } bg-white-500 screen_1440:opacity-0 flex-1 w-0 overflow-hidden transition-all duration-0 rounded-[16px]`}
          >
            <div className=" px-[28px] pt-6 ">
              <TzTitle level={3} className=" flex justify-between !mb-0">
                <span className="leading-6">政策原文</span> <SeeMore />
              </TzTitle>
              <PolicyTable columns={columns} dataSource={dataSource} />
              <TzTitle level={3} className="text-2xl flex justify-between mt-6">
                <span className="leading-6">政策解读</span> <SeeMore />
              </TzTitle>
              <ScrollAnimationWrapper>
                <motion.div variants={scrollAnimation}>
                  {dataList.map((item, index) => {
                    return (
                      <PublicServicesDes className="mt-3" key={index}>
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
        </div>
        {PolicyData.map((item, index) => {
          return (
            <div
              key={item.key}
              onMouseEnter={() => setActItem(item.key)}
              className={`${
                actItem === item.key ? styles["policy-hover"] : ""
              } group flex min-w-[280px] border border-solid border-[transparent]  rounded-[16px] shadow-[0_4px_20px_0_rgba(119,98,170,0.21)]`}
            >
              <Image src={item.imgUrl} alt={""} width={280} height={0} />

              <div
                className={`${
                  actItem === item.key ? styles["desc-item"] : ""
                } bg-white-500 screen_1440:opacity-0  flex-1 w-0 overflow-hidden transition-all duration-0 rounded-[16px]`}
              >
                <div className="flex flex-col justify-between h-full px-[28px]  pt-[30px] pb-[32px]">
                  <div className="text-desc">{item.desc}</div>
                  <Image
                    src={item.descImgUrl}
                    alt={""}
                    width={480}
                    height={0}
                  ></Image>
                  <TzButton
                    className="!px-[56px] w-fit "
                    shape="round"
                    type="primary"
                    icon={
                      <TzIcon
                        className={"fa-arrow-right text-xs text-white-500"}
                      ></TzIcon>
                    }
                    iconPosition={"end"}
                  >
                    查看详情
                  </TzButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
