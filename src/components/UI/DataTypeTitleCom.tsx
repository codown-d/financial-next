import { prodTypeEmu } from "@/constant";
import { FinanceDataTypeEmu, FinanceItemProps } from "@/fetch/definition";
import { find } from "lodash";
type DataTypeTitleProps = Pick<
  FinanceItemProps,
  "dataType" | "amount" | "name" | "productType"
>;
export default function DataTypeTitleCom(props: DataTypeTitleProps) {
  let { amount, name, productType } = props;
  let node = find(prodTypeEmu,(item)=>item.value===productType)?.label
  if (productType === FinanceDataTypeEmu.EmergencyRefinancing) {
    return (
      <div>
        <span className="font-extrabold text-2xl text-[#333333] text-center">
          {name}
        </span>
        <span className="ml-3 bg-[#F0F3FF] py-2 px-3 text-xs leading-[14px] rounded-[12px_4px_12px_4px] ">
          <span className="text-[#3D5AF5] text-sm font-bold">{amount}万元</span>{" "}
          认缴规模
        </span>
      </div>
    );
  } else if (productType === FinanceDataTypeEmu.ElectronicGuarantee) {
    return (
      <div className="">
        <span className="font-extrabold text-2xl text-[#333333] text-center">
          {name}
        </span>
      </div>
    );
  } else {
    return (
      <div className=" flex items-start">
        <span
          className="font-extrabold max-w-[160px] text-[24px] text-[#333333] text-center "
          title={name}
        >
          {name}
        </span>
        <span className="ml-3 mt-1 min-w-[75px] bg-gradient-to-r to-[#7B9DF1] text-[12px] py-1 px-3 leading-[14px] from-[#3C5BF6] rounded-[12px_4px_12px_4px] text-white-500">
          {node}
        </span>
      </div>
    );
  }
}
