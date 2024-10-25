"use client";
import { TzInput } from "@/components";
import { TzButton } from "@/components/TzButton";
import TzTable from "@/components/TzTable";
import PolicyTableItem from "@/components/UI/PolicyTableItem";
import { fetchData } from "@/utils/fetchData";
import { Space } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
export interface DataType {
  id: any;
  title: string;
  time: number;
  desc: string;
}
export default function PolicyServices() {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    fetchData("/api/realDataEndpoint").then((data) =>
      setDataSource(data.items)
    );
  }, []);
  let columns = [
    {
      title: "标题",
      dataIndex: "title",
      render: (text, row) => <PolicyTableItem {...row} />,
    },
  ];
  return (
    <div className="relative bg-[#F8F8F8]">
      <div className="h-[360px] relative flex justify-center">
        <Image
          src={"/images/jrcs-banner.png"}
          alt={""}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="mt-[50px] flex flex-col items-center z-10">
          <Image
            src={"/images/zcfw-title.png"}
            alt={""}
            height={0}
            width={240}
            className="mb-10"
          />

          <Space.Compact className="w-[560px] p-1">
            <TzInput placeholder="请输入你想要搜索的内容" />
            <TzButton type="primary">搜索</TzButton>
          </Space.Compact>
        </div>
      </div>
      <div className="max-w-screen-lg  mx-auto ">
        <TzTable<DataType>
          dataSource={dataSource}
          columns={columns}
          rowKey={"id"}
          showHeader={false}
        />
      </div>
    </div>
  );
}
