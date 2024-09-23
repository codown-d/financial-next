
import FinancialProduct from "@/components/FinancialProduct";
import FinancialServices from "@/components/FinancialServices";
import FinancialBusiness from "@/components/FinancialBusiness";
import TzPageProgress from "@/components/TzPageProgress";

export default function Home() {
  return (
    <>
      <FinancialBusiness />
      {/* <FinancialServices /> */}
      <FinancialProduct />
      <TzPageProgress/>
    </>
  );
}
