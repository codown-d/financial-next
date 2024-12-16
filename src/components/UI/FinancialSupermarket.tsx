"use client";
import Image from "next/image";
import { Empty, Form } from "antd";
import { TzButton } from "../TzButton";
import TzCard from "../TzCard";
import TzForm, { TzFormItem } from "../TzForm";
import { TzCheckableTagNormal } from "../TzCheckableTag";
import {
  FinancialMarket,
} from "@/constant";
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
import { InstitutionTypeEmu, TabType } from "@/fetch/definition";

export default function FinancialSupermarket(props: { activeKey?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  let { activeKey = TabType.service } = props;
  let [filter, setFilter] = useState({});
  let [keyword, setKeyword] = useState("");
  let [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  let items = useMemo(() => {
    return [
      {
        label: (
          <div className="flex flex-col items-center px-[76px]" onClick={()=>{
            router.push(`/small-loan`);
          }}>
            <TzNextImage src={"/images/rzfw.png"} width={88} height={88} />
            <span>融资服务</span>
          </div>
        ),
        key: TabType.service,
        children: (
          <FilterMarket
            type={TabType.service}
            filter={{...filter,big_type:1}}
            keyword={keyword}
          />
        ),
      },
      {
        label: (
          <div className="flex flex-col items-center px-[76px]"  onClick={()=>{
            router.push(`/performance-bond`);
          }}>
            <TzNextImage src={"/images/zxfw.png"} width={88} height={88} />
            <span>增信服务</span>
          </div>
        ),
        key: TabType.credit,
        children: (
          <FilterMarket
            type={TabType.credit}
            filter={{...filter,big_type:2}}
            keyword={keyword}
          />
        ),
      },
    ];
  }, [filter, keyword]);
  let [marketDataList, setMarketDataList] = useState<FinanceCardProps[]>([]);
  let getproductRecommend = () => {
    productRecommend({}).then((res) => {
      setMarketDataList(res.data.map(dealProduct).slice(0,3));
    });
  };
  useEffect(() => {
    getproductRecommend();
    let obj={
      '/bank-loan':InstitutionTypeEmu.Bank,
      '/small-loan':InstitutionTypeEmu.SmallLoan,
      '/emergency-refinancing':InstitutionTypeEmu.Fund,
      '/equity-financing':InstitutionTypeEmu.Fund,
      '/performance-bond':InstitutionTypeEmu.Guaranteed,
      '/ele-bond':InstitutionTypeEmu.Guaranteed,
      '/advance-payment-bond':InstitutionTypeEmu.Guaranteed,
    }
    console.log(obj[pathname])
    form.setFieldsValue({
      product_type:obj[pathname]
    })
  }, []);

  return (
    <AntdRegistry>
      <div className="relative bg-[#F8F8F8]">
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
        <div className="max-w-screen-lg flex absolute shadow-sm top-[278px] w-[1440px] left-1/2 transform -translate-x-1/2 ">
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
                initialValue={0}
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
          <div className="w-[360px] relative ">
            <TzNextImage src={"/images/znpp.png"} width={340} height={0} />
            <TzButton
              onClick={() => setOpen(true)}
              className="text-[16px] font-bold !w-[180px] !text-white-500 !absolute bottom-[48px] left-[90px] !bg-gradient-to-l !from-[#7B9DF1] !to-[#3C5BF6] !shadow-[0px_4px_10px_rgba(14,38,162,0.42)] border-2 border-white"
              shape={"round"}
            >
              智能匹配
            </TzButton>
          </div>
        </div>
        <div className="max-w-screen-lg  mx-auto ">
          <TzTabs
            activeKey={activeKey}
            className="financing-services-tab !mt-[380px]"
            items={items}
            centered
            destroyInactiveTabPane
            tabBarGutter={96}
            tabBarStyle={{ padding: "0px 76px" }}
          />
        </div>
      </div>
      <TzModal
        width={1200}
        open={open}
        footer={
          <div className="flex items-center justify-center mt-[20px] mb-2">
            <TzButton shape={"round"} onClick={() => setOpen(false)}>
              关闭
            </TzButton>
            <TzButton
              className="ml-5"
              shape={"round"}
              type={"primary"}
              onClick={() => setOpen(false)}
            >
              提交申请
            </TzButton>
          </div>
        }
        okText={"提交申请"}
        title={
          <div className="text-center font-bold mb-[50px] text-2xl text-gray-800 mt-5 leading-[32px]">
            智能匹配
          </div>
        }
      >
        <div className="flex  mb-[100px] justify-center  space-x-8">
          {marketDataList.length==0?<Empty />:marketDataList.map((item, index) => {
            return <FinanceCard {...item} key={index} />;
          })}
        </div>
      </TzModal>
    </AntdRegistry>
  );
}
