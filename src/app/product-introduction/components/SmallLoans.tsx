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
import { useEffect, useMemo, useState } from "react";
import TzSegmented from "@/components/TzSegmented";
import useApplicationAction from "../hooks";
import CountUp from "react-countup";
import { FinanceItemProps, FinancingEntityEmu } from "@/fetch/definition";
import { find, isArray, keys } from "lodash";
import { DescriptionsProps, Form, message } from "antd";
import { formLabelObj, getFormLabelList } from "../hooks/const";
import { useDataType, useGetLoanDetail, useRepaymentMethod } from "@/hooks";
import { useGlobalContext } from "@/hooks/GlobalContext";

export default function SmallLoans(props: { id: string }) {
  let [segmentedValue, setSegmentedValue] = useState(
    FinancingEntityEmu.Enterprise
  );
  let [items, setItems] = useState<DescriptionsProps["items"]>([]);
  let { dataInfo } = useGetLoanDetail(props);
  let { dataTypeLabel } = useDataType(dataInfo);
  let { repaymentMethodLabel } = useRepaymentMethod(dataInfo);
  let [form] = Form.useForm();
  let getSegmentedDom = useMemo(() => {
    if(dataInfo?.application_form==1){
      return dataInfo?.application_info;
    }else if (segmentedValue === FinancingEntityEmu.Personal) {
      return dataInfo?.application_info_user;
    } else {
      return dataInfo?.application_info_enterprise;
    }
  }, [dataInfo, segmentedValue]);
  let { Submit, Success, Fail, setSubmitVisible, setSuccessVisible } =
    useApplicationAction();
  let { userInfo } = useGlobalContext();
  let getOpt = useMemo(() => {
    let arr = [
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
    ].filter((item) => {
      if (dataInfo?.application_form == 1) return true;
      else {
        return item.value == dataInfo?.application_form||dataInfo?.application_form==4;
      }
    });
    setSegmentedValue(arr[0]?.value);
    return arr;
  }, [dataInfo]);
  return (
    <>
      <Submit
        form={form}
        product_id={dataInfo?.id}
        product_type={dataInfo?.productType}
        type={"业务申请"}
        callback={(val) => {
          setItems(getFormLabelList(val));
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
            logo={dataInfo?.financial_organs?.organs_name}
            logoUrl={dataInfo?.financial_organs?.logo}
            className="w-[184px]"
          />
          <div className="flex flex-row border-l-[1px] flex-1 border-dashed border-[#EEEEEE] pl-[50px]">
            <div className="flex flex-col mr-9">
              <div className="flex">
                <DataTypeTitleCom
                  dataType={dataInfo?.dataType}
                  amount={dataInfo?.amount}
                  name={dataInfo?.name}
                  productType={dataInfo?.productType}
                />
                <span className="ml-5 flex items-start text-[#3D5AF5]">
                  <TzIcon className={"fa-location-dot text-sm mr-[6px] mt-1"} />
                  {dataInfo?.financial_organs.area_desc}
                </span>
              </div>

              <div className="mt-5 flex">
                <DescMethod
                  method={"担保方式"}
                  className="mr-3"
                  desc={dataTypeLabel}
                />
                <DescMethod method={"还款方式"} desc={repaymentMethodLabel} />
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
                if (
                  userInfo.verify_status == 3 ||
                  userInfo.enterprise_verify_status == 3
                ) {
                  setSubmitVisible(true);
                } else {
                  message.error("暂无权限请实名之后申请！");
                }
              }}
            >
              立即申请
            </TzButton>
            <span className="text-xs font-bold mt-5 text-[#999999]">
              <CountUp end={dataInfo?.success_count} /> 笔需求对接成功
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
            {isArray(dataInfo?.applicationConditions)
              ? dataInfo?.applicationConditions?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`relative before:content-[attr(data-index)] before:mr-2 before:font-bold`}
                      data-index={"0" + (index + 1)}
                    >
                      {item}
                    </div>
                  );
                })
              : dataInfo?.applicationConditions}
          </div>
        </DescInfo>
      </TzCard>
      <TzCard
        className="flex-1 w-full !mt-3"
        title={
          <TzSegmented
          value={segmentedValue}
            onChange={(val: FinancingEntityEmu) => setSegmentedValue(val)}
            options={getOpt}
          />
        }
      >
        {getSegmentedDom}
      </TzCard>
    </>
  );
}
