'use client'
import { TzButton } from "@/components/TzButton";
import TzCard from "@/components/TzCard";
import TzIcon from "@/components/TzIcon";
import DescInfo from "@/components/UI/DescInfo";
import LogoInfo from "@/components/UI/LogoInfo";
import { MarketDataList } from "@/constant";
import { find } from "lodash";
import { useMemo } from "react";

export default function Fund(props: { id: string }) {
  console.log('props',props)
  let dataInfo = useMemo(() => {
    return find(MarketDataList, (item) => item.id == props.id);
  }, [props.id]);
  return (
    <>
      <TzCard
        className="flex-1 w-full"
        styles={{ body: { padding: "30px 0px" } }}
      >
        <div className="flex">
          <LogoInfo
            size="large"
            logo={dataInfo?.companyName}
            logoUrl={dataInfo?.logoUrl}
            className="w-[184px]"
          />
          <div className="flex flex-row border-l-[1px] flex-1 border-dashed border-[#EEEEEE] pl-[50px]">
            <div className="flex flex-col mr-9">
              <div className="flex">
                <span className="font-extrabold text-2xl text-[#333333] ">
                  {dataInfo?.name}
                </span>
                <span className="ml-5 flex items-center text-[#3D5AF5]">
                  <TzIcon className={"fa-location-dot text-sm mr-[6px]"} />
                  {dataInfo?.location}
                </span>
              </div>

              <div className="flex mt-10 w-[772px] text-[#999]">
                {dataInfo?.fundCompanyIntroduction}{" "}
              </div>
            </div>
          </div>
          <div className="w-[245px] flex flex-col justify-center items-center">
            <TzButton type={"primary"} shape={"round"} onClick={() => {}}>
              立即申请
            </TzButton>
            <span className="text-xs font-bold mt-5 text-[#999999]">
              {dataInfo?.dealOrder} 笔需求对接成功
            </span>
          </div>
        </div>
      </TzCard>
      <TzCard className="flex-1 w-full !mt-3">
        <DescInfo title={"基金简介"}>
          <div className="text-[#666]">{dataInfo?.fundIntroduction}</div>
        </DescInfo>
      </TzCard>
    </>
  );
}
