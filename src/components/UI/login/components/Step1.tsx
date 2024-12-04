import { TzButton } from "@/components/TzButton";
import TzForm, { TzFormItem } from "@/components/TzForm";
import TzInput from "@/components/TzInput";
import TzInputPassword from "@/components/TzInputPassword";
import { postPhoneCode } from "@/fetch";
import { useGetPhoneCode } from "@/hooks";
import { Form, FormInstance, message } from "antd";
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
  let { getPhoneCode } = useGetPhoneCode();
  const handleSendCode = useCallback(() => {
    formIns.validateFields(["phone", "send_type"]).then((val) => {
      getPhoneCode(val).then((res) => {
        console.log(res);
        if (res.code == 200) {
          message.success(res.desc);
          setIsSending(true);
          setCountdown(10);
        }
      });
    });
  }, [formIns]);
  return (
    <div className="h-[240px] pt-[50px]">
      <TzForm form={formIns} colon={false} layout={"vertical"}>
        <TzFormItem hidden name={"send_type"} initialValue={"register"}>
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
          <TzButton
            size={"large"}
            className="w-0 flex-1 ml-3 mt-[30px]"
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
