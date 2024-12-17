"use client";
import { TzButton } from "@/components/TzButton";
import TzCard from "@/components/TzCard";
import TzDivider from "@/components/TzDivider";
import TzIcon from "@/components/TzIcon";
import DataTypeCom from "@/components/UI/DataTypeCom";
import DescInfo from "@/components/UI/DescInfo";
import DescMethod from "@/components/UI/DescMethod";
import LogoInfo from "@/components/UI/LogoInfo";
import { useCallback, useEffect, useMemo, useState } from "react";
import useApplicationAction from "../hooks";
import { DescriptionsProps, Form, message } from "antd";
import { formLabelObj, getFormLabelList } from "../hooks/const";
import { FinanceDataTypeEmu, FinanceItemProps, FinancingEntityEmu } from "@/fetch/definition";
import { useDataType, useGetLoanDetail } from "@/hooks";
import TzSegmented from "@/components/TzSegmented";
import { useGlobalContext } from "@/hooks/GlobalContext";

export default function Guarantee(props: { id: string }) {
  let {
    Submit,
    Success,
    Fail,
    setSubmitVisible,
    setSuccessVisible,
  } = useApplicationAction();
  let [form] = Form.useForm();
  let [items, setItems] = useState<DescriptionsProps["items"]>([]);
  let {dataInfo} = useGetLoanDetail({ id: props.id })
  let {dataTypeLabel} = useDataType(dataInfo);
  let [segmentedValue, setSegmentedValue] = useState(
    FinancingEntityEmu.Enterprise
  );
  let getSegmentedDom = useMemo(() => {
    if (segmentedValue === FinancingEntityEmu.Enterprise) {
      return dataInfo?.application_info_user
    } else {
      return dataInfo?.application_info_enterprise
    }
  }, [dataInfo,segmentedValue]);
  let { userInfo } = useGlobalContext();
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
            logo={dataInfo?.financial_organs.organs_name}
            logoUrl={dataInfo?.financial_organs.logo}
            className="w-[184px]"
          />
          <div className="flex flex-row border-l-[1px] flex-1 border-dashed items-center border-[#EEEEEE] pl-[50px]">
            <div className="flex flex-col ">
              <div className="flex mb-5">
                <span className="font-extrabold text-2xl text-[#333333] ">
                  {dataInfo?.name}
                </span>
                <span className="ml-5 flex items-start text-[#3D5AF5]">
                  <TzIcon className={"fa-location-dot text-sm mr-[6px]  mt-1"} />
                  {dataInfo?.financial_organs.area_desc}
                </span>
              </div>
              <DescMethod
                method={"担保方式"}
                desc={dataTypeLabel}
              />
            </div>
            <div className="flex ml-[100px]">
              <DataTypeCom {...dataInfo} />
            </div>
          </div>
          <div className="w-[245px] flex flex-col justify-center items-center">
            <TzButton
              type={"primary"}
              shape={"round"}
              onClick={() => {
                if(userInfo.enterprise_verify_status==3){
                setSubmitVisible(true);
                }else{
                  message.error('暂无权限请通过企业实名认证之后申请！')
                }
              }}
            >
              立即申请
            </TzButton>
            <span className="text-xs font-bold mt-5 text-[#999999]">
              {dataInfo?.success_count} 笔需求对接成功
            </span>
          </div>
        </div>
      </TzCard>
      <TzCard className="flex-1 w-full !mt-3">
        <DescInfo title={"担保额度"}>
          <div className="text-[#666]">{dataInfo?.guaranteeAmount}万元</div>
          <TzDivider />
        </DescInfo>
        <DescInfo title={"担保期限"}>
          <div className="text-[#666]">{dataInfo?.guaranteePeriod}月</div>
          <TzDivider />
        </DescInfo>
        <DescInfo title={"服务对象"}>
          <div className="text-[#666]">{dataInfo?.serviceObjects}</div>
          <TzDivider />
        </DescInfo>
        {dataInfo?.productType ===FinanceDataTypeEmu.FinanceGuarantee || (
          <DescInfo title={"受益人"}>
            <div className="text-[#666]">{dataInfo?.beneficiary}</div>
            <TzDivider />
          </DescInfo>
        )}

        <DescInfo title={"产品介绍"}>
          <div className="text-[#666]">{dataInfo?.productIntroduction}</div>
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
