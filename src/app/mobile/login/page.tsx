"use client";
import { TzForm, TzFormItem, TzInput } from "@/components";
import TzInputPassword from "@/components/TzInputPassword";
import TzNextImage from "@/components/TzNextImage";
import SendCodeBtn from "@/components/UI/login/components/SendCodeBtn";
import {
  getUserInfo,
  login,
  phoneLogin,
  userRegister,
  verifyRegiste,
} from "@/fetch";
import { useGetImgCode } from "@/hooks";
import { useGlobalContext } from "@/hooks/GlobalContext";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { merge } from "lodash";
import { useEffect, useMemo, useState } from "react";

export default function loginPage() {
  const [formIns] = Form.useForm();
  let { setUserInfo } = useGlobalContext();
  let [type, setType] = useState("login");
  let isLogin = useMemo(() => {
    return ["login", "phoneLogin"].includes(type);
  }, [type]);
  let { getImgCode, imgCode } = useGetImgCode("user_login");
  useEffect(() => {
    getImgCode('register2'===type?'register':'user_login');
  }, [type]);
  let register1Val: any;
  return (
    <>
      {"register3" !== type && (
        <div className="text-[24px] pl-8 font-bold mb-[34px] mt-[12px]">
          欢迎{isLogin ? "登录" : "注册"}
          <br />
          广元市综合金融服务平台
        </div>
      )}
      <div className="mx-8">
        <TzForm
          form={formIns}
          size={"large"}
          layout="vertical"
          initialValues={{ user_name: "", user_pass: "" }}
        >
          <TzFormItem name={"token"} className="!mb-4" hidden>
            <Input />
          </TzFormItem>
          {type == "login" && (
            <>
              <TzFormItem name="user_name" label="手机号">
                <TzInput placeholder="请输入" />
              </TzFormItem>
              <TzFormItem name="user_pass" label="密码">
                <TzInput placeholder="请输入" type={"password"} />
              </TzFormItem>
              <div className="flex items-start justify-between">
                <TzFormItem
                  label="验证码"
                  name={"verify_img_code"}
                  style={{ width: "180px", marginBottom: 0 }}
                >
                  <TzInput placeholder="请输入" />
                </TzFormItem>
                <TzFormItem label=" " className="flex-1 ml-3">
                  <img
                    className="flex-1 flex h-10 w-full"
                    src={imgCode}
                    onClick={()=>getImgCode()}
                  />
                </TzFormItem>
              </div>
            </>
          )}
          {type == "phoneLogin" && (
            <>
              <TzFormItem hidden name={"send_type"} initialValue={"login"}>
                <TzInput />
              </TzFormItem>
              <TzFormItem name="phone" label="手机号">
                <TzInput placeholder="请输入" />
              </TzFormItem>
              <div className="flex items-start justify-between">
                <TzFormItem
                  label="验证码"
                  name={"verify_phone_code"}
                  style={{ width: "180px", marginBottom: 0 }}
                >
                  <TzInput placeholder="请输入" />
                </TzFormItem>
                <TzFormItem label=" " className="flex-1">
                  <SendCodeBtn
                    formIns={formIns}
                    fields={["phone", "send_type"]}
                  />
                </TzFormItem>
              </div>
            </>
          )}
          {"register1" == type && (
            <>
              <TzFormItem hidden name={"send_type"} initialValue={"register"}>
                <TzInput />
              </TzFormItem>
              <TzFormItem label="手机号" name={"phone"} className="!mb-4">
                <TzInput placeholder="请输入" />
              </TzFormItem>
              <div className="flex items-start justify-between mb-[30px]">
                <TzFormItem
                  label="验证码"
                  name={"verify_phone_code"}
                  style={{ width: "180px", marginBottom: 0 }}
                >
                  <TzInput placeholder="请输入" />
                </TzFormItem>
                <TzFormItem label=" " className="flex-1">
                  <SendCodeBtn
                    formIns={formIns}
                    fields={["phone", "send_type"]}
                  />
                </TzFormItem>
              </div>
            </>
          )}
          {"register2" == type && (
            <>
              <TzFormItem name={"phone"} className="!mb-4" hidden>
                <TzInput />
              </TzFormItem>
              <TzFormItem hidden name={"send_type"} initialValue={"register"}>
                <TzInput />
              </TzFormItem>
              <TzFormItem
                label="验证码"
                hidden
                name={"verify_phone_code"}
                style={{ width: "180px", marginBottom: 0 }}
              >
                <TzInput placeholder="请输入" />
              </TzFormItem>
              <TzFormItem label="设置密码" name={"pass"}>
                <TzInputPassword placeholder="请输入" />
              </TzFormItem>
              <TzFormItem label="确认密码" name={"pass_two"}>
                <TzInputPassword placeholder="请输入" />
              </TzFormItem>
              <div className="flex items-start justify-between">
                <TzFormItem
                  label="验证码"
                  name={"verify_img_code"}
                  style={{ width: "180px", marginBottom: 10 }}
                >
                  <TzInput placeholder="请输入" />
                </TzFormItem>
                <TzFormItem label=" " className="flex-1 ml-3">
                  <img
                    src={imgCode}
                    className="flex-1 flex  h-10 w-full"
                    onClick={()=>getImgCode('register')}
                  />
                </TzFormItem>
              </div>
              <TzFormItem
                label=""
                name={"click_protocol"}
                valuePropName="checked"
                rules={[{ required: true, message: "请勾选用户协议" }]}
                style={{ marginBottom: 0 }}
              >
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
                          title: "用户协议",
                          okText: "确定",
                          content: <div>123456</div>,
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
          )}
          {"register3" == type && (
            <>
              <div className="flex-c-c h-full">
                <TzNextImage
                  src={"/images/zxcg.png"}
                  width={80}
                  height={0}
                  className="mt-[40px] mb-[60px]"
                />
              </div>
            </>
          )}
          {isLogin && (
            <TzFormItem
              label=""
              name={"click_protocol"}
              valuePropName="checked"
              rules={[{ required: true, message: "请勾选用户协议" }]}
              style={{ marginBottom: 0 }}
            >
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
                        title: "用户协议",
                        okText: "确定",
                        content: <div>123456</div>,
                        onOk() {},
                      });
                    }}
                  >
                    《用户协议》
                  </a>
                </div>
              </Checkbox>
            </TzFormItem>
          )}
          <TzFormItem>
            {isLogin ? (
              <>
                <Button
                  onClick={() => {
                    formIns.validateFields().then((val) => {
                      let fn = type == "login" ? login : phoneLogin;
                      fn(val).then(async (res) => {
                        if (res.code != 200) return;
                        localStorage.setItem("token", res.token);
                        let result = await getUserInfo();
                        setUserInfo({ ...result.data, token: res.token });
                      });
                    });
                  }}
                  type="primary"
                  className="w-full  mt-2"
                  shape="round"
                  style={{
                    background:
                      "linear-gradient( 270deg, #7B9DF1 0%, #3C5BF6 100%)",
                  }}
                >
                  登录
                </Button>
                <div className="flex justify-between mt-2">
                  <span
                    className="text-[#3D5AF5] cursor-pointer"
                    onClick={() => {
                      setType("modifyPsd");
                    }}
                  >
                    忘记密码？
                  </span>
                  {type == "login" ? (
                    <span
                      className="text-[#3D5AF5] cursor-pointer"
                      onClick={() => {
                        setType("phoneLogin");
                      }}
                    >
                      短信登录
                    </span>
                  ) : (
                    <span
                      className="text-[#3D5AF5] cursor-pointer"
                      onClick={() => {
                        setType("login");
                      }}
                    >
                      密码登录
                    </span>
                  )}
                </div>
                <div className="flex justify-center px-2 mt-[100px] text-[12px]">
                  <span>
                    还没有账号？
                    <span
                      className="text-[#3D5AF5] cursor-pointer"
                      onClick={() => {
                        setType("register1");
                      }}
                    >
                      立即注册
                    </span>
                  </span>
                </div>
              </>
            ) : !isLogin && "register3" !== type ? (
              <>
                <Button
                  onClick={() => {
                    formIns.validateFields().then(async (val) => {
                      if (type === "register1") {
                        let res = await verifyRegiste(val);
                        if (res.code != 200) return;
                      } else if (type === "register2") {
                        let res = await userRegister(
                          merge({}, val, register1Val)
                        );
                        if (res.code != 200) return;
                      }
                      setType((pre) =>
                        pre === "register1"
                          ? "register2"
                          : pre === "register2"
                          ? "register3"
                          : "login"
                      );
                    });
                  }}
                  type="primary"
                  className="w-full mt-2"
                  shape="round"
                  style={{
                    background:
                      "linear-gradient( 270deg, #7B9DF1 0%, #3C5BF6 100%)",
                  }}
                >
                  下一步
                </Button>
                <div className="flex justify-center px-2 mt-[100px] text-[12px]">
                  <span>
                    我有账号，
                    <span
                      className="text-[#3D5AF5] cursor-pointer"
                      onClick={() => {
                        setType("login");
                      }}
                    >
                      返回登陆
                    </span>
                  </span>
                </div>
              </>
            ) : (
              <Button
                type="primary"
                className="w-full mt-2"
                shape="round"
                style={{
                  background:
                    "linear-gradient( 270deg, #7B9DF1 0%, #3C5BF6 100%)",
                }}
                onClick={() => {
                  setType("login");
                }}
              >
                立即登录
              </Button>
            )}
          </TzFormItem>
        </TzForm>
      </div>
    </>
  );
}
