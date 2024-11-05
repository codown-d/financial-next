"use client";
import { TzTableServerPage } from "@/components/TzTable";
import { useCallback } from "react";

export default function Financing() {
  let columns = [
    {
      title: "发布时间",
      dataIndex: "title",
      sorter: (a, b) => a.age - b.age,
      key: "title",
    },
    {
      title: "金额",
      dataIndex: "title",
      sorter: (a, b) => a.age - b.age,
      key: "title",
    },
    {
      title: "用途",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "期限",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "联系方式",
      dataIndex: "title",
      key: "title",
    },

    {
      title: "受理状态",
      dataIndex: "title",
      key: "title",
    },
  ];
  let getTableData = useCallback(async (pagination) => {
    let res: any = await Promise.resolve();
    return {
      data: [],
      total: 0,
    };
  }, []);
  return (
    <TzTableServerPage columns={columns} rowKey={"id"} reqFun={getTableData} />
  );
}
