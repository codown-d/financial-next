import TzForm, { TzFormItem } from "@/components/TzForm";
import TzInput from "@/components/TzInput";
import TzInputPassword from "@/components/TzInputPassword";
import { useGetImgCode } from "@/hooks";
import { FormInstance } from "antd";
import { useEffect } from "react";

export default function (props: { formIns: FormInstance<any> }) {
  let { formIns } = props;
  let { getImgCode, imgCode, token } = useGetImgCode("user_login");
  useEffect(() => {
    getImgCode();
  }, []);
  useEffect(() => {
    if (token) {
      formIns.setFieldsValue({ token });
    }
  }, [token]);
  return (
    <TzForm form={formIns} colon={false} layout={"vertical"}>
      <TzFormItem
        label="账号"
        name={"user_name"}
        className="!mb-4"
        rules={[{ required: true }]}
      >
        <TzInput placeholder="请输入" size={"large"} />
      </TzFormItem>
      <TzFormItem
        label="密码"
        name={"user_pass"}
        className="!mb-4"
        rules={[{ required: true }]}
      >
        <TzInputPassword placeholder="请输入" size={"large"} />
      </TzFormItem>
      <TzFormItem name={"token"} className="!mb-4" hidden>
        <TzInput />
      </TzFormItem>
      <div className="flex">
        <TzFormItem
          label="验证码"
          name={"verify_img_code"}
          style={{ width: "180px", marginBottom: 0 }}
          rules={[{ required: true }]}
        >
          <TzInput placeholder="请输入" size={"large"} />
        </TzFormItem>
        <TzFormItem label=" "  className="flex-1 flex w-0" style={{width:'100%'}}>
          <img
            src={imgCode}
            className=" ml-3 h-10"
            onClick={function () {
              getImgCode();
            }}
          />
        </TzFormItem>
      </div>
    </TzForm>
  );
}
