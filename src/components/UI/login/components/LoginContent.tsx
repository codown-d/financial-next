import TzTabs from "@/components/TzTabs";
import AccountLogin from "./AccountLogin";
import SMSLogin from "./SMSLogin";
import { Form, message, Modal } from "antd";
import TzRadio from "@/components/TzRadio";
import { TzButton } from "@/components/TzButton";
import { useLoginContext } from "./LoginWrap";
import { useGlobalContext } from "@/hooks/GlobalContext";
import { getUserInfo, login, phoneLogin } from "@/fetch";
import { useCallback, useEffect, useState } from "react";

export default function (props) {
  let { setOpen } = props;
  let [formIns] = Form.useForm();

  const { setContentType } = useLoginContext();
  let { setUserInfo } = useGlobalContext();
  let items = [
    {
      label: "账号登录",
      key: "/login",
      children: <AccountLogin formIns={formIns} />,
    },
    {
      label: "短信登录",
      key: "/register",
      children: <SMSLogin formIns={formIns} />,
    },
  ];
  let [radio, setRadio] = useState(false);
  let [activeKey, setActiveKey] = useState("/login");

  return (
    <div className="flex-1 px-10 mt-2">
      <TzTabs
        items={items}
        centered
        tabBarStyle={{ borderBottom: "none" }}
        className="border-0"
        onChange={setActiveKey}
      />
      <div className="flex flex-col  mt-[38px]">
        <TzRadio
          value={radio}
          onChange={(val) => {
            setRadio(val.target.checked);
          }}
        >
          <div className=" text-[12px]">
            我已阅读并同意
            <a href="" className="text-[#3D5AF5] ml-1">
              《用户协议》
            </a>
            ，
            <a href="" className="text-[#3D5AF5] ml-1">
              《隐私协议》
            </a>
          </div>
        </TzRadio>
        <TzButton
          className="!h-[44px] mt-3 mb-3"
          type={"primary"}
          size={"large"}
          onClick={() => {
            if (radio === false) {
              message.warning("用户协议未勾选");
              return;
            }
            formIns.validateFields().then((val) => {
              let fn = "/login" == activeKey ? login : phoneLogin;
              fn(val).then(async (res) => {
                if (res.code != 200) {
                  return;
                }
                localStorage.setItem("token", res.token);
                setOpen(false);
                let result = await getUserInfo();
                setUserInfo({ ...result.data, token: res.token });
              });
            });
          }}
        >
          登录
        </TzButton>
        <div className="flex justify-between px-2 mb-5 text-[12px]">
          <span>
            还没有账号？
            <span
              className="text-[#3D5AF5] cursor-pointer"
              onClick={() => {
                setContentType("register1");
              }}
            >
              立即注册
            </span>
          </span>
          <span className="text-[#3D5AF5] cursor-pointer">忘记密码？</span>
        </div>
      </div>
    </div>
  );
}
