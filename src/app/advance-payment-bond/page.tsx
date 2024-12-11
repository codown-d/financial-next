import FinancialSupermarket from "@/components/UI/FinancialSupermarket";
import { TabType } from "@/fetch/definition";


export default function AdvancePaymentBond() {
  return (
    <>
    <FinancialSupermarket activeKey={TabType.credit}/>
    </>
  );
}
