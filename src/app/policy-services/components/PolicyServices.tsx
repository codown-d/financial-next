"use client";
import Image from "next/image";
import TzCard from "@/components/TzCard";
import FilterHeader from "@/components/UI/FilterHeader";
import TzSegmented from "@/components/TzSegmented";
import ItemSort from "@/components/UI/ItemSort";
import { TzCheckableTagNormal } from "@/components/TzCheckableTag";
import { PolicyTags } from "@/constant";
import TzDivider from "@/components/TzDivider";
import { useCallback, useState } from "react";
import { TzTableServerPage } from "@/components/TzTable";
import PolicyTableItem from "./PolicyTableItem";
import { getApplyPolicyList, getProxyApplyPolicyList } from "@/fetch";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import TzSearch from "@/components/TzSearch";
import { FilterSortEmu } from "@/fetch/definition";
export interface DataType {
  id: any;
  title: string;
  publishdate: number;
  name: string;
}

export default function PolicyServices(props: any) {
  let { hotWords, initialData, total } = props;
  const [dataTotal, setDataTotal] = useState(total);
  const [lawlevel, setLawlevel] = useState(10);
  const [taskname, setTaskname] = useState("");
  const [orderfrom, setOrderfrom] = useState(FilterSortEmu.Desc);

  let getTableData = useCallback(
    async (pagination) => {
      const { current = 1, pageSize = 10 } = pagination;
      let res: any = await getProxyApplyPolicyList({
        params: {
          currentpage: current - 1,
          pagesize: pageSize,
          lawlevel: lawlevel,
          lawtheme: "",
          applicableindustry: "",
          taskname: taskname,
          orderfrom: orderfrom,
          areacode: "",
          publishdatetype: "",
          publishdatefrom: "",
          publishdateto: "",
          msjxType: "",
          area: "",
          ouguid: "",
        },
        token: "epoint_webserivce_**##0601",
      });
      return {
        data: res.custom.list,
        total: res.custom.totalnum,
      };
    },
    [lawlevel, taskname, orderfrom]
  );
  let columns = [
    {
      title: "标题",
      dataIndex: "title",
      render: (text, row) => <PolicyTableItem {...row} />,
    },
  ];
  return (
    <AntdRegistry>
      <div className="relative bg-[#F8F8F8]">
        <div className="h-[320px] relative flex justify-center">
          <Image
            src={"/images/zc-banner.png"}
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
            <TzSearch
              placeholder="请输入你想要搜索的内容"
              allowClear
              className="!w-[560px] p-1"
              enterButton="搜索"
              size={"large"}
              onSearch={(val) => setTaskname(val)}
            />
            <div className="mt-2 flex items-start w-full pl-3">
              {hotWords.map((item, index) => (
                <span className="mr-6 text-white-500 text-sm" key={index}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-screen-lg  mx-auto overflow-hidden">
          <div className="mb-2 mt-5 ml-3 text-[#999]">共{dataTotal}条结果</div>
          <FilterHeader
            className={"!mb-3 !pl-[10px] !py-2"}
            left={
              <TzSegmented
                onChange={(val: number) => {
                  setLawlevel(val);
                }}
                options={[
                  {
                    label: <span className="px-[38px]">国家级</span>,
                    value: 10,
                  },
                  {
                    label: <span className="px-[38px]">省级</span>,
                    value: 20,
                  },
                  {
                    label: <span className="px-[38px]">市级</span>,
                    value: 30,
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
                <ItemSort
                  label={"发布时间"}
                  className="font-medium"
                  onChange={(val) => {
                    setOrderfrom(
                      val == FilterSortEmu.Asc
                        ? FilterSortEmu.Asc
                        : FilterSortEmu.Desc
                    );
                  }}
                />
              </div>
            }
          />
          <TzCard
            className=" !mt-3 !mb-[96px]"
            style={{ boxShadow: "0px 4px 16px 0px rgba(0,0,0,0.04)" }}
          >
            <TzTableServerPage
              initialData={initialData}
              columns={columns}
              rowKey={"item_id"}
              showHeader={false}
              reqFun={getTableData}
            />
          </TzCard>
        </div>
      </div>
    </AntdRegistry>
  );
}
