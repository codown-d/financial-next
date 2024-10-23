 "use client"
import Image from "next/image";
import SmallLoans from "./components/SmallLoans";
import { useSearchParams, usePathname } from 'next/navigation';
import { FinanceDataTypeEmu } from "@/constant";
import { useMemo } from "react";
import Fund from "./components/Fund";
import Guarantee from "./components/Guarantee";

export default function ProductIntroduction() {
  const searchParams = useSearchParams();
  const paramValue = searchParams.get('dataType') as FinanceDataTypeEmu; // 'myParam' 是 URL 中的参数名
  console.log(paramValue)
  let getDataTypeDom = useMemo(()=>{
    if([FinanceDataTypeEmu.BankLoans,
      FinanceDataTypeEmu.Microloans,
      FinanceDataTypeEmu.EquityFinancing,
      FinanceDataTypeEmu.FinanceGuarantee].includes(paramValue)){
      return <SmallLoans />
    }else if([FinanceDataTypeEmu.EmergencyRefinancing].includes(paramValue)){
      return <Fund />
    }else{
      return <Guarantee />
    }
  },[paramValue])

  return (
    <div className="relative bg-[#F8F8F8] overflow-hidden">
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
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto mb-[90px] !mt-[-98px]">
        {getDataTypeDom}
      </div>
    </div>
  );
}
