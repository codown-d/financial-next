import { TzButton } from "@/components/TzButton";
import TzForm, { TzFormItem } from "@/components/TzForm";
import TzInput from "@/components/TzInput";
import TzInputPassword from "@/components/TzInputPassword";
import { postPhoneCode } from "@/fetch";
import { useGetPhoneCode } from "@/hooks";
import { Form, FormInstance, message } from "antd";
import { useCallback, useEffect, useState } from "react";
import SendCodeBtn from "./SendCodeBtn";

export default function (props: { formIns: FormInstance<any> }) {
  let { formIns } = props;
  return (
    <div className="h-[240px] pt-[50px]">
      <TzFormItem hidden name={"send_type"} initialValue={"register"}>
        <TzInput />
      </TzFormItem>
      <TzFormItem name={"token"} hidden>
        <TzInput />
      </TzFormItem>
      <TzFormItem
        label="手机号"
        name={"phone"}
        className="!mb-4"
        rules={[{ required: true }]}
      >
        <TzInput placeholder="请输入" size={"large"} />
      </TzFormItem>
      <div className="flex items-start justify-between">
        <TzFormItem
          label="验证码"
          name={"verify_phone_code"}
          style={{ width: "180px", marginBottom: 0 }}
          rules={[{ required: true }]}
        >
          <TzInput placeholder="请输入" size={"large"} />
        </TzFormItem>
        <SendCodeBtn formIns={formIns} fields={["phone", "send_type"]} />
      </div>
    </div>
  );
}
