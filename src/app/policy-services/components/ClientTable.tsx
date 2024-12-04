"use client";
import TzTable from "@/components/TzTable";
import { useCallback, useState } from "react";
import PolicyTableItem from "./PolicyTableItem";
export interface DataType {
  id: any;
  title: string;
  add_time: number;
  name: string;
  summary:string;
  policyguid:string;
  rowguid:string
}
interface ClientSideTableProps {
  initialData: DataType[];
  total:number
}

export default function ClientSideTable(props: ClientSideTableProps) {
  let { initialData } = props;
  const [dataSource, setDataSource] = useState(initialData);
  let columns = [
    {
      title: "标题",
      dataIndex: "title",      
      render: (text, row) => <PolicyTableItem {...row} />,
    },
  ];
  return (
    <TzTable<DataType>
      dataSource={dataSource}
      columns={columns}
      rowKey={"id"}
      showHeader={false}
    />
  );
}
