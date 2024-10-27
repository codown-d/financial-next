import FinancialSupermarket from "@/components/UI/FinancialSupermarket";
import { TabType } from "@/constant";


export default function EleBond() {
  return (
    <>
    <FinancialSupermarket activeKey={TabType.credit}/>
    </>
  );
}
