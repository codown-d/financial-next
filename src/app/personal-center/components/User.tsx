import { TzForm, TzFormItem, TzInput } from "@/components";
import { TzButton } from "@/components/TzButton";
import TzCard from "@/components/TzCard";
import TzDivider from "@/components/TzDivider";
import TzNextImage from "@/components/TzNextImage";
import TzSelect from "@/components/TzSelect";
import Loan from "@/components/UI/Loan";
import StepFlow from "@/components/UI/StepFlow";
import {
  purposeOp,
  termOp,
  selectOp,
  EmergencyRefinancing,
  EquityFinancing,
  Microloans,
  MarketDataList,
} from "@/constant";
import { insertAfterOddIndices } from "@/lib/utils";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Row, Col } from "antd";
import { title } from "process";
import { useCallback } from "react";

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
  return (
    <AntdRegistry>
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
          <TzForm className="mt-[30px]" colon={false} layout="vertical">
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
      <TzCard className="mt-3">
        <div className="text-[20px]">智能匹配</div>
        <div className="text-[#999] mt-2">AI智能匹配您可能需要的金融产品</div>
        <div>
          <Loan items={MarketDataList} />
        </div>
      </TzCard>
    </AntdRegistry>
  );
}
