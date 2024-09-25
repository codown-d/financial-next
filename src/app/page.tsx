import FinancialProduct from "@/components/FinancialProduct";
import FinancialBusiness from "@/components/FinancialBusiness";
import TzPageProgress from "@/components/TzPageProgress";
import ElectronicGuarantee from "@/components/ElectronicGuarantee";
import ServiceOrg from "@/components/ServiceOrg";
import PolicyServices from "@/components/PolicyServices";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
        <link
          rel="stylesheet"
          href="/fontawesome-free-6.6.0-web/css/all.css"
          type="text/css"
        />
      </Head>
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











