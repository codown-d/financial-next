"use client";
import { useCallback, useMemo, useState } from "react";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { motion } from "framer-motion";
import PolicyTable from "./PolicyTable";
import { TzParagraph, TzTitle } from "../TzTypography";
import TitleBg from "./TitleBg";
import Image from "next/image";
import SeeMore from "./SeeMore";
import PublicServicesDes from "./PublicServicesDes";
import { TzButton } from "../TzButton";
import TzIcon from "../TzIcon";
import { PolicyData } from "@/constant";
import styles from "./ui.module.scss";
import { useRouter } from "next/navigation";
import TzNextImage from "../TzNextImage";

export default function PolicyArea() {
  let [actItem, setActItem] = useState("policy_1");
  let columns = [
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
      render: (text, row) => (
        <div
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            width: "320px",
          }}
        >
          {text}
        </div>
      ),
    },
    {
      title: "时间",
      dataIndex: "time",
      key: "time",
    },
  ];
  let dataSource = [
    {
      title:
        "财政部 国家发展改革委 关于继续执行部分行政事业性收费、政府性基金优惠政策的公告",
      time: "2023-09-21",
      id: 0,
    },
    {
      title: "国家林业和草原局2023年第13号公告",
      time: "2023-04-25",
      id: 1,
    },
    {
      title:
        " 国务院办公厅转发国家发展改革委等部门 关于清理规范城镇供水供电供气供暖行业收费促进行业高质量发展意见的通知 ",
      time: "2020-12-23",
      id: 2,
    },
    {
      title:
        "四川省财政厅 四川省发展和改革委员会  四川省水利厅中国人民银行成都分行 关于印发《四川省水土保持补偿费征收使用管理实施办法》的通知  ",
      time: "2014-05-21",
      id: 3,
    },
    {
      title: "关于延续实施失业保险援企稳岗政策的通知",
      time: "2024-07-01",
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
  const router = useRouter();
  return (
    <>
      <TitleBg
        title={"企业公共服务"}
        bg={"/images/corporatepublicser.png"}
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
                <span className="leading-6">政策原文</span>{" "}
                <SeeMore
                  onClick={() => {
                    router.push("/policy-services");
                  }}
                />
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
                  <TzNextImage src={item.descImgUrl} width={480} height={0} />
                  <TzButton
                    className="!px-[56px] w-fit "
                    shape="round"
                    type="primary"
                    icon={
                      <TzIcon
                        className={"fa-arrow-right text-xs text-white-500"}
                      ></TzIcon>
                    }
                    onClick={() => {
                      router.push(item.key);
                    }}
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
