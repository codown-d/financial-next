import TzCard from "@/components/TzCard";
import ClientTable from "../components/ClientTable";

export default function Financing() {
  return (
    <>
      <TzCard>
        <div className="text-[20px] mb-[26px]">我的需求</div>
        <ClientTable />
      </TzCard>
      <TzCard className="mt-3">
        <div className="text-[20px] mb-[26px]">我的申请</div>
        <ClientTable />
      </TzCard>
    </>
  );
}
