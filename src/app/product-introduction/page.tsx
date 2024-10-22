"use client";
import { TzInput, TzForm, TzFormItem } from "@/components";
import { TzButton } from "@/components/TzButton";
import TzCard from "@/components/TzCard";
import DataTypeCom from "@/components/UI/DataTypeCom";
import DataTypeTitleCom from "@/components/UI/DataTypeTitleCom";
import DescMethod from "@/components/UI/DescMethod";
import LogoInfo from "@/components/UI/LogoInfo";
import Title from "@/components/UI/Title";
import { ProductInfo } from "@/constant";
import { Space } from "antd";
import Image from "next/image";

export default function ProductIntroduction() {
  let productInfo = ProductInfo;
  let { logo, imgUrl, title, dataType, amount, guaranteeMethod } = productInfo;
  return (
    <div className="relative bg-[#F8F8F8]">
      <div className="h-[360px] relative flex justify-center">
        <Image
          src={"/images/cp-banner.png"}
          alt={""}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="max-w-screen-lg mx-auto mt-[60px] flex flex-col items-start z-10 w-full">
          <Image
            src={"/images/cpjs-title.png"}
            alt={""}
            height={0}
            width={332}
            className="ml-[50px]"
          />
          <TzCard
            className="flex-1 w-full !mt-[60px]"
            styles={{ body: { padding: "30px 0px" } }}
          >
            <div className="flex">
              <LogoInfo
                size="large"
                logo={logo}
                logoUrl={imgUrl}
                className="w-[184px]"
              />
              <div className="flex flex-row border-l-[1px] flex-1 border-dashed border-[#EEEEEE] pl-[50px]">
                <div className="flex flex-col mr-9">
                  <DataTypeTitleCom
                    dataType={dataType}
                    amount={amount}
                    title={title}
                  />
                  <div className="mt-5 flex">
                    <DescMethod
                      method={"担保方式"}
                      className="mr-3"
                      desc={guaranteeMethod.join("/")}
                    />
                    <DescMethod
                      method={"还款方式"}
                      desc={"按周期付息,到期还本/分期还款/一次性还本付息"}
                    />
                  </div>
                  <div className="flex mt-10">
                    <DataTypeCom {...productInfo} />
                  </div>
                </div>
              </div>
              <div className="w-[245px] flex flex-col justify-center items-center">
                <TzButton type={"primary"} shape={"round"} onClick={() => {}}>
                  立即申请
                </TzButton>
                <span className="text-xs font-bold mt-5 text-[#999999]">
                  84,972 笔需求对接成功
                </span>
              </div>
            </div>
          </TzCard>
          <TzCard className="flex-1 w-full !mt-3">
            <Title title={"服务对象"} />
          </TzCard>
        </div>
      </div>
    </div>
  );
}
