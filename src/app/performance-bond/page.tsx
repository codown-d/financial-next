import FinancialSupermarket from "@/components/UI/FinancialSupermarket";
import { TabType } from "@/constant";


export default function PerformanceBond() {
  return (
    <>
    <FinancialSupermarket activeKey={TabType.credit}/>
    </>
  );
}
