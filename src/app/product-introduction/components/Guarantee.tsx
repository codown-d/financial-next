import { TzButton } from "@/components/TzButton";
import TzCard from "@/components/TzCard";
import TzDivider from "@/components/TzDivider";
import TzIcon from "@/components/TzIcon";
import DataTypeCom from "@/components/UI/DataTypeCom";
import DataTypeTitleCom from "@/components/UI/DataTypeTitleCom";
import DescInfo from "@/components/UI/DescInfo";
import DescMethod from "@/components/UI/DescMethod";
import LogoInfo from "@/components/UI/LogoInfo";
import { ProductGuaranteeInfo } from "@/constant";

export default function Guarantee() {
  let productInfo = ProductGuaranteeInfo;
  let { logo, imgUrl, title, location, guaranteeMethod } = productInfo;
  return (
    <>
      <TzCard
        className="flex-1 w-full"
        styles={{ body: { padding: "30px 0px" } }}
      >
        <div className="flex">
          <LogoInfo
            size="large"
            logo={logo}
            logoUrl={imgUrl}
            className="w-[184px]"
          />
          <div className="flex flex-row border-l-[1px] flex-1 border-dashed items-center border-[#EEEEEE] pl-[50px]">
            <div className="flex flex-col ">
              <div className="flex mb-5">
                <span className="font-extrabold text-2xl text-[#333333] ">
                  {title}
                </span>
                <span className="ml-5 flex items-center text-[#3D5AF5]">
                  <TzIcon className={"fa-location-dot text-sm mr-[6px]"} />
                  {location}
                </span>
              </div>
              <DescMethod
                method={"担保方式"}
                desc={guaranteeMethod.join("/")}
              />
            </div>
            <div className="flex ml-[136px]">
              <DataTypeCom {...productInfo} />
            </div>
          </div>
          <div className="w-[245px] flex flex-col justify-center items-center">
            <TzButton type={"primary"} shape={"round"} onClick={() => { }}>
              立即申请
            </TzButton>
            <span className="text-xs font-bold mt-5 text-[#999999]">
              84,972 笔需求对接成功
            </span>
          </div>
        </div>
      </TzCard>
      <TzCard className="flex-1 w-full !mt-3">
        <DescInfo title={"担保额度"}>
          <div className="text-[#666]">
            按照相关政策规定，单笔履约保证金缴纳额度（担保额度）为中标合同金额的10%以内
          </div>
          <TzDivider />
        </DescInfo>
        <DescInfo title={"担保期限"}>
          <div className="text-[#666]">与施工期限一致</div>
          <TzDivider />
        </DescInfo>
        <DescInfo title={"服务对象"}>
          <div className="text-[#666]">
            民事权益受到侵害，向司法机关提出诉讼的一方
          </div>
          <TzDivider />
        </DescInfo>
        <DescInfo title={"受益人"}>
          <div className="text-[#666]">我市各级人民法院</div>
          <TzDivider />
        </DescInfo>
        <DescInfo title={"产品介绍"}>
          <div className="text-[#666]">
            在诉讼前或诉讼中，申请人为防止相对人隐逸、转移财产向人民法院申请财产保全，申请人将人民法院要求其提供的可能因财产保全不当给被申请人造成损失的担保，采用为担保机构向人民法院出具的书面保函，由担保机构按照保函约定承担相关义务
          </div>
        </DescInfo>
      </TzCard>
      <TzCard className="flex-1 w-full !mt-3">
        <DescInfo title={"申请资料"}>
          <div className="text-[#666]">
            财产保全申请书、诉状、案件资料、申请人资格资料及其他资料
          </div>
        </DescInfo>
      </TzCard>
    </>
  );
}
