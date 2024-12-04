import TzForm, { TzFormItem } from "@/components/TzForm";
import TzInput from "@/components/TzInput";
import TzInputPassword from "@/components/TzInputPassword";
import { Form, FormInstance } from "antd";

export default function (props: { formIns: FormInstance<any> }) {
  let { formIns } = props;
  return (
    <TzForm form={formIns} colon={false} layout={"vertical"}>
      <TzFormItem
        label="设置密码"
        name={"type"}
        className="!mb-4"
          rules={[{ required: true }]}
      >
        <TzInput placeholder="请输入" size={"large"} />
      </TzFormItem>
      <TzFormItem
        label="确认密码"
        name={"type"}
        className="!mb-4"
          rules={[{ required: true }]}
      >
        <TzInputPassword placeholder="请输入" size={"large"} />
      </TzFormItem>
      <div className="flex items-start">
        <TzFormItem
          label="验证码"
          name={"type"}
          rules={[{ required: true }]}
          style={{ width: "180px",marginBottom:0 }}
        >
          <TzInput placeholder="请输入" size={"large"} />
        </TzFormItem>
        <div className="w-0 flex-1 ml-3 mt-[30px]">
          <img src="/images/baoxian.png" alt="" className="w-full h-10" />
        </div>
      </div>
    </TzForm>
  );
}
