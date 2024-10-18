import FinancialProduct from "@/components/FinancialProduct";
import FinancialBusiness from "@/components/FinancialBusiness";
import PolicyServices from "@/components/PolicyServices";
import ActionAffix from "@/components/UI/ActionAffix";

export default function Home() {
  return (
    <>
      <FinancialBusiness />
      <FinancialProduct />
      <PolicyServices />
      <ActionAffix />
    </>
  );
}
