"use client";
import { TzForm, TzFormItem, TzInput } from "@/components";
import { TzButton } from "@/components/TzButton";
import TzCard from "@/components/TzCard";
import TzDivider from "@/components/TzDivider";
import TzNextImage from "@/components/TzNextImage";
import TzSelect from "@/components/TzSelect";
import FinanceCard, { FinanceCardProps } from "@/components/UI/FinanceCard";
import Loan from "@/components/UI/Loan";
import StepFlow from "@/components/UI/StepFlow";
import { purposeOp, termOp, selectOp, MarketDataList } from "@/constant";
import { productRecommend } from "@/fetch";
import { dealProduct } from "@/lib";
import { insertAfterOddIndices } from "@/lib/utils";
import { Row, Col } from "antd";
import { useCallback, useEffect, useState } from "react";

export default function User() {
  let infoList = [
    {
      title: "总需求",
      num: "00",
      imgUrl: "/images/zxq.png",
    },
    {
      title: "待受理需求",
      num: "00",
      imgUrl: "/images/dslxq.png",
    },
    {
      title: "总申请",
      num: "00",
      imgUrl: "/images/zsq.png",
    },
    {
      title: "待受理申请",
      num: "00",
      imgUrl: "/images/dslsq.png",
    },
  ];
  let [marketDataList, setMarketDataList] = useState<FinanceCardProps[]>([]);
  let getDom = useCallback((items) => {
    return insertAfterOddIndices(
      items.slice(0, 2).map((item) => {
        return (
          <div className="flex-r-c">
            <TzNextImage src={item.imgUrl} width={60} height={0} />
            <div className="ml-5">
              <div className="text-[#3D5AF5] text-[40px] leading-[40px] h-10">
                {item.num}
                <span className="text-[12px]">笔</span>
              </div>
              <div> {item.title}</div>
            </div>
          </div>
        );
      }),
      <TzDivider type="vertical" style={{ height: "60px" }} />
    );
  }, []);
  let getproductRecommend = () => {
    productRecommend().then((res) => {
      console.log(res);
      res.data = [
        {
          id: 2,
          add_time: 1731893880,
          name: "小额贷款",
          fo_id: 1,
          product_intro: "产品介绍",
          service_object: "服务对象",
          term: 0,
          data_type: 1,
          application_info_enterprise: "",
          application_info: "申请资料",
          application_condition: "申请条件",
          repayment_method: 2,
          application_info_user: "",
          application_form: 1,
          highest_money: 10000,
          rate: "5.6",
          product_type: 2,
          fund_company_intro: "",
          highest_money_unit: 0,
          guarantee_highest_money: "0.0",
          guarantee_form: 0,
          premium_search: 0,
          success_count: 0,
        },
      ];
      setMarketDataList(res.data.map(dealProduct));
    });
  };
  useEffect(() => {
    getproductRecommend();
  }, []);
  return (
    <>
      <div className="flex-r-c">
        <TzCard className="!mr-3 flex-1">
          <div className="flex-r-c !justify-between px-[70px]">
            {getDom(infoList.slice(0, 2))}
          </div>
        </TzCard>
        <TzCard className="flex-1">
          <div className="flex-r-c !justify-between px-[70px]">
            {getDom(infoList.slice(2))}
          </div>
        </TzCard>
      </div>
      <TzCard className="!mt-3">
        <div className="flex-c-c !items-start">
          <div className="mb-[30px] text-[20px]">需求发布</div>
          <StepFlow />
          <TzForm className="!mt-[30px]" colon={false} layout="vertical">
            <Row gutter={[120, 0]}>
              <Col span={12}>
                <TzFormItem label="金额" name={"amount"} className="w-[320px]">
                  <TzInput placeholder="请输入" suffix="万元" />
                </TzFormItem>
              </Col>
              <Col span={12}>
                <TzFormItem label="用途" name={"purpose"} className="w-[320px]">
                  <TzSelect placeholder="请选择" options={purposeOp} />
                </TzFormItem>
              </Col>
              <Col span={12}>
                <TzFormItem label="期限" name={"term"} className="w-[320px]">
                  <TzSelect placeholder="请选择" options={termOp} />
                </TzFormItem>
              </Col>
              <Col span={12}>
                <TzFormItem
                  label="担保方式"
                  name={"collateral"}
                  className="w-[320px]"
                >
                  <TzSelect placeholder="请选择" options={selectOp} />
                </TzFormItem>
              </Col>
            </Row>
          </TzForm>
          <TzButton type={"primary"}>发布</TzButton>
        </div>
      </TzCard>
      <TzCard className="!mt-3">
        <div className="text-[20px]">智能匹配</div>
        <div className="text-[#999] mt-2 mb-3">
          AI智能匹配您可能需要的金融产品
        </div>
        <div className="flex flex-wrap ">
          {marketDataList.map((item, index) => {
            return (
              <div key={index} className="w-1/3 bg-blue-500 p-4">
                <FinanceCard {...item} />
              </div>
            );
          })}
        </div>
      </TzCard>
    </>
  );
}
