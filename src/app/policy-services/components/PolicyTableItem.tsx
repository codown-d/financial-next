"use client";
import { useRouter } from "next/navigation";
import { TzButton } from "../../../components/TzButton";
import TzIcon from "../../../components/TzIcon";
import { DataType } from "@/app/policy-services/components/ClientTable";
import { timeFormat } from "@/lib";

export default function PolicyTableItem(props: DataType) {
  let { title, summary, add_time, id, rowguid } = props;
  const router = useRouter();
  return (
    <div>
      <div
        className="font-medium text-[20px] mb-5 text-[#333333] leading-[20px] cursor-pointer"
        onClick={() => {
          router.push(`/policy-detail?policyId=${id}`);
        }}
      >
        {title}
      </div>
      <div className="text-[#999] text-xs mb-5">{summary}</div>
      <div className="flex items-center justify-between">
        <span>{timeFormat(add_time)}</span>
        {/* <span>{publishdate}</span> */}
        <TzButton
          type="link"
          size={"small"}
          className="!text-[#3D5AF5]"
          icon={
            <TzIcon className={"fa-chevron-right text-[#3D5AF5] text-sm"} />
          }
          iconPosition={"end"}
          onClick={() => {
            // window.open(`/policy-detail?policyId=${id}`);
            router.push(`/policy-detail?policyId=${id}`);
          }}
        >
          查看详情
        </TzButton>
      </div>
    </div>
  );
}
