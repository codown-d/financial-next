import TzNextImage from "@/components/TzNextImage";
import { Descriptions, DescriptionsProps } from "antd";

export default function ApplicationSuccess(props: {
  items: DescriptionsProps["items"];
}) {
  let { items } = props;
  return (
    <div className="flex flex-col items-center bg-success bg-contain bg-no-repeat bg-top px-10 pt-10">
      <TzNextImage src={"/images/succ-icon.png"} width={109} className="mb-10"/>
      <div className="font-bold text-2xl text-gray-800 leading-[32px] text-center">
        申请已成功提交
      </div>
      <div className="font-normal text-sm text-gray-400 leading-[21px] text-center mt-[22px] mb-10">
        请保持电话畅通，在三个工作日内将有工作人员与您联系
      </div>
      <div className="bg-[#F9F9F9] rounded-[14px] py-5">
        <Descriptions
          items={items}
          column={1}
          colon={false}
          labelStyle={{
            width: "140px",
            display:'flex',
            alignItems:'end',
            justifyContent:'end',
            paddingRight:8
          }}
        />
      </div>
    </div>
  );
}
