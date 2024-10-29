import TzNextImage from "../TzNextImage";
import { Image } from "antd";

export default function FundContent() {
  return (
    <>
      <div className="text-2xl font-bold mb-4 flex justify-center mb-10">
        基金申请
      </div>
      <div className="flex justify-between items-center px-[46px]">
        <div className="">
          <div className="mb-8 text-[20px] leading-[20px]">请您联系：</div>
          <div className="text-[#3D5AF5] text-[20px] font-bold ">
            0000-0000-000
          </div>
          <div className="text-[#999]">工作日：09:00-18:00 在线</div>
        </div>
        <div>
          <Image
            src="/images/qr-code.png"
            width={182}
            height={182}
            alt=""
            className="rounded-lg"
          />
          {/* <TzNextImage src="/images/qr-code.png" width={182} height={182} /> */}
        </div>
      </div>
    </>
  );
}
