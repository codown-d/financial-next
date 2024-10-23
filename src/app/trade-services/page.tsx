 "use client"
import { TzInput } from "@/components";
import { TzButton } from "@/components/TzButton";
import { Space } from "antd";
import Image from "next/image";
export default function TradeServices() {
  return (
    <div className="relative bg-[#F8F8F8]">
      <div className="h-[360px] relative flex justify-center">
        <Image
          src={"/images/my-banner.png"}
          alt={""}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className=" flex flex-col items-center justify-center z-10">
          <Image
            src={"/images/gylmy-title.png"}
            alt={""}
            height={0}
            width={420}
          /> 
        </div>
      </div>
      <div className="max-w-screen-lg  mx-auto ">
      </div>
    </div>
  );
}
