import { TzButton } from "@/components/TzButton";
import TzCard from "@/components/TzCard";
import TzIcon from "@/components/TzIcon";
import DataTypeTitleCom from "@/components/UI/DataTypeTitleCom";
import DescInfo from "@/components/UI/DescInfo";
import LogoInfo from "@/components/UI/LogoInfo";
import { ProductBankInfo, ProductInfo } from "@/constant";

export default function Fund() {
  let productInfo = ProductBankInfo;
  let { logo, imgUrl, title, location } = productInfo;
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
          <div className="flex flex-row border-l-[1px] flex-1 border-dashed border-[#EEEEEE] pl-[50px]">
            <div className="flex flex-col mr-9">
              <div className="flex">
                <span className="font-extrabold text-2xl text-[#333333] ">
                  {title}
                </span>
                <span className="ml-5 flex items-center text-[#3D5AF5]">
                  <TzIcon className={"fa-location-dot text-sm mr-[6px]"} />
                  {location}
                </span>
              </div>

              <div className="flex mt-10 w-[772px] text-[#999]">
                广元广财私募基金公司成立于2023年2月14日，注册资本1500万元，为国有全资公司，已获得中国证券投资基金业协会登记认定的私募投资基金（股权投资、创业投资）管理人牌照（机构编号：P1074549），为第一家注册地在广元市的基金管理人公司主要受托管理广元市产业发展投资引导基金、广元市铝基新材料产业发展基金，同时受托管理各类市场化基金。公司立足金融、服务实体，坚持“依法管理，合规经营，稳步发展，资产增值”的工作思路，围绕全市“1+3+3”优势产业布局，充分发挥政府投资基金的引导和放大作用，引导社会资本投资广元各类产业和基础设施项目，按照市场化方式募集和运营社会资本，支持企业（项目）发展壮大，推动产业转型升级，为全市产业发展服务
              </div>
            </div>
          </div>
          <div className="w-[245px] flex flex-col justify-center items-center">
            <TzButton type={"primary"} shape={"round"} onClick={() => {}}>
              立即申请
            </TzButton>
            <span className="text-xs font-bold mt-5 text-[#999999]">
              84,972 笔需求对接成功
            </span>
          </div>
        </div>
      </TzCard>
      <TzCard className="flex-1 w-full !mt-3">
        <DescInfo title={"基金简介"}>
          <div className="text-[#666]">
            广元市产业发展投资引导基是经市政府批准，财政出资发起设立的政府引导基金，认缴总规模10亿元，于2023年10月完成中国证券投资基金业协会备案，2023年11月完成国家发改委“全国政府出资产业投资基金信用信息登记系统”备案。
            由广元广财私募基金管理有限公司（以下简称广财基金公司）作为基金管理人，负责广元市产业发展投资引导基金（以下简称市产业基金）的募、投、管、退等工作。市产业基金可以直接股权投资具体产业项目(企业），也可以设立子基金、参与国内其它基金，根据实际情况确定投资项目的规模和数量。
            市产业基金重点投资广元市范围内符合产业发展政策的基础产业、主导产业、支柱产业、先导产业、瓶颈产业等各类产业项目（企业），重点关注绿色家居、铝基新材料、食品饮料、清洁能源、装备制造、数字经济及电子信息、生物医药、硅基新材料、猕猴桃、核桃、茶叶、土鸡、肉牛羊、文旅康养、现代商业贸易、现代物流、建筑建材等产业
          </div>
        </DescInfo>
      </TzCard>
    </>
  );
}
