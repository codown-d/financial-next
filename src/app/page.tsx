import FinancialProduct from "@/components/FinancialProduct";
import FinancialBusiness from "@/components/FinancialBusiness";
import PolicyServices from "@/components/PolicyServices";
import ActionAffix from "@/components/UI/ActionAffix";
import { AntdRegistry } from "@ant-design/nextjs-registry";
function Home() {
  return (
    <AntdRegistry>
      <FinancialBusiness />
      <FinancialProduct />
      <PolicyServices />
      <ActionAffix />
    </AntdRegistry>
  );
}
export default Home