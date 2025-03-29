"use client";
import Image from "next/image";
import TzFloatButton, { TzFloatButtonGroup } from "../../TzIFloatButton";
import TzPageProgress from "../../TzPageProgress";
import { FloatButton, Modal } from "antd";
import SmartMatch from "../SmartMatch";
import { useState } from "react";
export default function ActionAffix() {
  let [open, setOpen] = useState(false);
  let insetInlineEnd = 25
  return (
    <>
      <FloatButton
        style={{ position: "fixed", bottom: "270px", insetInlineEnd,padding:0}}
        icon={<Image src={`/images/ai.svg`} height={52} width={52} alt={""} />}
      />
      <TzFloatButtonGroup
        shape="square"
        style={{ position: "fixed", bottom: "130px", insetInlineEnd}}
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
              onClick={() => {
                Modal.info({
                  title: null,
                  width: 500,
                  icon: null,
                  content: (
                    <div className="flex justify-between ">
                      <div>
                        <div className="text-[24px] font-bold  pl-2">
                          广元金服
                        </div>
                        <Image
                          src="/images/code1.png"
                          width={200}
                          height={200}
                          alt=""
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <div className="text-[24px] font-bold pl-2">
                          广财企服
                        </div>
                        <Image
                          src="/images/code2.png"
                          width={200}
                          height={200}
                          alt=""
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  ),
                  okText: "关闭",
                  onOk() {},
                });
              }}
            />
          }
        />
        <TzFloatButton
          style={{ background: "transparent" }}
          icon={
            <Image
              src={"/images/phone.png"}
              width={32}
              height={32}
              alt={""}
              onClick={() => {
                Modal.info({
                  title: "联系电话",
                  width: 500,
                  icon: null,
                  content: (
                    <div className="flex text-[24px] font-bold ">
                      0839-3617508
                    </div>
                  ),
                  okText: "关闭",
                  onOk() {},
                });
              }}
            />
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
          onClick={() => {
            setOpen(true);
          }}
        />
      </TzFloatButtonGroup>
      <SmartMatch open={open} setOpen={setOpen} />
      <TzPageProgress />
    </>
  );
}
