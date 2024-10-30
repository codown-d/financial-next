import TzCard from "@/components/TzCard";
import Title from "@/components/UI/Title";
import { getPolicyByRowguid } from "@/fetch";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Breadcrumb } from "antd";
import ClientFinanceCard from "./components/ClientFinanceCard";
import ClientButton from "./components/ClientButton";

async function getServerSideProps(context) {
  const { params, token } = context;
  const res: any = await getPolicyByRowguid({
    params,
    token,
  });
  return res;
}

export default async function ({ searchParams }) {
  const { custom, status } = await getServerSideProps({
    params: searchParams,
    token: "epoint_webserivce_**##0601",
  });
  return (
    <AntdRegistry>
      <div className="bg-[#F8F8F8]">
        <div className="max-w-screen-lg  mx-auto overflow-hidden bg-[#F8F8F8] pb-[140px]">
          <Breadcrumb
            items={[{ title: "政策服务" }, { title: "政策详情" }]}
            separator=">"
            className="!mt-5 !mb-5"
          />
          <TzCard>
            <div dangerouslySetInnerHTML={{ __html: custom.content }}></div>
            <div className="flex justify-center mt-[60px] mb-5">
              <ClientButton />
            </div>
          </TzCard>
          <Title title="关联产品" className="mb-5 mt-10" />
          <ClientFinanceCard />
        </div>
      </div>
    </AntdRegistry>
  );
}
