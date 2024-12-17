"use client";
import { TzButton } from "@/components/TzButton";
import TzCard from "@/components/TzCard";
import TzIcon from "@/components/TzIcon";
import DescInfo from "@/components/UI/DescInfo";
import LogoInfo from "@/components/UI/LogoInfo";
import { useEffect, useMemo, useState } from "react";
import useApplicationAction from "../hooks";
import { DescriptionsProps, Form } from "antd";
import { formLabelObj, getFormLabelList } from "../hooks/const";
import { useFundModal, useGetLoanDetail } from "@/hooks";

export default function Fund(props: { id: string }) {
  let {
    Submit,
    Success,
    Fail,
    setSuccessVisible,
  } = useApplicationAction();
  let [form] = Form.useForm();
  let [items, setItems] = useState<DescriptionsProps["items"]>([]);
  let {dataInfo} = useGetLoanDetail({ id: props.id })
  let { getFundModal } = useFundModal();
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
                <span className="font-extrabold text-2xl text-[#333333] ">
                  {dataInfo?.name}
                </span>
                <span className="ml-5 flex items-start text-[#3D5AF5]">
                  <TzIcon className={"fa-location-dot text-sm mr-[6px]  mt-1"} />
                  {dataInfo?.financial_organs.area_desc}
                </span>
              </div>

              <div className="flex mt-10 w-[772px] text-[#999]">
                {dataInfo?.fund_company_intro}
              </div>
            </div>
          </div>
          <div className="w-[245px] flex flex-col justify-center items-center">
            <TzButton shape={"round"} type={"primary"} onClick={getFundModal}>
              立即申请
            </TzButton>
            <span className="text-xs font-bold mt-5 text-[#999999]">
              {dataInfo?.success_count} 笔需求对接成功
            </span>
          </div>
        </div>
      </TzCard>
      <TzCard className="flex-1 w-full !mt-3">
        <DescInfo title={"基金简介"}>
          <div className="text-[#666]">{dataInfo?.product_intro}</div>
        </DescInfo>
      </TzCard>
    </>
  );
}
