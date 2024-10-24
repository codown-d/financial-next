"use client";
import { TzInput, TzForm, TzFormItem } from "@/components";
import { TzButton } from "@/components/TzButton";
import TzCard from "@/components/TzCard";
import TzDivider from "@/components/TzDivider";
import TzIcon from "@/components/TzIcon";
import { TzConfirm } from "@/components/TzModal";
import TzTabs from "@/components/TzTabs";
import DataTypeCom from "@/components/UI/DataTypeCom";
import DataTypeTitleCom from "@/components/UI/DataTypeTitleCom";
import DescInfo from "@/components/UI/DescInfo";
import DescMethod from "@/components/UI/DescMethod";
import LogoInfo from "@/components/UI/LogoInfo";
import Title from "@/components/UI/Title";
import { ProductInfo } from "@/constant";
import { Form, Segmented, Space } from "antd";
import Image from "next/image";
import { useMemo, useState } from "react";
import TzSegmented from "@/components/TzSegmented";
import ProductApplication from "./ProductApplication";
import useApplicationAction from "../hooks";

export default function SmallLoans() {
  let productInfo = ProductInfo;
  let [segmentedValue, setSegmentedValue] = useState("qy");
  let { logo, imgUrl, title, dataType, amount, guaranteeMethod, location } =
    productInfo;
  let list = [
    "贷款业务应符合国家信贷政策和监管要求，不得为地方政府（及地方融资平台）提供贷款担保",
    "贷款天数不超过一年",
    "贷款业务应为承办银行确认的经营性担保贷款，并在借款合同注明贷款用途",
    "贷款发放前承办银行需要查询借款人的人行征信信息，借款人需符合承办银行准入标准（在保合作业务因债务人到期不能清偿，以借新还旧或无还本续贷等贷款重组方式缓释风险并报送融资担保体系的，不适用本条）",
    "首次贷款业务不得为展期或借新还旧项目",
  ];
  let getSegmentedDom = useMemo(() => {
    if (segmentedValue === "qy") {
      let arr = [
        "股东：个人简介、身份证、户口本、结婚证、征信报告、半年银行流水、产调抵押物",
        "担保人/抵押物：身份信息、产调、征信报告、价值评估表",
        "经营性资料：企业基础资料证照一套、企业简介章程、征信、产调、主要交易账户半年银行流水、近三年完整年度财务报表及纳税申报表、主要上下游经营合同等",
      ];
      return (
        <DescInfo title={"申请资料"}>
          <div className="text-[#666]">
            {arr.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`relative before:content-[attr(data-index)] before:mr-2 before:font-bold`}
                  data-index={"0" + index}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </DescInfo>
      );
    } else {
      let arr = [
        "股东：个人简介、身份证、户口本、结婚证、征信报告、半年银行流水、产调抵押物",
        "担保人/抵押物：身份信息、产调、征信报告、价值评估表",
        "经营性资料：企业基础资料证照一套、企业简介章程、征信、产调、主要交易账户半年银行流水、近三年完整年度财务报表及纳税申报表、主要上下游经营合同等",
      ];
      return (
        <DescInfo title={"申请资料"}>
          <div className="text-[#666]">
            {arr.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`relative before:content-[attr(data-index)] before:mr-2 before:font-bold`}
                  data-index={"0" + index}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </DescInfo>
      );
    }
  }, [segmentedValue]);
  let { submit, success, fail } = useApplicationAction();
  const items = [
    {
      key: "1",
      label: "类型",
      children: "自然人",
    },
    {
      key: "2",
      label: "公司名称/姓名",
      children: "王小明",
    },
    {
      key: "3",
      label: "证件号码",
      children: "000000000000000000",
    },
    {
      key: "4",
      label: "申请金额",
      children: "500,000元",
    },
    {
      key: "5",
      label: "申请期限",
      children: "36个月",
    },

    {
      key: "6",
      label: "反担保措施",
      children: "抵押",
    },

    {
      key: "6",
      label: "联系方式",
      children: "180 0000 0000",
    },
  ];
  return (
    <>
      <TzCard
        className="flex-1 w-full"
        styles={{ body: { padding: "30px 0px" } }}
      >
        <div className="flex">
          <LogoInfo
            size="large"
            logo={logo}
            logoUrl={imgUrl}
            className="w-[184px]"
          />
          <div className="flex flex-row border-l-[1px] flex-1 border-dashed border-[#EEEEEE] pl-[50px]">
            <div className="flex flex-col mr-9">
              <div className="flex">
                <DataTypeTitleCom
                  dataType={dataType}
                  amount={amount}
                  title={title}
                />
                <span className="ml-5 flex items-center text-[#3D5AF5]">
                  <TzIcon className={"fa-location-dot text-sm mr-[6px]"} />
                  {location}
                </span>
              </div>

              <div className="mt-5 flex">
                <DescMethod
                  method={"担保方式"}
                  className="mr-3"
                  desc={guaranteeMethod.join("/")}
                />
                <DescMethod
                  method={"还款方式"}
                  desc={"按周期付息,到期还本/分期还款/一次性还本付息"}
                />
              </div>
              <div className="flex mt-10">
                <DataTypeCom {...productInfo} />
              </div>
            </div>
          </div>
          <div className="w-[245px] flex flex-col justify-center items-center">
            <TzButton
              type={"primary"}
              shape={"round"}
              onClick={() => {
                fail();
                // submit().then(res=>{
                //   console.log(123)
                // })
              }}
            >
              立即申请
            </TzButton>
            <span className="text-xs font-bold mt-5 text-[#999999]">
              84,972 笔需求对接成功
            </span>
          </div>
        </div>
      </TzCard>
      <TzCard className="flex-1 w-full !mt-3">
        <DescInfo title={"服务对象"}>
          <div className="text-[#666]">三农、小微企业、公职人员、个体商户</div>
          <TzDivider />
        </DescInfo>
        <DescInfo title={"产品介绍"}>
          <div className="text-[#666]">
            “蜀担快贷—小微增额保”是由四川省信用再担保公司、我公司等省内12家担保公司集合体、中国工商银行股份有限公司四川省分行三方合作的一个批量担保产品，该产品在共担风险、事先锁定总体担保代偿率上限的前提下，由承办银行负责对贷款业务进行审批、放款和贷后管理，融资担保体系全部成员都不再进行贷款担保审核。由承办担保机构在承办银行贷款发放时直接提供担保，省再担保公司对承办担保机构承保的项目提供批量再担保。
          </div>
          <TzDivider />
        </DescInfo>
        <DescInfo title={"申请条件"}>
          <div className="text-[#666]">
            {list.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`relative before:content-[attr(data-index)] before:mr-2 before:font-bold`}
                  data-index={"0" + index}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </DescInfo>
      </TzCard>
      <TzCard
        className="flex-1 w-full !mt-3"
        title={
          <TzSegmented
            onChange={(val: string) => setSegmentedValue(val)}
            options={[
              {
                label: "企业",
                value: "qy",
                icon: <TzIcon className={"fa-building text-sm"} />,
              },
              {
                label: "个人",
                value: "gr",
                icon: <TzIcon className={"fa-user text-sm"} />,
              },
            ]}
          />
        }
      >
        {getSegmentedDom}
      </TzCard>
    </>
  );
}
