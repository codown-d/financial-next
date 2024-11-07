import TzForm, { TzFormItem } from "@/components/TzForm";
import TzInput from "@/components/TzInput";
import TzInputPassword from "@/components/TzInputPassword";
import { Form, FormInstance } from "antd";

export default function (props: { formIns: FormInstance<any> }) {
  let { formIns } = props;
  return (
    <TzForm form={formIns} colon={false} layout={"vertical"}>
      <TzFormItem
        label="账号"
        name={"account"}
        className="!mb-4"
      >
        <TzInput placeholder="请输入" size={"large"} />
      </TzFormItem>
      <TzFormItem
        label="密码"
        name={"password"}
        className="!mb-4"
      >
        <TzInputPassword placeholder="请输入" size={"large"} />
      </TzFormItem>
      <div className="flex items-end">
        <TzFormItem
          label="验证码"
          name={"code"}
          style={{ width: "180px",marginBottom:0 }}
        >
          <TzInput placeholder="请输入" size={"large"} />
        </TzFormItem>
        <div className="w-0 flex-1 ml-3">
          <img src="http://129.211.162.64/gy001/public/Api2024/captchainfo" alt="" className="w-full h-10" />
        </div>
      </div>
    </TzForm>
  );
}
