import TzForm, { TzFormItem } from "@/components/TzForm";
import TzInput from "@/components/TzInput";
import TzInputPassword from "@/components/TzInputPassword";
import { useGetImgCode } from "@/hooks";
import { Form, FormInstance } from "antd";
import { useEffect } from "react";

export default function (props: { formIns: FormInstance<any> }) {
  let { formIns } = props;
  let { getImgCode, imgCode, token } = useGetImgCode("user_login");
  useEffect(() => {
    getImgCode();
  }, [getImgCode]);
  return (
    <TzForm form={formIns} colon={false} layout={"vertical"}>
      <TzFormItem
        label="设置密码"
        name={"pass"}
        className="!mb-4"
        rules={[{ required: true }]}
      >
        <TzInputPassword placeholder="请输入" size={"large"} />
      </TzFormItem>
      <TzFormItem
        label="确认密码"
        name={"pass_two"}
        className="!mb-4"
        rules={[{ required: true }]}
      >
        <TzInputPassword placeholder="请输入" size={"large"} />
      </TzFormItem>
      <div className="flex items-start">
        <TzFormItem
          label="验证码"
          name={"verify_img_code"}
          rules={[{ required: true }]}
          style={{ width: "180px", marginBottom: 0 }}
        >
          <TzInput placeholder="请输入" size={"large"} />
        </TzFormItem>
        <div className="w-0 flex-1 ml-3 mt-[30px]">
          <img
            src={imgCode}
            className="w-full h-10"
            onClick={function () {
              getImgCode();
            }}
          />
        </div>
      </div>
    </TzForm>
  );
}
