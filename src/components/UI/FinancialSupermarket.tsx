"use client";
import Image from "next/image";
import { DescriptionsProps, Empty, Form, message } from "antd";
import { TzButton } from "../TzButton";
import TzCard from "../TzCard";
import TzForm, { TzFormItem } from "../TzForm";
import { TzCheckableTagNormal } from "../TzCheckableTag";
import { FinancialMarket } from "@/constant";
import TzDivider from "../TzDivider";
import FilterMarket from "./FilterMarket";
import TzTabs from "../TzTabs";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import TzNextImage from "../TzNextImage";
import { useEffect, useMemo, useState } from "react";
import TzSearch from "../TzSearch";
import TzModal, { TzConfirm } from "../TzModal";
import FinanceCard, { FinanceCardProps } from "./FinanceCard";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { productRecommend } from "@/fetch";
import { dealProduct } from "@/lib";
import {
  FinanceDataTypeEmu,
  InstitutionTypeEmu,
  TabType,
} from "@/fetch/definition";
import { useGlobalContext } from "@/hooks/GlobalContext";
import useApplicationAction from "@/app/product-introduction/hooks";
import { find } from "lodash";
import { getFormLabelList } from "@/app/product-introduction/hooks/const";
import { useFundModal } from "@/hooks";
import SmartMatch from "./SmartMatch";
let obj = {
  "/bank-loan": FinanceDataTypeEmu.BankLoans,
  "/small-loan": FinanceDataTypeEmu.Microloans,
  "/emergency-refinancing": FinanceDataTypeEmu.EquityFinancing,
  "/equity-financing": FinanceDataTypeEmu.EmergencyRefinancing,
  "/performance-bond": FinanceDataTypeEmu.FinanceGuarantee,
  "/ele-bond": FinanceDataTypeEmu.ElectronicGuarantee,
  "/advance-payment-bond": FinanceDataTypeEmu.Insurance,
};
export default function FinancialSupermarket(props: { activeKey?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  let { activeKey = TabType.service } = props;
  let [filter, setFilter] = useState({
    product_type: obj[pathname],
  });
  let [keyword, setKeyword] = useState("");
  let [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  let itemsc = useMemo(() => {
    return [
      {
        label: (
          <div
            className="flex flex-col items-center px-[76px]"
            onClick={() => {
              router.push(`/small-loan`);
            }}
          >
            <TzNextImage src={"/images/rzfw.png"} width={88} height={88} />
            <span>融资服务</span>
          </div>
        ),
        key: TabType.service,
        children: <FilterMarket filter={{ ...filter }} keyword={keyword} />,
      },
      {
        label: (
          <div
            className="flex flex-col items-center px-[76px]"
            onClick={() => {
              router.push(`/performance-bond`);
            }}
          >
            <TzNextImage src={"/images/zxfw.png"} width={88} height={88} />
            <span>增信服务</span>
          </div>
        ),
        key: TabType.credit,
        children: <FilterMarket filter={{ ...filter }} keyword={keyword} />,
      },
    ];
  }, [filter, keyword]);

  useEffect(() => {
    form.setFieldsValue({
      product_type: obj[pathname],
    });
  }, []);
  return (
    <AntdRegistry>
      <div className="relative bg-[#F8F8F8] overflow-hidden ">
        <div className="h-[360px] relative flex justify-center">
          <Image
            src={"/images/jrcs-banner.png"}
            alt={""}
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="mt-[50px] flex flex-col items-center z-10">
            <TzNextImage
              src={"/images/jrcs-title.png"}
              alt={""}
              height={0}
              width={332}
              className="mb-10"
            />

            <TzSearch
              placeholder="请输入你想要搜索的内容"
              allowClear
              className="!w-[560px] p-1"
              enterButton="搜索"
              size={"large"}
              onSearch={(val) => setKeyword(val)}
            />
          </div>
        </div>
        <div className="max-w-screen-lg flex absolute top-[278px] w-[100%] left-1/2 transform -translate-x-1/2 ">
          <TzCard className="w-0 flex-1">
            <TzForm
              form={form}
              onValuesChange={(changedValues, allValues) => {
                setFilter((pre) => ({
                  ...pre,
                  ...allValues,
                  ...changedValues,
                }));
              }}
            >
              <TzFormItem
                label={"融资主体"}
                name={"application_form"}
                initialValue={0}
                style={{ marginBottom: "12px" }}
              >
                <TzCheckableTagNormal items={FinancialMarket.entity} />
              </TzFormItem>
              <TzDivider />
              <TzFormItem
                label={"融资类型"}
                name={"finance_type"}
                initialValue={0}
                style={{ marginBottom: "12px" }}
              >
                <TzCheckableTagNormal items={FinancialMarket.type} />
              </TzFormItem>
              <TzDivider />
              <TzFormItem
                label={"机构类型"}
                name={"product_type"}
                initialValue={obj[pathname]}
                style={{ marginBottom: "12px" }}
              >
                <TzCheckableTagNormal items={FinancialMarket.institution} />
              </TzFormItem>
              <TzDivider />
              <TzFormItem
                label={"担保类型"}
                name={"data_type"}
                initialValue={0}
                style={{ marginBottom: "12px" }}
              >
                <TzCheckableTagNormal items={FinancialMarket.financing} />
              </TzFormItem>
              <TzDivider />
              <TzFormItem
                label={"融资额度"}
                name={"highest_money"}
                initialValue={0}
                style={{ marginBottom: "12px" }}
              >
                <TzCheckableTagNormal items={FinancialMarket.guarantee} />
              </TzFormItem>
              <TzDivider />
              <TzFormItem
                label={"融资期限"}
                name={"term"}
                className="!mb-[0px]"
                initialValue={0}
              >
                <TzCheckableTagNormal items={FinancialMarket.term} />
              </TzFormItem>
            </TzForm>
          </TzCard>
          <div className="w-[360px] relative ml-4">
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
        </div>
        <div className="max-w-screen-lg  mx-auto pt-[290px]">
          <FilterMarket filter={{ ...filter }} keyword={keyword} />
          {/* <TzTabs
            activeKey={activeKey}
            className="financing-services-tab !mt-[380px]"
            items={items}
            centered
            destroyInactiveTabPane
            tabBarGutter={96}
            tabBarStyle={{ padding: "0px 76px" }}
          /> */}
        </div>
      </div>
     <SmartMatch open={open} setOpen={setOpen}/>
    </AntdRegistry>
  );
}
