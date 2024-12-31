import { Form, message } from "antd";
import { TzButton } from "@/components/TzButton";
import { useLoginContext } from "./LoginWrap";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import TzIcon from "@/components/TzIcon";
import { findPass, userRegister, verifyRegiste } from "@/fetch";
import TzForm, { TzFormItem } from "@/components/TzForm";
import { merge } from "lodash";
import TzInput from "@/components/TzInput";
import SendCodeBtn from "./SendCodeBtn";
import TzInputPassword from "@/components/TzInputPassword";

export default function (props) {
  let { setOpen } = props;
  const { setContentType } = useLoginContext();
  let [formIns] = Form.useForm();
  return (
    <div className="flex-1 mt-2">
      <div className="text-[20px] text-[#333333] flex-r-c py-3 !justify-between">
        <TzIcon
          onClick={() => {
            setContentType("login");
          }}
          className="text-[14px] cursor-pointer text-[#DDDDDD] pl-[24px] fa-chevron-left"
        />
        <span>修改密码</span>
        <span></span>
      </div>
      <div className=" px-10">
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
            <TzFormItem label=" " className="flex-1">
              <SendCodeBtn formIns={formIns} fields={["phone", "send_type"]} />
            </TzFormItem>
          </div>
          <TzFormItem
            label="密码"
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
          <div className="flex mt-[30px] mb-8 ">
            <TzButton
              className="flex-1 mx-2"
              size={"large"}
              onClick={() => {
                setOpen(false);
              }}
            >
              关闭
            </TzButton>
            <TzButton
              className="flex-1 mx-2"
              type={"primary"}
              size={"large"}
              onClick={() => {
                formIns.validateFields().then(async (val) => {
                  findPass(val).then((res) => {
                    if(res.code==200){
                    setContentType("login");
                    message.success("密码修改成功！");
                    }
                  });
                });
              }}
            >
              提交
            </TzButton>
          </div>
        </TzForm>
      </div>
    </div>
  );
}
