"use client";
import { useState } from "react";
import TzModal, { TzConfirm } from "@/components/TzModal";
import LoginWrap from "./components/LoginWrap";
import { TzButton } from "@/components/TzButton";
import TzDropdown from "@/components/TzDropdown";
import TzIcon from "@/components/TzIcon";
import Link from "next/link";
import { useGlobalContext } from "@/hooks/GlobalContext";

export default function LoginButton() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('login');
  let {userInfo,setUserInfo} = useGlobalContext()
  const items = [
    {
      key: "personalCenter",
      label: (
        <Link href={"/personal-center/user"} passHref>
          个人中心
        </Link>
      ),
    },
    {
      key: "financingManagement",
      label: (
        <Link href={"/personal-center/financing"} passHref>
          融资管理
        </Link>
      ),
    },
    {
      key: "logout",
      label: (
        <span
          onClick={() => {
            localStorage.removeItem("userInfo");
            setUserInfo({ account: "" });
          }}
        >
          退出登录
        </span>
      ),
    },
  ];
  return (
    <>
      {!userInfo?.account ? (
        <>
          <TzButton
            type="primary"
            shape="round"
            onClick={() => {
              setType('login')
              setOpen(true);
            }}
          >
            登录
          </TzButton>
          <TzButton shape="round" className="ml-[14px]" onClick={()=>{
            setType('register1')
            setOpen(true)
          }}>
            注册
          </TzButton>
        </>
      ) : (
        <TzDropdown menu={{ items }}>
          <div className="w-[190px] text-[#333333] leading-[60px] ">
            {userInfo?.account}
            <TzIcon className={"ml-[6px] fa-caret-down"} />
          </div>
        </TzDropdown>
      )}

      <TzModal
        open={open}
        footer={null}
        destroyOnClose
        width={620}
        styles={{
          content: { padding: "0px", borderRadius: "16px", marginTop: 200 },
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        <LoginWrap setOpen={setOpen} type={type}/>
      </TzModal>
    </>
  );
}
