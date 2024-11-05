"use client";
import { TzButton } from "@/components/TzButton";
import TzCard from "@/components/TzCard";
import TzDivider from "@/components/TzDivider";
import TzIcon from "@/components/TzIcon";
import DataTypeCom from "@/components/UI/DataTypeCom";
import DataTypeTitleCom from "@/components/UI/DataTypeTitleCom";
import DescInfo from "@/components/UI/DescInfo";
import DescMethod from "@/components/UI/DescMethod";
import LogoInfo from "@/components/UI/LogoInfo";
import { collateralOp, MarketDataList, MicroloansOp, selectOp } from "@/constant";
import { useMemo, useState } from "react";
import TzSegmented from "@/components/TzSegmented";
import useApplicationAction from "../hooks";
import CountUp from "react-countup";
import { FinancingEntityEmu } from "@/fetch/definition";
import { find, keys } from "lodash";
import { DescriptionsProps, Form } from "antd";
import { formLabelObj } from "../hooks/const";

export default function SmallLoans(props: { id: string }) {
  let [segmentedValue, setSegmentedValue] = useState(
    FinancingEntityEmu.Enterprise
  );
  let dataInfo = useMemo(() => {
    return find(MarketDataList, (item) => item.id == props.id);
  }, [props.id]);
  let getSegmentedDom = useMemo(() => {
    if (segmentedValue === FinancingEntityEmu.Enterprise) {
      let arr = [
        "股东：个人简介、身份证、户口本、结婚证、征信报告、半年银行流水、产调抵押物。",
        "担保人/抵押物：身份信息、产调、征信报告、价值评估表。",
        "经营性资料：企业基础资料证照一套、企业简介章程、征信、产调、主要交易账户半年银行流水、近三年完整年度财务报表及纳税申报表、主要上下游经营合同等。",
      ];
      return (
        <DescInfo title={"申请资料"}>
          <div className="text-[#666]">
            {arr.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`relative before:content-[attr(data-index)] before:mr-2 before:font-bold`}
                  data-index={"0" + (index + 1)}
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
        "借款人及担保人：身份证、户口本、结离婚证、征信报告、半年银行流水、工作证明、产调。",
        "担保人/担保人/抵押物：身份信息、产调、征信报告、价值评估表。",
        "经营性资料：经营项目情况（项目简介、规模、经营及盈利模式、前期投入及后期盈利目标等）、经营场所的买卖协议（付款凭证）、营业执照、上下游经营合同等。",
      ];
      return (
        <DescInfo title={"申请资料"}>
          <div className="text-[#666]">
            {arr.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`relative before:content-[attr(data-index)] before:mr-2 before:font-bold`}
                  data-index={"0" + (index + 1)}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </DescInfo>
      );
    }
  }, [segmentedValue]); let {
    Submit,
    Success,
    Fail,
    setSubmitVisible,
    setSuccessVisible,
    setFailVisible,
  } = useApplicationAction();
  let [form] = Form.useForm();
  let [items, setItems] = useState<DescriptionsProps["items"]>([]);

  return (
    <>
       <Submit
        form={form}
        type={"业务申请"}
        callback={(val) => {
          let items = keys(val).reduce((pre, item) => {
            let text = val[item];
            if ("amount" === item) {
              text = `${text} 万元`;
            } else if ("deadline" === item) {
              text = `${text} 个月`;
            } else if ("type" === item) {
              text = find(MicroloansOp, (ite) => ite.value === text)?.label;
            } else if ("measure" === item) {
              text = find(selectOp, (ite) => ite.value === text)?.label;
            }
            pre.push({
              key: item,
              label: formLabelObj[item],
              children: text,
            });
            return pre;
          }, []);
          setItems(items);
          setSuccessVisible(true);
        }}
      />
      <Success items={items} />
      <Fail />
      <TzCard
        className="flex-1 w-full"
        styles={{ body: { padding: "30px 0px" } }}
      >
        <div className="flex">
          <LogoInfo
            size="large"
            logo={dataInfo?.companyName}
            logoUrl={dataInfo?.logoUrl}
            className="w-[184px]"
          />
          <div className="flex flex-row border-l-[1px] flex-1 border-dashed border-[#EEEEEE] pl-[50px]">
            <div className="flex flex-col mr-9">
              <div className="flex">
                <DataTypeTitleCom
                  dataType={dataInfo?.dataType}
                  amount={dataInfo?.amount}
                  name={dataInfo?.name}
                  prodType={dataInfo?.prodType}
                />
                <span className="ml-5 flex items-center text-[#3D5AF5]">
                  <TzIcon className={"fa-location-dot text-sm mr-[6px]"} />
                  {dataInfo?.location}
                </span>
              </div>

              <div className="mt-5 flex">
                <DescMethod
                  method={"担保方式"}
                  className="mr-3"
                  desc={collateralOp
                    .reduce((pre: any[], item) => {
                      if (dataInfo?.guaranteeMethod.includes(item.value)) {
                        pre?.push?.(item.label);
                      }
                      return pre;
                    }, [])
                    .join("/")}
                />
                <DescMethod
                  method={"还款方式"}
                  desc={dataInfo?.repaymentMethod.join("/")}
                />
              </div>
              <div className="flex mt-10">
                <DataTypeCom {...dataInfo} />
              </div>
            </div>
          </div>
          <div className="w-[245px] flex flex-col justify-center items-center">
            <TzButton
              type={"primary"}
              shape={"round"}
              onClick={() => {
                setSubmitVisible(true);
              }}
            >
              立即申请
            </TzButton>
            <span className="text-xs font-bold mt-5 text-[#999999]">
              <CountUp end={dataInfo?.dealOrder} /> 笔需求对接成功
            </span>
          </div>
        </div>
      </TzCard>
      <TzCard className="flex-1 w-full !mt-3">
        <DescInfo title={"服务对象"}>
          <div className="text-[#666]">{dataInfo?.serviceObjects}</div>
          <TzDivider />
        </DescInfo>
        <DescInfo title={"产品介绍"}>
          <div className="text-[#666]">{dataInfo?.productIntroduction}</div>
          <TzDivider />
        </DescInfo>
        <DescInfo title={"申请条件"}>
          <div className="text-[#666]">
            {dataInfo?.applicationConditions.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`relative before:content-[attr(data-index)] before:mr-2 before:font-bold`}
                  data-index={"0" + (index + 1)}
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
            onChange={(val: FinancingEntityEmu) => setSegmentedValue(val)}
            options={[
              {
                label: "企业",
                value: FinancingEntityEmu.Enterprise,
                icon: <TzIcon className={"fa-building text-sm"} />,
              },
              {
                label: "个人",
                value: FinancingEntityEmu.Personal,
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
