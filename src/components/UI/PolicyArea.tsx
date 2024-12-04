"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
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
import { getServicePolicy } from "@/fetch";
import { timeFormat } from "@/lib";

export default function PolicyArea() {
  let [actItem, setActItem] = useState("policy_1");
  let [dataSource, setDataSource] = useState([]);
  let [dataList, setDataList] = useState([]);
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
      dataIndex: "add_time",
      key: "time",
      render: (text, row) => (
        timeFormat(text,'YYYY-MM-DD')
      ),
    },
  ];
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const router = useRouter();
  let getServicePolicyFn = useCallback(async () => {
    let res: any = await getServicePolicy({
      page: 1,
      limit: 5,
      area_type: 1,
      keyword: "",
      body_type: 1,
    });
    setDataSource(res.dataList);
    let res1: any = await getServicePolicy({
      page: 1,
      limit: 2,
      area_type: 1,
      keyword: "",
      body_type: 2,
    });
    setDataList(res1.dataList);
  }, []);
  useEffect(() => {
    getServicePolicyFn();
  }, [getServicePolicyFn]);
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
                    router.push("/policy-services?body_type=1");
                  }}
                />
              </TzTitle>
              <PolicyTable columns={columns} dataSource={dataSource} />
              <TzTitle level={3} className="text-2xl flex justify-between mt-6">
                <span className="leading-6">政策解读</span> <SeeMore 
                  onClick={() => {
                    router.push("/policy-services?body_type=2");
                  }}/>
              </TzTitle>
              <ScrollAnimationWrapper>
                <motion.div variants={scrollAnimation}>
                  {dataList.map((item, index) => {
                    return (
                      <PublicServicesDes className="mt-3" key={index}>
                        <div className="flex flex-col w-[100%]">
                          <span className="text-base mb-1 truncate ">{item.title}</span>
                          <TzParagraph
                            ellipsis={true}
                            className="text-xs text-[#999] !mb-0"
                          >
                            {item.summary}
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
