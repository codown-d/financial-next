"use client";
import { Table, TableProps } from "antd";
import React, { useMemo } from "react";
interface TzTableProps extends TableProps {}
export default function TzTable(props: TzTableProps) {
  const realProps = useMemo(() => {
    return {
      ...props,
      className: `tz-table ${props.className}`,
    };
  }, [props]);
  return <Table {...realProps}/>;
}