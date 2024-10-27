"use client";
import Image from "next/image";
import TzInput from "../TzInput";
import { Divider, Form, Space } from "antd";
import { TzButton } from "../TzButton";
import TzCard from "../TzCard";
import TzForm, { TzFormItem } from "../TzForm";
import { TzCheckableTagNormal } from "../TzCheckableTag";
import { FinancialMarket, TabType } from "@/constant";
import TzDivider from "../TzDivider";
import FilterMarket from "./FilterMarket";
import TzTabs from "../TzTabs";
import { AntdRegistry } from "@ant-design/nextjs-registry";



export default function FinancialSupermarket(props: { activeKey?: string }) {
  let { activeKey = TabType.service } = props;
  const [form] = Form.useForm();
  let items = [
    {
      label: (
        <div className="flex flex-col items-center px-[76px]">
          <Image src={"/images/rzfw.png"} alt={""} width={88} height={88} />
          <span>融资服务</span>
        </div>
      ),
      key: TabType.service,
      children: <FilterMarket type={TabType.service} />,
    },
    {
      label: (
        <div className="flex flex-col items-center px-[76px]">
          <Image src={"/images/zxfw.png"} alt={""} width={88} height={88} />
          <span>增信服务</span>
        </div>
      ),
      key:TabType.credit,
      children: <FilterMarket type={TabType.credit} />,
    },
  ];

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
            <Image
              src={"/images/jrcs-title.png"}
              alt={""}
              height={0}
              width={332}
              className="mb-10"
            />

            <Space.Compact className="w-[560px] p-1">
              <TzInput placeholder="请输入你想要搜索的内容" />
              <TzButton type="primary">搜索</TzButton>
            </Space.Compact>
          </div>
        </div>
        <div className="flex absolute shadow-sm top-[278px] left-1/2 transform -translate-x-1/2 ">
          <TzCard className="w-[1108px]" styles={{ body: { paddingLeft: 40 } }}>
            <TzForm form={form}>
              <TzFormItem
                label={"融资主体"}
                name={"entity"}
                initialValue={["key1"]}
              >
                <TzCheckableTagNormal items={FinancialMarket.entity} />
              </TzFormItem>
              <TzDivider />
              <TzFormItem
                label={"融资类型"}
                name={"type"}
                initialValue={["key1"]}
              >
                <TzCheckableTagNormal items={FinancialMarket.type} />
              </TzFormItem>
              <TzDivider />
              <TzFormItem
                label={"机构类型"}
                name={"institution"}
                initialValue={["key1"]}
              >
                <TzCheckableTagNormal items={FinancialMarket.institution} />
              </TzFormItem>
              <TzDivider />
              <TzFormItem
                label={"担保类型"}
                name={"financing"}
                initialValue={["key1"]}
              >
                <TzCheckableTagNormal items={FinancialMarket.financing} />
              </TzFormItem>
              <TzDivider />
              <TzFormItem
                label={"融资额度"}
                name={"guarantee"}
                initialValue={["key1"]}
              >
                <TzCheckableTagNormal items={FinancialMarket.guarantee} />
              </TzFormItem>
              <TzDivider />
              <TzFormItem
                label={"融资期限"}
                name={"term"}
                initialValue={["key1"]}
                className="!mb-[0px]"
              >
                <TzCheckableTagNormal items={FinancialMarket.term} />
              </TzFormItem>
            </TzForm>
          </TzCard>
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
    </AntdRegistry>
  );
}
