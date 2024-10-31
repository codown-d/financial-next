"use client";
import { useRouter } from "next/navigation";
import { TzButton } from "../../../components/TzButton";
import TzIcon from "../../../components/TzIcon";
import { DataType } from "@/app/policy-services/components/ClientTable";

export default function PolicyTableItem(props: DataType) {
  let { title, fwbh, publishdate, id, rowguid } = props;
  const router = useRouter();
  return (
    <div>
      <div
        className="font-medium text-[20px] mb-5 text-[#333333] leading-[20px] cursor-pointer"
        onClick={() => {
          router.push(`/policy-detail?policyguid=${rowguid}`);
        }}
      >
        {title}
      </div>
      <div className="text-[#999] text-xs mb-5">{fwbh}</div>
      <div className="flex items-center justify-between">
        {/* <span>{timeFormat(time)}</span> */}
        <span>{publishdate}</span>
        <TzButton
          type="link"
          size={"small"}
          className="!text-[#3D5AF5]"
          icon={
            <TzIcon className={"fa-chevron-right text-[#3D5AF5] text-sm"} />
          }
          iconPosition={"end"}
          onClick={() => {
            router.push(`/policy-detail?policyguid=${rowguid}`);
          }}
        >
          查看详情
        </TzButton>
      </div>
    </div>
  );
}
