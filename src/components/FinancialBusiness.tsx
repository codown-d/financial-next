"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import TitleBg from "./UI/TitleBg";
import TzCard from "./TzCard";
import TzForm, { TzFormItem } from "./TzForm";
import TzInput from "./TzInput";
import TzSelect from "./TzSelect";
import { Col, Form, message, Row } from "antd";
import { TzButton } from "./TzButton";
import StepFlow from "./UI/StepFlow";
import { purposeOp, selectOp, termOp } from "@/constant";
import SwiperBanner from "./UI/SwiperBanner";
import { useRouter } from "next/navigation";
import { FinanceDataTypeEmu, InstitutionTypeEmu } from "@/fetch/definition";
import { useGlobalContext } from "@/hooks/GlobalContext";
import { financeAdd } from "@/fetch";
import TzNextImage from "./TzNextImage";
import SmartMatch from "./UI/SmartMatch";

const FinancialBusiness = (props) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  let data = [
    {
      name: "贷款",
      desc: "借入资金并按期偿还",
      number: "390",
      key: FinanceDataTypeEmu.Microloans,
      icon: "fa-user",
      img: "/images/daikuan.png",
      path: "/small-loan",
    },
    {
      name: "担保",
      desc: "第三方保证",
      number: "20",
      key: FinanceDataTypeEmu.FinanceGuarantee,
      icon: "fa-briefcase",
      img: "/images/danbao.png",
      path: "/performance-bond",
    },
    {
      name: "转贷",
      desc: "原有贷款转移",
      number: "50",
      key: FinanceDataTypeEmu.EquityFinancing,
      icon: "fa-coins",
      img: "/images/zhuandai.png",
      path: "/emergency-refinancing",
    },

    {
      name: "保函",
      desc: "银行书面付款保证",
      number: "50",
      key: FinanceDataTypeEmu.ElectronicGuarantee,
      icon: "fa-clipboard",
      img: "/images/baohan.png",
      path: "/ele-bond",
    },
    {
      name: "保险",
      desc: "风险保障",
      number: "50",
      key: FinanceDataTypeEmu.Insurance,
      icon: "fa-clipboard",
      img: "/images/baoxian.png",
      path: "/advance-payment-bond",
    },
    {
      name: "投资",
      desc: "资金增值",
      number: "50",
      key: FinanceDataTypeEmu.EmergencyRefinancing,
      icon: "fa-clipboard",
      img: "/images/touzi.png",
      path: "/equity-financing",
    },
    {
      name: "政策",
      desc: "实时政策快速了解",
      number: "50",
      key: "policy",
      icon: "fa-clipboard",
      img: "/images/zhengce.png",
      path: "/policy-services",
    },
    {
      name: "服务",
      desc: "融资服务丨增信服务",
      number: "50",
      key: "investment",
      icon: "fa-clipboard",
      img: "/images/fuwu.png",
      path: "/equity-investment",
    },
  ];
  const router = useRouter();
  let { userInfo } = useGlobalContext();
  let [formIns] = Form.useForm();
  let [open, setOpen] = useState(false);
  return (
    <>
      <motion.div variants={scrollAnimation}>
        <SwiperBanner />
      </motion.div>
      <div className="max-w-screen-lg mt-24 mx-auto" id="about">
        <TitleBg title="服务直通车" bg="/images/service-eirect-expre.png" />
        <ScrollAnimationWrapper className="grid grid-cols-4 screen_1440:grid-cols-4">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="flex  justify-center  mb-[42px]"
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <TzCard
                className="flex flex-col items-center hover:bg-[#F7F7F7] w-[310px]"
                hoverable
                bordered={false}
                onClick={() => {
                  item.path.indexOf("/") == 0
                    ? router.push(`${item.path}?institution=${item.key}`)
                    : null;
                }}
                styles={{ body: { padding: "26px 30px", width: "100%" } }}
              >
                <div className="flex items-center">
                  <Image alt="example" src={item.img} width={88} height={88} />
                  <div className="ml-[30px]">
                    <p className="text-4">{item.name}</p>
                    <p className="text-4 text-[#999]">{item.desc}</p>
                  </div>
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
          <div className="flex ">
            <TzCard
              styles={{ body: { padding: "17px 92px 32px" } }}
              className="shadow shadow-red-500 md:shadow-xl w-[896px]"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="text-[32px] text-center ">
                  <Image
                    src={"/images/yjrz.png"}
                    width={123}
                    height={0}
                    alt={""}
                  />
                </div>
                <div className="text-[14px] text-center mb-6 text-[#999]">
                  一键触达，快速响应
                </div>
                <TzForm
                  form={formIns}
                  labelCol={{ flex: "68px" }}
                  colon={false}
                  labelAlign={"right"}
                >
                  <Row gutter={[76, 16]}>
                    <Col span={12}>
                      <TzFormItem
                        label="金额"
                        name={"apply_money"}
                        rules={[{ required: true }]}
                      >
                        <TzInput placeholder="请输入" suffix="万元" />
                      </TzFormItem>
                    </Col>
                    <Col span={12}>
                      <TzFormItem
                        label="用途"
                        name={"purpose"}
                        rules={[{ required: true }]}
                      >
                        <TzSelect placeholder="请选择" options={purposeOp} />
                      </TzFormItem>
                    </Col>
                    <Col span={12}>
                      <TzFormItem
                        label="期限"
                        name={"term"}
                        rules={[{ required: true }]}
                      >
                        <TzSelect placeholder="请选择" options={termOp} />
                      </TzFormItem>
                    </Col>
                    <Col span={12}>
                      <TzFormItem
                        label="担保方式"
                        name={"guarantee_method"}
                        rules={[{ required: true }]}
                      >
                        <TzSelect placeholder="请选择" options={selectOp} />
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
                  onClick={() => {
                    if (!userInfo) {
                      return message.error("请登录账号！");
                    } else {
                      formIns.validateFields().then((val) => {
                        financeAdd(val).then((res) => {
                          if (res.code == 200) {
                            message.success("发布成功！");
                          } else {
                            // message.success("发布失败！");
                          }
                        });
                      });
                    }
                  }}
                  shape="round"
                >
                  快速发布
                </TzButton>
                <StepFlow />
              </div>
            </TzCard>
            <div className="w-[360px] relative ml-4 flex items-center">
              <TzNextImage
                src={"/images/znpp.png"}
                width={340}
                height={0}
                style={{
                  boxShadow: "0 0 15px 5px rgba(0, 0, 0, 0.3)",
                  borderRadius: "16px",
                }}
              />
              <TzButton
                onClick={() => setOpen(true)}
                className="text-[16px] font-bold !w-[180px] !text-white-500 !absolute bottom-[48px] left-[90px] !bg-gradient-to-l !from-[#7B9DF1] !to-[#3C5BF6] !shadow-[0px_4px_10px_rgba(14,38,162,0.42)] border-2 border-white"
                shape={"round"}
              >
                智能匹配
              </TzButton>
            </div>
            <div className="w-[360px] relative ml-4 flex items-center py-[10px]">
              <img
                src={"/images/aikefu.webp"}
                style={{
                  width: "100%",
                  height: "100%",
                  boxShadow: "0 0 15px 5px rgba(0, 0, 0, 0.3)",
                  borderRadius: "16px",
                }}
              />
              <TzButton
                onClick={() => {
                  window.open(
                    "http://219.151.183.115:3001/chat/lkVEVPzW0dD8OcEZ",
                    "_blank"
                  );
                }}
                className="text-[16px] font-bold !w-[180px] !text-white-500 !absolute bottom-[48px] left-[90px] !bg-gradient-to-l !from-[#7B9DF1] !to-[#3C5BF6] !shadow-[0px_4px_10px_rgba(14,38,162,0.42)] border-2 border-white"
                shape={"round"}
              >
                智能客服
              </TzButton>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <SmartMatch open={open} setOpen={setOpen} />
    </>
  );
};

export default FinancialBusiness;
