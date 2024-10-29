"use client";
import { TzButton } from "@/components/TzButton";
import { useFundModal } from "@/hooks";

export default function ClientButton() {
  let { getFundModal } = useFundModal();
  return (
    <TzButton shape={"round"} type={"primary"} onClick={getFundModal}>
      立即申请
    </TzButton>
  );
}
