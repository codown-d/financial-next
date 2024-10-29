import TzNextImage from "@/components/TzNextImage";
import Image from "next/image";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { getInvestmentList } from "@/fetch";
import ClientButton from "./components/ClientButton";
import ClientSideTable from "./components/ClientTable";

async function getServerSideProps(context) {
  const { page = 1, pageSize = 10 } = context;
  const res = await getInvestmentList();
  return {
    items: res.items,
    total: res.items.length,
  };
}
export default async function EquityInvestment() {
  const { items: dataSource, total } = await getServerSideProps({
    page: 1,
    pageSize: 10,
  });
  return (
    <AntdRegistry>
      <div className="relative bg-white-500">
        <div className="h-[320px] relative flex justify-center">
          <Image
            src={"/images/zcsj-banner.png"}
            alt={""}
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="flex flex-col items-center justify-center z-10">
            <TzNextImage
              src={"/images/zcsj-title.png"}
              height={0}
              width={360}
              className="mt-3"
            />
          </div>
        </div>
        <div className="max-w-screen-lg  mx-auto pb-[112px]">
          <div className="flex items-center justify-between mt-[60px] mb-10">
            <div className="flex">
              <div>
                <TzNextImage
                  src={"/images/gxxd.png"}
                  width={80}
                  height={80}
                  className="ml-8 mr-6"
                />
              </div>
              <div>
                <div className="text-[32px] text-[#333] font-bold mb-4 leading-[32px]">
                  广财企服
                </div>
                <div className="text-[14px]">
                  深圳数据交易所四川数据要素服务广元分站&nbsp;&nbsp;
                  地址：四川省广元市xxxx区xxxx街道xx号
                </div>
              </div>
            </div>
            <ClientButton />
          </div>
          <ClientSideTable initialData={dataSource} />
        </div>
      </div>
    </AntdRegistry>
  );
}
