import { Form } from "antd";
import TzRadio from "@/components/TzRadio";
import { TzButton } from "@/components/TzButton";
import { useLoginContext } from "./LoginWrap";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import TzIcon from "@/components/TzIcon";

export default function () {
  let [formIns] = Form.useForm();
  const { contentType, setContentType } = useLoginContext();
  return (
    <>
      <div className="flex-1 mt-2">
        <div className="text-[20px] text-[#333333] flex-r-c py-3 !justify-between">
          <TzIcon onClick={()=>{
            setContentType((pre) =>
                pre === "register1"
                  ? "login"
                  : pre === "register2"
                  ? "register1"
                  : "register2"
              );
          }} className="text-[14px] cursor-pointer text-[#DDDDDD] pl-[24px] fa-chevron-left" /> 
          <span>注册</span>   
          <span></span>             
        </div>
        <div className="h-[240px] px-10">
          {contentType === "register1" ? (
            <Step1 formIns={formIns} />
          ) : contentType === "register2" ? (
            <Step2 formIns={formIns} />
          ) : (
            <Step3 />
          )}
        </div>
        <div className="flex flex-col mt-[38px] px-10">
          <TzButton
            className="!h-[44px] mt-3 mb-3"
            type={"primary"}
            size={"large"}
            onClick={() => {
              setContentType((pre) =>
                pre === "register1"
                  ? "register2"
                  : pre === "register2"
                  ? "register3"
                  : "login"
              );
            }}
          >
            {contentType === "register3" ? "立即登录" : "下一步"}
          </TzButton>
          {contentType !== "register3"?<div className="flex justify-center px-2 mb-5 text-[12px]">
            <span>
              我有账号，
              <span
                className="text-[#3D5AF5] cursor-pointer"
                onClick={() => {
                  setContentType("login");
                }}
              >
                返回登录
              </span>
            </span>
          </div>:null}
        </div>
      </div>
    </>
  );
}
