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
        name={"zh1"}
        className="!mb-4"
      >
        <TzInput placeholder="请输入" size={"large"} />
      </TzFormItem>
      <TzFormItem
        label="密码"
        name={"mm1"}
        className="!mb-4"
      >
        <TzInputPassword placeholder="请输入" size={"large"} />
      </TzFormItem>
      <div className="flex items-end">
        <TzFormItem
          label="验证码"
          name={"txyzm1"}
          style={{ width: "180px",marginBottom:0 }}
        >
          <TzInput placeholder="请输入" size={"large"} />
        </TzFormItem>
        <div className="w-0 flex-1 ml-3">
          <img src="http://129.211.162.64/gy001/public/captcha.html" id='imgCode' alt="" className="w-full h-10"  onClick={function(){
            let img = document.querySelector("#imgCode") as HTMLImageElement
            img.src = img.src + "?" + new Date().getTime()
          }}/>
        </div>
      </div>
    </TzForm>
  );
}
