 "use client"
import { TzInput } from "@/components";
import { TzButton } from "@/components/TzButton";
import { Space } from "antd";
import Image from "next/image";
export default function PolicyServices() {
  return (
    <div className="relative bg-[#F8F8F8]">
      <div className="h-[360px] relative flex justify-center">
        <Image
          src={"/images/jrcs-banner.png"}
          alt={""}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="mt-[50px] flex flex-col items-center z-10">
          <Image
            src={"/images/zcfw-title.png"}
            alt={""}
            height={0}
            width={240}
            className="mb-10"
          /> 

          <Space.Compact className="w-[560px] p-1">
            <TzInput placeholder="请输入你想要搜索的内容" />
            <TzButton type="primary">搜索</TzButton>
          </Space.Compact>
        </div>
      </div>
      <div className="max-w-screen-lg  mx-auto ">
        
      </div>
    </div>
  );
}
