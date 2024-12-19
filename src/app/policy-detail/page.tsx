import TzCard from "@/components/TzCard";
import Title from "@/components/UI/Title";
import { getPolicyByRowguid, getPolicyDetail } from "@/fetch";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Breadcrumb } from "antd";
import ClientFinanceCard from "./components/ClientFinanceCard";
import ClientButton from "./components/ClientButton";
import { timeFormat } from "@/lib";
const apiHost = process.env.NEXT_PUBLIC_API_HOST;
async function getServerSideProps(context) {
  const { policyId} = context;
  const res = await fetch( `${apiHost}/enterprise/service/policy/detail/${policyId}`, { cache: 'no-store' });
  const data = await res.json();
  return data;
}

export default async function ({ searchParams }) {

  const {data} = await getServerSideProps(searchParams);
  console.log(data)
  return (
    <AntdRegistry>
      <div className="bg-[#F8F8F8]">
        <div className="max-w-screen-lg  mx-auto overflow-hidden bg-[#F8F8F8]">
          <Breadcrumb
            items={[{ title: "政策服务" }, { title: "政策详情" }]}
            separator=">"
            className="!mt-5 !mb-5"
          />
          <TzCard>
            <h1 className="text-[20px] font-bold text-center">{data.title}</h1>
            <h2 className="text-[14px] font-bold text-center py-4">{timeFormat(data.add_time)}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.body }} className="content-info"></div>
            <div className="flex justify-center mt-[60px] mb-5">
              <ClientButton/>
            </div>
          </TzCard>
          <Title title="关联产品" className="mb-5 mt-10" />
          <ClientFinanceCard />
        </div>
      </div>
    </AntdRegistry>
  );
}
