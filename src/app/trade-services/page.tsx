"use client";
import { TzInput } from "@/components";
import { TzButton } from "@/components/TzButton";
import TzCard from "@/components/TzCard";
import TzNextImage from "@/components/TzNextImage";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Space } from "antd";
import Image from "next/image";
import ClientButton from "../equity-investment/components/ClientButton";
export default function TradeServices() {
  return (
    <AntdRegistry>
      <div
        className="relative"
        style={{
          background:
            "linear-gradient( 180deg, #FFFFFF 0%, rgba(255,255,255,0) 100%)",
        }}
      >
        <div className="h-[320px] relative flex justify-center">
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
              className="mt-3"
            />
          </div>
        </div>
        <div className="bg-pylmy bg-cover bg-bottom">
          <div className="max-w-screen-lg mx-auto pt-[97px] pb-[163px] relative flex justify-end">
            <TzNextImage
              src={"/images/gylmy.png"}
              width={640}
              height={0}
              className="absolute z-10 left-0"
            />
            <TzCard
              className="w-[960px] backdrop-blur-sm bg-opacity-10 !bg-transparent "
              styles={{
                body: {
                  paddingLeft: "200px",
                  paddingRight: 60,
                  border: "2px solid #fff",
                },
              }}
            >
              <div className="flex justify-between items-end">
                <span className="text-[32px] font-medium">广发创投</span>
                <TzNextImage src={"/images/gxxd.png"} width={80} height={80} />
              </div>
              <p className="mt-5 mb-10 text-[#999] ">
                供应链贸易业务，通过有效地整合和管理供应链上的各个环节，实现产品从生产到销售的无缝衔接和协同运作，提高供应链的效率、降低成本和提升服务质量，实现企业间的合作共赢，促进我市经济发展。
                <br /> <br /> <br />
                目前公司主要业务板块聚焦建材及粮油贸易，上游覆盖我市众多生产型中小微企业，下游链接成都铁路局、中铁五局、蜀道集团下属公司及昭化京兆集团等大中型国有企业。资金来源有保证，账期较短，坏账风险小。
              </p>
              <div className="flex justify-between">
                <div>
                  <span className="flex">
                    <TzNextImage
                      src={"/images/dizhi.png"}
                      width={24}
                      height={24}
                      className="mr-2"
                    />
                    地址：四川省广元市xxxx区xxxx街道xx号
                  </span>
                </div>
                <ClientButton />
              </div>
            </TzCard>
          </div>
        </div>
      </div>
    </AntdRegistry>
  );
}
