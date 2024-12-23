import TzCard from "@/components/TzCard";
import Title from "@/components/UI/Title";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Breadcrumb } from "antd";
import ClientFinanceCard from "./components/ClientFinanceCard";
import ClientButton from "./components/ClientButton";
import { timeFormat } from "@/lib";
import { find, merge } from "lodash";
const apiHost = process.env.NEXT_PUBLIC_API_HOST;
async function getServerSideProps(context) {
  const { policyId } = context;
  const res = await fetch(
    `${apiHost}/enterprise/service/policy/detail/${policyId}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  const feature_theme = await fetch(
    `${apiHost}/admin/policy/theme/feature/list`,
    { cache: "no-store" }
  );
  const { feature, theme } = await feature_theme.json();
  console.log(data.data.feature_id, data.data.theme_id);
  return merge(data, {
    data: {
      feature: find(feature, (item) => data.data.feature_id == item.id)?.name,
      theme: find(theme, (item) => data.data.theme_id == item.id)?.name,
    },
  });
}

export default async function ({ searchParams }) {
  const { data } = await getServerSideProps(searchParams);
  console.log(data.theme);
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
            <div className="text-center mt-3">
              <span>
                {data.area_type_desc ? `层级：${data.area_type_desc}` : ""}
              </span>
              <span className="mx-5">
                {data.theme ? `主题：${data.theme}` : ""}
              </span>
              <span>{data.feature ? `特色：${data.feature}` : ""}</span>
            </div>
            <h2 className="text-[14px] font-bold text-center pt-4">
              {timeFormat(data.add_time)}
            </h2>
            <div className="text-center py-4">
              来源：
              <a href={data.url} className="text-[#436fbd]">
                {data.url}
              </a>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: data.body }}
              className="content-info flex justify-center"
            ></div>
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
