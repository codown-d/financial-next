import { TzForm, TzFormItem } from "@/components";
import { TzButton } from "@/components/TzButton";
import TzCard from "@/components/TzCard";
import { TzCheckableTagNormal } from "@/components/TzCheckableTag";
import TzDivider from "@/components/TzDivider";
import TzNextImage from "@/components/TzNextImage";
import TzSearch from "@/components/TzSearch";
import FilterMarket from "@/components/UI/FilterMarket";
import FinancialSupermarket from "@/components/UI/FinancialSupermarket";
import { FinancialMarket } from "@/constant";
import { TabType } from "@/fetch/definition";
import form from "antd/es/form";
import { filter } from "lodash";


export default function Home() {
  return (
    <>
   <div className="bg-[#F8F8F8]">
        <div className="h-[360px] relative flex-col justify-center">
          <img src={"/images/jrcs-banner.png"} style={{height:'196px'}}/>
          <div className="mt-[50px] flex flex-col items-center z-10">
            <TzNextImage
              src={"/images/jrcs-title.png"}
              height={0}
              width={332}
              className="mb-10"
            />

            <TzSearch
              placeholder="请输入你想要搜索的内容"
              allowClear
              className=""
              enterButton="搜索"
              size={"large"}
            />
          </div>
        </div>
        
      </div>
    </>
  );
}
