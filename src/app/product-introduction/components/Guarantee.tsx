"use client";
import { TzButton } from "@/components/TzButton";
import TzCard from "@/components/TzCard";
import TzDivider from "@/components/TzDivider";
import TzIcon from "@/components/TzIcon";
import DataTypeCom from "@/components/UI/DataTypeCom";
import DescInfo from "@/components/UI/DescInfo";
import DescMethod from "@/components/UI/DescMethod";
import LogoInfo from "@/components/UI/LogoInfo";
import {
  MicroloansOp,
  selectOp,
} from "@/constant";
import { find, keys } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import useApplicationAction from "../hooks";
import { DescriptionsProps, Form } from "antd";
import { formLabelObj, getFormLabelList } from "../hooks/const";
import { productDetail } from "@/fetch";
import { dealProduct } from "@/lib";
import { FinanceDataTypeEmu, FinanceItemProps } from "@/fetch/definition";
import { useDataType } from "@/hooks";

export default function Guarantee(props: { id: string }) {
  let { id } = props;
  let [dataInfo, setDataInfo] = useState<FinanceItemProps>();
  let {
    Submit,
    Success,
    Fail,
    setSubmitVisible,
    setSuccessVisible,
  } = useApplicationAction();
  let [form] = Form.useForm();
  let [items, setItems] = useState<DescriptionsProps["items"]>([]);
  let getProductDetail = useCallback(() => {
    productDetail({ id: props.id }).then((res) => {
      setDataInfo(dealProduct(res.data));
    });
  }, [props]);
  let {dataTypeLabel} = useDataType(dataInfo);
  useEffect(() => {
    getProductDetail();
  }, [getProductDetail]);
  return (
    <>
      <Submit
        form={form}
        product_id={props.id}
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
            logo={dataInfo?.companyName}
            logoUrl={dataInfo?.logoUrl}
            className="w-[184px]"
          />
          <div className="flex flex-row border-l-[1px] flex-1 border-dashed items-center border-[#EEEEEE] pl-[50px]">
            <div className="flex flex-col ">
              <div className="flex mb-5">
                <span className="font-extrabold text-2xl text-[#333333] ">
                  {dataInfo?.name}
                </span>
                <span className="ml-5 flex items-center text-[#3D5AF5]">
                  <TzIcon className={"fa-location-dot text-sm mr-[6px]"} />
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
                setSubmitVisible(true);
              }}
            >
              立即申请
            </TzButton>
            <span className="text-xs font-bold mt-5 text-[#999999]">
              {dataInfo?.dealOrder} 笔需求对接成功
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
      <TzCard className="flex-1 w-full !mt-3">
        <DescInfo title={"申请资料"}>
          <div className="text-[#666]">{dataInfo?.applicationInformation}</div>
        </DescInfo>
      </TzCard>
    </>
  );
}
