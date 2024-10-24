import TzNextImage from "@/components/TzNextImage";
import { Descriptions, DescriptionsProps } from "antd";

export default function ApplicationFail(props: {}) {
  return (
    <div className="flex flex-col items-center bg-fail bg-contain bg-no-repeat bg-top px-10 pt-10">
      <TzNextImage
        src={"/images/fail-icon.png"}
        width={109}
        className="mb-10"
      />
      <div className="font-bold text-2xl text-gray-800 leading-[32px] text-center">
        申请失败
      </div>
      <div className="font-normal text-sm text-gray-400 leading-[21px] text-center mt-[22px] mb-10">
        请检查网络后重试
      </div>
    </div>
  );
}
