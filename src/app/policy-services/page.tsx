import { TzForm, TzInput } from "@/components";
import { TzButton } from "@/components/TzButton";
import { getHotWordList, getPolicyList } from "@/fetch";
import Compact from "antd/es/space/Compact";
import Image from "next/image";
import ClientSideTable from "./components/ClientTable";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import TzCard from "@/components/TzCard";
import FilterHeader from "@/components/UI/FilterHeader";
import TzSegmented from "@/components/TzSegmented";
import { Span } from "next/dist/trace";
import ItemSort from "@/components/UI/ItemSort";
import { TzCheckableTagNormal } from "@/components/TzCheckableTag";
import { PolicyTags } from "@/constant";
import TzDivider from "@/components/TzDivider";

async function getServerSideProps(context) {
  const { page = 1, pageSize = 10 } = context;
  const res = await getPolicyList({ page, pageSize });
  return {
    items: res.items,
    total: res.items.length,
  };
}
async function getServerHotWordList() {
  const res = await getHotWordList();
  return res;
}

export default async function PolicyServices() {
  const { items: dataSource, total } = await getServerSideProps({
    page: 1,
    pageSize: 10,
  });
  const { items: list } = await getServerHotWordList();

  return (
    <AntdRegistry>
      <div className="relative bg-[#F8F8F8]">
        <div className="h-[320px] relative flex justify-center">
          <Image
            src={"/images/jrcs-banner.png"}
            alt={""}
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="mt-[60px] flex flex-col items-center z-10">
            <Image
              src={"/images/zcfw-title.png"}
              alt={""}
              height={0}
              width={240}
              className="mb-[56px]"
            />
            <Compact className="w-[560px] p-1">
              <TzInput placeholder="请输入你想要搜索的内容" />
              <TzButton type="primary">搜索</TzButton>
            </Compact>
            <div className="mt-2 flex items-start w-full pl-3">
                {list.map((item) => (
                  <span className="mr-6 text-white-500 text-sm">{item}</span>
                ))}
            </div>
          </div>
        </div>
        <div className="max-w-screen-lg  mx-auto overflow-hidden">
          <div className="mb-2 mt-5 ml-3 text-[#999]">
            共{dataSource.length}条结果
          </div>
          <FilterHeader
            className={"!mb-3 !pl-[10px] !py-2"}
            left={
              <TzSegmented
                options={[
                  {
                    label: <span className="px-[38px]">国家级</span>,
                    value: "guojiaji",
                  },
                  {
                    label: <span className="px-[38px]">省级</span>,
                    value: "shenji",
                  },
                  {
                    label: <span className="px-[38px]">市级</span>,
                    value: "shiji",
                  },
                ]}
              />
            }
            right={
              <div className="flex items-center">
                <div className="custom-tag">
                  <TzCheckableTagNormal
                    items={PolicyTags}
                    style={{ padding: "4px 16px", fontSize: 14 }}
                    defaultChecked={["key1"]}
                  />
                </div>
                <TzDivider type={"vertical"} className="!mx-10" />
                <ItemSort label={"发布时间"} className="font-medium" />
              </div>
            }
          />
          <TzCard
            className=" !mt-3 !mb-[96px]"
            style={{ boxShadow: "0px 4px 16px 0px rgba(0,0,0,0.04)" }}
          >
            <ClientSideTable initialData={dataSource} total={total} />
          </TzCard>
        </div>
      </div>
    </AntdRegistry>
  );
}
