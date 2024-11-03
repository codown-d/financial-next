import TzCard from "@/components/TzCard";
import { TzTableServerPage } from "@/components/TzTable";
import { getProxyApplyPolicyList } from "@/fetch";
import { ColumnsType } from "antd/es/table";
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
  let columns2: ColumnsType<any> = [
    {
      title: "机构名称",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "金额",
      dataIndex: "title",
      sorter: (a, b) => a.age - b.age,
      key: "title",
    },

    {
      title: "申请时间",
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
  return (
    <>
      <TzCard>
        <div className="text-[20px] mb-[26px]">我的需求</div>
        <TzTableServerPage
          columns={columns}
          rowKey={"id"}
          reqFun={getTableData}
        />
      </TzCard>
      <TzCard className="mt-3">
        <div className="text-[20px] mb-[26px]">我的申请</div>
        <TzTableServerPage
          columns={columns2}
          rowKey={"id"}
          reqFun={getTableData}
        />
      </TzCard>
    </>
  );
}
