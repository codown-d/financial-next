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
import { financeAdd, productRecommend } from "@/fetch";
import { useGlobalContext } from "@/hooks/GlobalContext";
import { dealProduct } from "@/lib";
import { insertAfterOddIndices } from "@/lib/utils";
import { Row, Col, message, Form } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function User() {
  let { userInfo ,financeApply} = useGlobalContext();
  let [formIns] = Form.useForm();
  let infoList = useMemo(()=>([
    {
      title: "总需求",
      num: financeApply?.apply_count,
      imgUrl: "/images/zxq.png",
    },
    {
      title: "待受理需求",
      num: financeApply?.apply_count_not,
      imgUrl: "/images/dslxq.png",
    },
    {
      title: "总申请",
      num: financeApply?.finance_count,
      imgUrl: "/images/zsq.png",
    },
    {
      title: "待受理申请",
      num: financeApply?.finance_count_not,
      imgUrl: "/images/dslsq.png",
    },
  ]),[financeApply])
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
  let [marketDataList, setMarketDataList] = useState<FinanceCardProps[]>([]);
  let getproductRecommend = () => {
    productRecommend().then((res) => {
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
          <TzForm
            className="!mt-[30px]"
            colon={false}
            layout="vertical"
            form={formIns}
          >
            <Row gutter={[120, 0]}>
              <Col span={12}>
                <TzFormItem
                  label="金额"
                  name={"apply_money"}
                  className="w-[320px]"
                  rules={[{ required: true }]}
                >
                  <TzInput placeholder="请输入" suffix="万元" />
                </TzFormItem>
              </Col>
              <Col span={12}>
                <TzFormItem
                  label="用途"
                  name={"purpose"}
                  className="w-[320px]"
                  rules={[{ required: true }]}
                >
                  <TzSelect placeholder="请选择" options={purposeOp} />
                </TzFormItem>
              </Col>
              <Col span={12}>
                <TzFormItem
                  label="期限"
                  name={"term"}
                  className="w-[320px]"
                  rules={[{ required: true }]}
                >
                  <TzSelect placeholder="请选择" options={termOp} />
                </TzFormItem>
              </Col>
              <Col span={12}>
                <TzFormItem
                  label="担保方式"
                  name={"guarantee_method"}
                  className="w-[320px]"
                  rules={[{ required: true }]}
                >
                  <TzSelect placeholder="请选择" options={selectOp} />
                </TzFormItem>
              </Col>
            </Row>
          </TzForm>
          <TzButton
            type={"primary"}
            onClick={() => {
              console.log(userInfo);
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
          >
            发布
          </TzButton>
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
              <div key={index} className="screen_1280:w-1/3 w-1/2 bg-blue-500 p-4 ">
                <FinanceCard {...item} />
              </div>
            );
          })}
        </div>
      </TzCard>
    </>
  );
}
