"use client";
import Image from "next/image";
import SmallLoans from "./components/SmallLoans";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import Fund from "./components/Fund";
import Insurance from "./components/Insurance";
import Guarantee from "./components/Guarantee";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { FinanceDataTypeEmu } from "@/fetch/definition";
import { useGetLoanDetail } from "@/hooks";
import { useGlobalContext } from "@/hooks/GlobalContext";

export default function ProductIntroductionClient() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  let { dataInfo } = useGetLoanDetail({ id });
  let getDataTypeDom = useMemo(() => {
    if ([FinanceDataTypeEmu.Insurance].includes(dataInfo?.productType)) {
      return <Insurance id={id} />;
    } else if ([FinanceDataTypeEmu.EmergencyRefinancing].includes(dataInfo?.productType)) {
      return <Fund id={id} />;
    } else if (FinanceDataTypeEmu.ElectronicGuarantee == dataInfo?.productType) {
      return <Guarantee id={id} />;
    } else {
      return <SmallLoans id={id} />;
    }
  }, [dataInfo]);

  let { device } = useGlobalContext();
  return (
    <AntdRegistry>
      <div className="relative bg-[#F8F8F8] overflow-hidden h-[100vh]">
        <div className="h-[320px] relative flex justify-center z-0">
          <Image
            src={"/images/cp-banner.png"}
            alt={"广元市综合金融服务平台产品介绍"}
            fill
            priority
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
          </div>
        </div>
        <div className={`max-w-screen-lg mx-auto mb-[90px] !mt-[-98px] ${device.isMobile?"px-4":""}`}>
          {getDataTypeDom}
        </div>
      </div>
    </AntdRegistry>
  );
}
