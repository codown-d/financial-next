import FinancialSupermarket from "@/components/UI/FinancialSupermarket";
import { TabType } from "@/fetch/definition";


export default function EleBond() {
  return (
    <>
    <FinancialSupermarket activeKey={TabType.credit}/>
    </>
  );
}
