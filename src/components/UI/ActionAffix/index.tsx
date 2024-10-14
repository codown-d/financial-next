"use client";
import Image from "next/image";
import TzFloatButton, { TzFloatButtonGroup } from "../../TzIFloatButton";
import TzPageProgress from "../../TzPageProgress";
export default function ActionAffix() {
  return (
    <>
      <TzFloatButtonGroup
        shape="square"
        style={{ position: "fixed", bottom: "130px", insetInlineEnd: 25 }}
        className="w-7 bg-gradient-to-br !from-[#7B9DF1] !to-[#3C5BF6] shadow-[0_8px_12px_0_rgba(0,8,170,0.16)] !rounded-[36px]"
      >
        <TzFloatButton
          style={{ background: "transparent" }}
          icon={
            <Image
              src={"/images/img-code.png"}
              width={32}
              height={32}
              alt={""}
            />
          }
        />
        <TzFloatButton
          style={{ background: "transparent" }}
          icon={
            <Image src={"/images/phone.png"} width={32} height={32} alt={""} />
          }
        />
        <TzFloatButton
          style={{ background: "transparent" }}
          icon={
            <Image
              src={"/images/ai-service.png"}
              width={32}
              height={32}
              alt={""}
            />
          }
        />
      </TzFloatButtonGroup>
      <TzPageProgress />
    </>
  );
}
