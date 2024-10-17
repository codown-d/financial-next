import FinancialProduct from "@/components/FinancialProduct";
import FinancialBusiness from "@/components/FinancialBusiness";
import PolicyServices from "@/components/PolicyServices";
import ActionAffix from "@/components/UI/ActionAffix";
import "swiper/css"; // 导入 Swiper 的 CSS
import 'swiper/css/pagination'; 


export default function Home() {
  return (
    <>
      <FinancialBusiness />
      <FinancialProduct />
      <PolicyServices />
      <ActionAffix/>
    </>
  );
}
