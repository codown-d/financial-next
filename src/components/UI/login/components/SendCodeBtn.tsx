import { TzButton } from "@/components/TzButton";
import { useGetPhoneCode } from "@/hooks";
import { FormInstance, message } from "antd";
import { useCallback, useEffect, useState } from "react";

export default function (props: {
  formIns: FormInstance<any>;
  fields?: string[];
  classNames?: string;
  [x: string]: any;
}) {
  let { formIns, fields, classNames, ...otherProps } = props;
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
  let { getPhoneCode, token } = useGetPhoneCode();
  useEffect(() => {
    formIns.setFieldsValue({ token });
  }, [token]);
  const handleSendCode = useCallback(() => {
    formIns.validateFields(fields).then((val) => {
      getPhoneCode(val).then((res: any) => {
        if (res.code == 200) {
          message.success(res.desc);
          setIsSending(true);
          setCountdown(60);
        }
      });
    });
  }, [formIns]);
  return (
    <TzButton
      size={"large"}
      className={` ml-3 ${classNames}`}
      style={{width:'calc(100% - 12px)'}}
      type={"primary"}
      disabled={isSending}
      onClick={handleSendCode}
      {...otherProps}
    >
      {isSending ? `${countdown}秒后可以重发` : "发送验证"}
    </TzButton>
  );
}
