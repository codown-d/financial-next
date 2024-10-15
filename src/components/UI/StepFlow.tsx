import React from "react";
import Image from "next/image";

const steps = [
  { id: 1, title: "发布需求", number: "01" },
  { id: 2, title: "贷款审批", number: "02" },
  { id: 3, title: "贷款发放", number: "03" },
];

const StepFlow = () => {
  return (
    <div className="flex items-end justify-center ">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className="relative flex flex-col items-center  rounded  w-[88px] mx-4">
            <div className="text-[32px] font-bold text-left w-full  pl-4 text-[#3C5BF6] leading-[40px] pb-5">
              {step.number}
            </div>
            <div
              className="mt-2 w-full rounded-lg text-center absolute bottom-0 leading-[14px] bg-opacity-10 backdrop-blur-sm "
              style={{
                background: "rgba(46, 69, 195,0.14)",
                padding: "10px 0",
                zIndex: 9,
              }}
            >
              {step.title}
            </div>
          </div>
          {index < steps.length - 1 && (
            <Image src={"/images/sw.png"} alt={""} width={72} height={28} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepFlow;
