"use client";
import { TzForm, TzFormItem, TzInput } from "@/components";
import TzCard from "@/components/TzCard";
import TzDivider from "@/components/TzDivider";
import TzInputPassword from "@/components/TzInputPassword";
import TzNextImage from "@/components/TzNextImage";
import TzSelect from "@/components/TzSelect";
import SendCodeBtn from "@/components/UI/login/components/SendCodeBtn";
import { purposeOp, termOp, selectOp } from "@/constant";
import { useGetImgCode, useGetPhoneCode } from "@/hooks";
import { useGlobalContext } from "@/hooks/GlobalContext";
import { Row, Col, Form, FormInstance, ConfigProvider, Popconfirm, message } from "antd";
import modal from "antd/es/modal";
import { useEffect } from "react";
import zhCN from "antd/locale/zh_CN";
import { adminQuit, modifyPass, phoneModify, quit } from "@/fetch";
import { useRouter } from "next/navigation";
import { logout } from "@/lib";

let Phone = (props: { formIns: FormInstance<any> }) => {
  let { formIns } = props;
  return (
    <ConfigProvider locale={zhCN}>
      <TzForm form={formIns} colon={false} layout="vertical">
        <TzFormItem name={"send_type"} initialValue={"new"} hidden>
          <TzInput />
        </TzFormItem>
        <TzFormItem label="手机号" name={"phone"} rules={[{ required: true }]}>
          <TzInput placeholder="请输入" size={"large"} />
        </TzFormItem>
        <div className=" flex ">
          <TzFormItem
            label="验证码"
            name={"verify_phone_code"}
            className="w-[320px]"
            rules={[{ required: true }]}
          >
            <TzInput placeholder="请输入" size={"large"} />
          </TzFormItem>
          <SendCodeBtn formIns={formIns} fields={["phone", "send_type"]} />
        </div>
      </TzForm>
    </ConfigProvider>
  );
};
let Password = (props: { formIns: FormInstance<any> }) => {
  let { formIns } = props;
  return (
    <ConfigProvider locale={zhCN}>
      <TzForm form={formIns} colon={false} layout="vertical">
        <TzFormItem name={"send_type"} initialValue={"new"} hidden>
          <TzInput />
        </TzFormItem>
        <TzFormItem
          label="原密码"
          name={"user_pass"}
          rules={[{ required: true }]}
        >
          <TzInputPassword placeholder="请输入" size={"large"} />
        </TzFormItem>
        <TzFormItem
          label="新密码"
          name={"new_user_pass"}
          rules={[{ required: true }]}
        >
          <TzInputPassword placeholder="请输入" size={"large"} />
        </TzFormItem>
        <TzFormItem
          label="确认新密码"
          name={"new_user_pass_two"}
          rules={[{ required: true }]}
        >
          <TzInputPassword placeholder="请输入" size={"large"} />
        </TzFormItem>
      </TzForm>
    </ConfigProvider>
  );
};
export default function Account() {
  let { userInfo } = useGlobalContext();
  let [formIns] = Form.useForm();
  let [formPhone] = Form.useForm();
  let [formPwd] = Form.useForm();
  useEffect(() => {
    formIns.setFieldsValue(userInfo);
  }, [userInfo]);
  const router = useRouter();
  return (
    <>
      <TzCard className="pb-[300px]">
        <div className="text-[20px] mb-[26px]">账户信息</div>
        <TzForm
          form={formIns}
          className="mt-[30px]"
          colon={false}
          layout="vertical"
        >
          <div className="flex-r-c !justify-start">
            <TzFormItem label="手机号" name={"user_name"} className="w-[320px]">
              <TzInput placeholder="请输入" size={"large"} />
            </TzFormItem>
            <div
              className="h-[40px] leading-[40px] w-[100px] rounded-[6px] bg-[#eee] text-center ml-3"
              onClick={() => {
                modal.confirm({
                  title: "更换手机号",
                  icon: null,
                  width: 520,
                  content: <Phone formIns={formPhone} />,
                  okText: "确认",
                  onOk() {
                    return new Promise((resolve, reject) => {
                      formPhone
                        .validateFields()
                        .then((val) => {
                          phoneModify(val).then((res) => {
                            if (res.code == 200) {
                              message.success(res.desc)
                              window.location.reload();
                              resolve("");
                            } else {
                              reject();
                            }
                          });
                        })
                        .catch(() => {
                          reject();
                        });
                    });
                  },
                  cancelText: "取消",
                });
              }}
            >
              更换手机号
            </div>
          </div>
          <div className="flex-r-c !justify-start">
            <TzFormItem
              label="密码"
              name={"user_pass_view"}
              className="w-[320px]"
            >
              <TzInputPassword placeholder="请输入" size={"large"} />
            </TzFormItem>
            <div
              className="h-[40px] leading-[40px] w-[100px] rounded-[6px]  bg-[#eee]  text-center ml-3"
              onClick={() => {
                modal.confirm({
                  title: "修改密码",
                  icon: null,
                  width: 520,
                  content: <Password formIns={formPwd} />,
                  okText: "确认",
                  onOk() {
                    return new Promise((resolve, reject) => {
                      formPwd
                        .validateFields()
                        .then((val) => {
                          modifyPass(val).then((res) => {
                            if (res.code == 200) {
                              resolve("");
                              adminQuit().then(logout);
                            } else {
                              reject();
                            }
                          });
                        })
                        .catch(() => {
                          reject();
                        });
                    });
                  },
                  cancelText: "取消",
                });
              }}
            >
              修改密码
            </div>
          </div>
        </TzForm>
        <TzDivider></TzDivider>
        <div className="text-[20px]">注销登录</div>
        <div className="text-[#999] mt-2">
          注销登录后将看不到您的需求信息和申请信息
        </div>
        <div className="h-[40px] leading-[40px] w-[100px] rounded-[6px] bg-[#eee] text-center ml-3 mt-[30px]">
          <Popconfirm
            title={null}
            description={"确认注销登录"}
            okText="是"
            onConfirm={() => {
              quit().then(logout);
            }}
            cancelText="否"
          >
            注销登录
          </Popconfirm>
        </div>
      </TzCard>
    </>
  );
}
