import FinancialProduct from "@/components/FinancialProduct";
import FinancialBusiness from "@/components/FinancialBusiness";
import TzPageProgress from "@/components/TzPageProgress";
import ElectronicGuarantee from "@/components/ElectronicGuarantee";
import ServiceOrg from "@/components/ServiceOrg";
import PolicyServices from "@/components/PolicyServices";

export default function Home() {
  return (
    <>
      <FinancialBusiness />
      {/* <FinancialServices /> */}
      <FinancialProduct />
      <ElectronicGuarantee />
      <ServiceOrg/>
      <PolicyServices/>
      <TzPageProgress />
    </>
  );
}











