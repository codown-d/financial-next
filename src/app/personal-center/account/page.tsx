import { TzForm, TzFormItem, TzInput } from "@/components";
import TzCard from "@/components/TzCard";
import TzDivider from "@/components/TzDivider";
import TzInputPassword from "@/components/TzInputPassword";
import TzNextImage from "@/components/TzNextImage";
import TzSelect from "@/components/TzSelect";
import { purposeOp, termOp, selectOp } from "@/constant";
import { Row, Col } from "antd";

export default function Account() {
  return (
    <TzCard className="pb-[300px]">
      <div className="text-[20px] mb-[26px]">账户信息</div>
      <TzForm className="mt-[30px]" colon={false} layout="vertical">
        <div className="flex-r-c !justify-start">
          <TzFormItem label="手机号" name={"amount"} className="w-[320px]">
            <TzInput placeholder="请输入" size={"large"} />
          </TzFormItem>
          <div className="h-[40px] leading-[40px] w-[100px] rounded-[6px] bg-[#eee] text-center ml-3">
            更换手机号
          </div>
        </div>
        <div className="flex-r-c !justify-start">
          <TzFormItem label="密码" name={"term"} className="w-[320px]">
            <TzInputPassword placeholder="请输入" size={"large"} />
          </TzFormItem>
          <div className="h-[40px] leading-[40px] w-[100px] rounded-[6px]  bg-[#eee]  text-center ml-3">
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
        注销登录
      </div>
    </TzCard>
  );
}
