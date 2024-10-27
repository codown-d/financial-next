import { FinanceDataTypeEmu } from "@/constant";
import { FinanceItemProps } from "@/fetch/definition";
type DataTypeTitleProps = Pick<
  FinanceItemProps,
  "dataType" | "amount" | "name"
>;
export default function DataTypeTitleCom(props: DataTypeTitleProps) {
  let { dataType, amount, name } = props;
  if (dataType === FinanceDataTypeEmu.EmergencyRefinancing) {
    return (
      <div className="">
        <span className="font-extrabold text-2xl text-[#333333] text-center">
          {name}
        </span>
        <span className="ml-3 bg-[#F0F3FF] py-2 px-3 text-xs leading-[14px] rounded-[12px_4px_12px_4px] ">
          <span className="text-[#3D5AF5] text-sm font-bold">{amount}亿元</span>{" "}
          认缴规模
        </span>
      </div>
    );
  } else if (dataType === FinanceDataTypeEmu.ElectronicGuarantee) {
    return (
      <div className="">
        <span className="font-extrabold text-2xl text-[#333333] text-center">
          {name}
        </span>
      </div>
    );
  } else {
    return (
      <div className="">
        <span className="font-extrabold text-2xl text-[#333333] text-center">
          {name}
        </span>
        <span className="ml-3 bg-gradient-to-r to-[#7B9DF1] py-1 px-3 leading-[14px] from-[#3C5BF6] rounded-[12px_4px_12px_4px] text-white-500">
          小额贷款
        </span>
      </div>
    );
  }
}
