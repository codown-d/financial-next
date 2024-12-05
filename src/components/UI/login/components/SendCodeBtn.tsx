import { TzButton } from "@/components/TzButton";
import { useGetPhoneCode } from "@/hooks";
import { FormInstance, message } from "antd";
import { useCallback, useEffect, useState } from "react";

export default function (props: {
  formIns: FormInstance<any>;
  fields?: string[];
  classNames?: string;
}) {
  let { formIns, fields,classNames } = props;
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
    formIns.validateFields(fields).then((val) => {
      getPhoneCode(val).then((res: any) => {
        if (res.code == 200) {
          message.success(res.desc);
          setIsSending(true);
          setCountdown(10);
        }
      });
    });
  }, [formIns]);
  return (
    <TzButton
      size={"large"}
      className={`w-0 flex-1 ml-3 mt-[30px] ${classNames}`}
      type={"primary"}
      disabled={isSending}
      onClick={handleSendCode}
    >
      {isSending ? `${countdown}秒后可以重发` : "发送验证"}
    </TzButton>
  );
}
