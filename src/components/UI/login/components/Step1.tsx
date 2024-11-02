import { TzButton } from "@/components/TzButton";
import TzForm, { TzFormItem } from "@/components/TzForm";
import TzInput from "@/components/TzInput";
import TzInputPassword from "@/components/TzInputPassword";
import { Form, FormInstance } from "antd";
import { useCallback, useEffect, useState } from "react";

export default function (props: { formIns: FormInstance<any> }) {
  let { formIns } = props;
  const [countdown, setCountdown] = useState(0);
  const [isSending, setIsSending] = useState(false);
  useEffect(() => {
    let intervalId;

    if (countdown > 0) {
      intervalId = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsSending(false);
    }

    return () => clearInterval(intervalId);
  }, [countdown]);
  const handleSendCode = useCallback(() => {
    let phone = formIns.getFieldValue("phone");
    console.log(phone)
    if (!phone) {
      alert("请输入有效的手机号");
      return;
    }
    // 在这里添加发送验证码的逻辑，比如通过 API 请求
    console.log(`发送验证码到 ${phone}`);
    setIsSending(true);
    setCountdown(10);
  }, [formIns]);
  return (
    <div className="h-[240px] pt-[50px]">
      <TzForm form={formIns} colon={false} layout={"vertical"}>
        <TzFormItem label="手机号" name={"phone"} className="!mb-4">
          <TzInput placeholder="请输入" size={"large"} />
        </TzFormItem>
        <div className="flex items-end justify-between">
          <TzFormItem
            label="验证码"
            name={"phone"}
            style={{ width: "180px", marginBottom: 0 }}
          >
            <TzInput placeholder="请输入" size={"large"} />
          </TzFormItem>
          <TzButton
            size={"large"}
            className="w-0 flex-1 ml-3"
            type={"primary"}
            disabled={isSending}
            onClick={handleSendCode}

          >
            {isSending ? `${countdown}秒后可以重发` : "发送验证"}
          </TzButton>
        </div>
      </TzForm>
    </div>
  );
}
