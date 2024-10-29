import { FinanceItemProps } from "@/fetch/definition";
import { useDataType } from "@/hooks";
export default function DataTypeCom(props: FinanceItemProps) {
  let dataTypeList = useDataType(props);
  return (
    <>
      {dataTypeList.map((item, index) => (
        <div className="mr-9" key={index}>
          <div className="mb-[6px] ml-1 text-sm">{item.label}</div>
          <div className="bg-[#F9F9F9] text-[#3D5AF5] min-w-[156px] pt-[11px] pl-[12px] pb-[10px] text-left rounded-lg">
            <span className="text-[40px]  leading-[40px] font-bold inline-flex items-center ">
              {item.value}
            </span>
            &nbsp;{item.p}
          </div>
        </div>
      ))}
    </>
  );
}
