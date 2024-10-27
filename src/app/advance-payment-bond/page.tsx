import FinancialSupermarket from "@/components/UI/FinancialSupermarket";
import { TabType } from "@/constant";


export default function AdvancePaymentBond() {
  return (
    <>
    <FinancialSupermarket activeKey={TabType.credit}/>
    </>
  );
}
