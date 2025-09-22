import TzForm, { TzFormItem } from "@/components/TzForm";
import TzInput from "@/components/TzInput";
import TzInputPassword from "@/components/TzInputPassword";
import TzRadio from "@/components/TzRadio";
import { useGetImgCode } from "@/hooks";
import { Checkbox, Form, FormInstance, Modal } from "antd";
import { useEffect } from "react";
import UserAgreement from "./UserAgreement";

export default function (props: { formIns: FormInstance<any> }) {
  let { formIns } = props;
  let { getImgCode, imgCode, token } = useGetImgCode("register");
  useEffect(() => {
    getImgCode();
  }, []);
  useEffect(() => {
    formIns.setFieldsValue({
      token,
    });
  }, [imgCode]);
  return (
    <>
      <TzFormItem name={"token"} hidden initialValue={token}>
        <TzInput />
      </TzFormItem>
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
          style={{ width: "180px", marginBottom: 10 }}
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
      <TzFormItem label="" name={"click_protocol"} valuePropName="checked"
          rules={[{ required: true ,message:'请勾选用户协议'}]}>
        <Checkbox>
          <div className=" text-[12px]">
            我已阅读并同意
            <a
              className="text-[#3D5AF5] ml-1"
              onClick={(e) => {
                e.preventDefault();
                Modal.info({
                  width: "70%",
                  icon: null,
                  okText: "确定",
                  content: <UserAgreement/>,
                  onOk() {},
                });
              }}
            >
              《用户协议》
            </a>
          </div>
        </Checkbox>
      </TzFormItem>
    </>
  );
}
