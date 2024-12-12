import TzCard from "@/components/TzCard";
import ClientTable from "../components/ClientTable";
import ClientApplyTable from "../components/ClientApplyTable";

export default function Financing() {
  return (
    <>
      <TzCard>
        <div className="text-[20px] mb-[0px]">我的需求</div>
        <ClientTable />
      </TzCard>
      <TzCard className="!mt-3">
        <div className="text-[20px] mb-[0px]">我的申请</div>
        <ClientApplyTable />
      </TzCard>
    </>
  );
}
