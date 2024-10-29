"use client";
import TzTable from "@/components/TzTable";
import { useState } from "react";
import { InvestmentListProps } from "@/fetch";
import { ConfigProvider } from "antd";

enum AlignType {
  left = "left",
  right = "right",
  center = "center",
}
interface ClientSideTableProps {
  initialData: InvestmentListProps[];
  total?: number;
}

export default function ClientSideTable(props: ClientSideTableProps) {
  let { initialData } = props;
  const [dataSource, setDataSource] = useState(initialData);
  let columns = [
    {
      title: "序号",
      dataIndex: "index",
      width: "10%",
      align: AlignType.center,
      render: (text, row, index) => (
        <span className="font-bold text-[14px] text-primary-400">
          {index < 9 ? `0${index + 1}` : index + 1}{" "}
        </span>
      ),
    },
    {
      title: "数据资源梳理盘点",
      dataIndex: "resource",
      width: "16%",
      render: (text, row) => (
        <span className="font-bold text-[14px]">{text} </span>
      ),
    },
    {
      title: "内容模块",
      dataIndex: "module",
      align: AlignType.center,
      render: (text, row) => (
        <span className="font-bold text-[12px] text-[#999] !text-left flex leading-5">
          {text}
        </span>
      ),
    },
    {
      title: "数据资源梳理盘点",
      dataIndex: "resource2",
      width: "20%",
      render: (text, row) => (
        <span className="font-bold flex flex-col">
          {text.map((item, index) => (
            <span className="before-cir" key={index}>
              {item}
            </span>
          ))}{" "}
        </span>
      ),
    },
  ];
  const CustomHeader: React.FC<{ children: React.ReactNode }> = ({
    children,
    ...restProps
  }) => {
    return (
      <th
        {...restProps}
        className="!py-[11px] before:!w-0 !bg-transparent !text-white-500"
      >
        {children}
      </th>
    );
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            padding: 30,
          },
        },
      }}
    >
      <TzTable<InvestmentListProps>
        dataSource={dataSource}
        columns={columns}
        rowKey={"id"}
        pagination={false}
        className="custom-header shadow-md rounded-2xl overflow-hidden"
        onRow={(record, rowIndex) => ({
          style: {
            background:
              rowIndex % 2 == 1
                ? "linear-gradient( 270deg, rgba(92, 193, 220, 0.08) 0%, rgba(60, 91, 246, 0.08) 100%)"
                : "#fff",
          },
        })}
        components={{
          header: {
            cell: CustomHeader,
          },
        }}
      />
    </ConfigProvider>
  );
}
