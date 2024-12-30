"use client";
import { TzTableServerPage } from "@/components/TzTable";
import { applyList, financeList } from "@/fetch";
import { useCallback } from "react";
import { ProColumns, ProTable } from "@ant-design/pro-components";
import { action_status_filter, data_type, purpose, term } from "@/constant";

export default function Financing() {
  let columns: ProColumns<any>[] = [
    {
      title: "机构名称",
      dataIndex: ['financial_organs','organs_name'],
    },
    {
      title: "产品名称",
      dataIndex: ['product','name'],
    },
    {
      title: "担保方式",
      dataIndex: 'guarantee_method',
      valueEnum: {...data_type,0:'-'},
    },
    {
      title: "金额",
      dataIndex: "apply_money",
      sorter: (a, b) => a.apply_money - b.apply_money,
      render(text, record) {
        return record.apply_money + "万元";
      },
    },
    {
      title: "申请时间",
      dataIndex: "add_time",
      valueType: "dateTime",
      sorter: (a, b) => a.add_time - b.add_time,
    },
    {
      title: "用途",
      dataIndex: "purpose",
      valueEnum: {...purpose,0:'-'},
    },
    {
      title: "期限",
      dataIndex: "term_desc",
     
    },
    {
      title: "联系方式",
      dataIndex: "title",
      render(text, record) {
        return record.user.user_name;
      },
    },

    {
      title: "受理状态",
      dataIndex: "action_status",
      valueEnum: action_status_filter,
    },
  ];
  return (
    <ProTable<any>
      columns={columns}
      request={async (params, sorter, filter) => {
        let res = await applyList();
        return {
          data: res.dataList,
          success: true,
        };
      }}
      rowKey="id"
      search={false}
    />
  );
}
