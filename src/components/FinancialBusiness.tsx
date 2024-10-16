"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Title from "./UI/Title";
import TzCard from "./TzCard";
import TzForm, { TzFormItem } from "./TzForm";
import TzInput from "./TzInput";
import TzSelect from "./TzSelect";
import { Col, Row } from "antd";
import { TzButton } from "./TzButton";
import StepFlow from "./UI/StepFlow";
import { collateralOp, purposeOp, termOp } from "@/constant";
import SwiperBanner from "./UI/SwiperBanner";

const FinancialBusiness = (props) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  let data = [
    {
      name: "贷款",
      number: "390",
      icon: "fa-user",
      img: "/images/daikuan.png",
    },
    {
      name: "担保",
      number: "20",
      icon: "fa-briefcase",
      img: "/images/danbao.png",
    },
    {
      name: "转贷",
      number: "50",
      icon: "fa-coins",
      img: "/images/zhuandai.png",
    },

    {
      name: "保函",
      number: "50",
      icon: "fa-clipboard",
      img: "/images/baohan.png",
    },
    {
      name: "保险",
      number: "50",
      icon: "fa-clipboard",
      img: "/images/baoxian.png",
    },
    {
      name: "投资",
      number: "50",
      icon: "fa-clipboard",
      img: "/images/touzi.png",
    },
    {
      name: "政策",
      number: "50",
      icon: "fa-clipboard",
      img: "/images/zhengce.png",
    },
    {
      name: "服务",
      number: "50",
      icon: "fa-clipboard",
      img: "/images/fuwu.png",
    },
  ];

  return (
    <>
      <motion.div variants={scrollAnimation}>
        <SwiperBanner />
      </motion.div>
      <div className="max-w-screen-lg mt-24 mx-auto" id="about">
        <Title title="服务直通车" bg="/images/service-eirect-expre.png" />
        <ScrollAnimationWrapper className="grid grid-cols-4 screen_1440:grid-cols-8">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="flex  justify-center  mb-4"
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <TzCard
                className="flex flex-col items-center hover:bg-[#F7F7F7] w-[152px]"
                hoverable
                bordered={false}
              >
                <div className="flex flex-col">
                  <Image alt="example" src={item.img} width={88} height={88} />
                  <p className="text-4 mt-3 text-center">{item.name}</p>
                </div>
              </TzCard>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
      </div>
      <ScrollAnimationWrapper className="h-[480px] bg-[url('/images/fwztc-bg.png')] bg-[length:100%_100%] bg-bottom bg-no-repeat mt-[54px]">
        <motion.div
          className="flex justify-center w-full "
          variants={scrollAnimation}
        >
          <TzCard
            styles={{ body: { padding: "17px 92px 32px" } }}
            className="shadow shadow-red-500 md:shadow-xl w-[896px]"
          >
            <div className="flex flex-col items-center justify-center">
              <div className="text-[32px] text-center ">
                <Image src={"/images/yjrz.png"} width={123} height={0}alt={""}/></div>
              <div className="text-[14px] text-center mb-6 text-[#999]">
                一键触达，快速响应
              </div>
              <TzForm
                labelCol={{ flex: "68px" }}
                colon={false}
                labelAlign={"right"}
              >
                <Row gutter={[76, 16]}>
                  <Col span={12}>
                    <TzFormItem label="金额" name={'amount'}>
                      <TzInput placeholder="请输入" />
                    </TzFormItem>
                  </Col>
                  <Col span={12}>
                    <TzFormItem label="用途" name={'purpose'}>
                      <TzSelect placeholder="请选择" options={purposeOp} />
                    </TzFormItem>
                  </Col>
                  <Col span={12}>
                    <TzFormItem label="期限" name={'term'}>
                      <TzSelect placeholder="请选择" options={termOp} />
                    </TzFormItem>
                  </Col>
                  <Col span={12}>
                    <TzFormItem label="担保方式" name={'collateral'}>
                      <TzSelect placeholder="请选择" options={collateralOp} />
                    </TzFormItem>
                  </Col>
                </Row>
              </TzForm>
              <TzButton
                className="mt-1 mb-5 !py-[10px] !px-[68px] leading-[14px] !text-white-500"
                style={{
                  background:
                    "linear-gradient( 270deg, #7B9DF1 0%, #3C5BF6 100%)",
                }}
                shape="round"
              >
                快速发布
              </TzButton>
              <StepFlow />
            </div>
          </TzCard>
        </motion.div>
      </ScrollAnimationWrapper>
    </>
  );
};

export default FinancialBusiness;
