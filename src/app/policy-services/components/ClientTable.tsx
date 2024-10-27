"use client";
import TzTable from "@/components/TzTable";
import { useState } from "react";
import PolicyTableItem from "./PolicyTableItem";
export interface DataType {
  id: any;
  title: string;
  time: number;
  desc: string;
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
  const CustomBody: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <tbody style={{ borderRadius:'16px',overflow:'hidden'}}>
        {children}
      </tbody>
    );
  };
  return (
    <TzTable<DataType>
      dataSource={dataSource}
      columns={columns}
      rowKey={"id"}
      showHeader={false}
    />
  );
}
