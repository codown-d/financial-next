"use client";
import { TzButton } from "@/components/TzButton";
import { useRouter } from "next/navigation";

export default function ClientButton() {

  const router = useRouter();
  return ( <TzButton shape={"round"} type={"primary"} onClick={()=>{
    router.back()
  }}>
    返回政策列表
  </TzButton>
  );
}
