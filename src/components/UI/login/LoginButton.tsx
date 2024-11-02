import { useState } from "react";
import TzModal from "@/components/TzModal";
import LoginWrap from "./components/LoginWrap";
import { TzButton } from "@/components/TzButton";

export default function LoginButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TzButton
        type="primary"
        shape="round"
        className="custom-primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        登录
      </TzButton>
      <TzButton shape="round" className="custom-primary ml-[14px]">
        注册
      </TzButton>
      <TzModal
        open={open}
        footer={null}
        width={620}
        styles={{
          content: { padding: "0px", borderRadius: "16px", marginTop: 200 },
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        <LoginWrap />
      </TzModal>
    </>
  );
}
