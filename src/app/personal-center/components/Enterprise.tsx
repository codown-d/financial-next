import { TzButton } from "@/components/TzButton";
import TzCard from "@/components/TzCard";
import TzNextImage from "@/components/TzNextImage";

export default function Enterprise() {
  return  <TzCard className="h-[738px]">
  <div className="text-[20px] mb-[26px]">企业认证</div>
  <div className={"relative w-[460px]"}>
    <TzNextImage
      className="mt-6"
      src={"/images/qyrz.png"}
      width={460}
      height={0}
    />
    <TzButton size={'large'}  className="border-0 hover:!text-[#FF9958]  bg-white-500 absolute text-[#FF9958] right-[56px] top-[50%]" shape={'round'}>查看认证</TzButton>
  </div>
</TzCard>
}
