"use client";
import Image from "next/image";
import TzInput from "../TzInput";
import { Form, Space } from "antd";
import { TzButton } from "../TzButton";
import TzCard from "../TzCard";
import TzForm, { TzFormItem } from "../TzForm";
import { TzCheckableTagNormal } from "../TzCheckableTag";
import { FinancialMarket } from "@/constant";

export default function FinancialSupermarket(props) {
  let { items } = props;
  const [form] = Form.useForm();
  return (
    <div className=" overflow-hidden">
      <div className="h-[360px] relative flex justify-center">
        <Image
          src={"/images/jrcs-banner.png"}
          alt={""}
          fill
          style={{ objectFit: "cover", zIndex: -1 }}
        />
        <div className="mt-[50px] flex flex-col  items-center">
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
      <TzCard>
        <TzForm form={form}>
          <TzFormItem label={"融资主体"} name={"entity"} initialValue={["key1"]}>
            <TzCheckableTagNormal items={FinancialMarket.entity} />
          </TzFormItem>
        </TzForm>
      </TzCard>
    </div>
  );
}
