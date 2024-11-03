"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PersonalCenter() {
  const router = useRouter();
  useEffect(() => {
    router.push("/personal-center/user");
  }, []);

  return null;
}
