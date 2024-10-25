"use client";
import { Table, TableProps } from "antd";
import React, { useMemo } from "react";
interface TzTableProps<T> extends TableProps<T> {}
export default function TzTable<T extends object>(props: TzTableProps<T>) {
  const realProps = useMemo(() => {
    return {
      ...props,
      className: `tz-table ${props.className}`,
    };
  }, [props]);
  return <Table<T> {...realProps} />;
}
