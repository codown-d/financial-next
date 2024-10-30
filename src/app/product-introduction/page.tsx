"use client"
import Image from "next/image";
import SmallLoans from "./components/SmallLoans";
import { useSearchParams } from "next/navigation";
import { FinanceDataTypeEmu } from "@/constant";
import { useMemo } from "react";
import Fund from "./components/Fund";
import Guarantee from "./components/Guarantee";
import { AntdRegistry } from "@ant-design/nextjs-registry";


export default function ProductIntroduction(props) {
  const searchParams = useSearchParams();
  const dataType = searchParams.get("dataType") as FinanceDataTypeEmu;
  const id = searchParams.get("id");
  let getDataTypeDom = useMemo(() => {
    if (
      [
        FinanceDataTypeEmu.BankLoans,
        FinanceDataTypeEmu.Microloans,
        FinanceDataTypeEmu.EquityFinancing,
        FinanceDataTypeEmu.FinanceGuarantee,
      ].includes(dataType)
    ) {
      return <SmallLoans id={id} />;
    } else if ([FinanceDataTypeEmu.EmergencyRefinancing].includes(dataType)) {
      return <Fund  id={id}/>;
    } else {
      return <Guarantee  id={id}/>;
    }
  }, [dataType]);

  return (
    <AntdRegistry>
      <div className="relative bg-[#F8F8F8] overflow-hidden ">
        <div className="h-[320px] relative flex justify-center z-0">
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
    </AntdRegistry>
  );
}
