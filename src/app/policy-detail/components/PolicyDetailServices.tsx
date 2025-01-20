"use client";
import TzCard from "@/components/TzCard";
import Title from "@/components/UI/Title";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Breadcrumb } from "antd";
import ClientFinanceCard from "./ClientFinanceCard";
import ClientButton from "./ClientButton";
import { timeFormat } from "@/lib";
import { find, merge } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getPolicyDetail, themeFeature } from "@/fetch";
import { useSearchParams } from "next/navigation";

export default function () {
    
  let [info, setInfo] = useState<any>({});
  let [feature, setFeature] = useState([]);
  let [theme, setTheme] = useState([]);
  let [hotWords, setHotWords] = useState([]);
  const searchParams = useSearchParams();
  const policyId = searchParams.get('policyId'); // 获取查询参数 body_type
  let getThemeFeature = useCallback(() => {
    themeFeature().then((res) => {
      setFeature(
        res.feature.map((item) => {
          return {
            label: item.name,
            value: item.id,
          };
        })
      );
      setTheme(
        res.theme.map((item) => {
          return {
            label: item.name,
            value: item.id,
          };
        })
      );
      setHotWords(res.hot.map((item) => item.name));
    });
  }, []);
  let data:any = useMemo(() => {
    console.log(info,feature,theme)
    return {
      ...info,
      feature: find(feature, (item) => info?.feature_id == item.id)?.name,
      theme: find(theme, (item) => info?.theme_id == item.id)?.name,
    };
  }, [feature, theme,info]);
  let getData = useCallback(() => {
    getPolicyDetail({ id: policyId }).then((res) => {
      setInfo(res.data
      );
    });
  }, []);
  useEffect(() => {
    getThemeFeature();
    getData();
  }, []);
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
            <h1 className="text-[20px] font-bold text-center">{data?.title}</h1>
            <div className="text-center mt-3">
              <span>
                {data?.area_type_desc ? `层级：${data?.area_type_desc}` : ""}
              </span>
              <span className="mx-5">
                {data.theme ? `主题：${data.theme}` : ""}
              </span>
              <span>{data.feature ? `特色：${data.feature}` : ""}</span>
            </div>
            <h2 className="text-[14px] font-bold text-center pt-4">
              {data.add_time_desc || timeFormat(data.add_time)}
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
          <div className="mb-10"></div>
          {false && (
            <>
              {" "}
              <Title title="关联产品" className="mb-5 " />
              <ClientFinanceCard />
            </>
          )}
        </div>
      </div>
    </AntdRegistry>
  );
}
