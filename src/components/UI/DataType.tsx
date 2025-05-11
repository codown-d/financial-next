import { FinanceDataTypeEmu } from "@/fetch/definition";
import Title from "./Title";
import { useDataType } from "@/hooks";
import { FinanceCardProps } from "./FinanceCard";

export default function DataType(props:FinanceCardProps) {
  let { productType, } = props;
  
  let {dataTypeLabel} = useDataType(props);
  return productType === FinanceDataTypeEmu.EmergencyRefinancing ? null : (
      <div className={`mt-3 text-left leading-[14px] `}>
         {productType== FinanceDataTypeEmu.Insurance?'种类': 
         productType== FinanceDataTypeEmu.ElectronicGuarantee?'保函形式':'担保方式'}：{ dataTypeLabel}
      </div>
  );
}
