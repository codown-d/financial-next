"use client"
import Image from "next/image";
import { useMemo, useState } from "react";

export default function ItemSort(props: {
  label: React.ReactNode;
  defaultValue?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}) {
  let { label, className } = props;
  let [value, setValue] = useState(props.value || props.defaultValue || "sort");

  let getIcon = useMemo(() => {
    let obj = { asc: "sort-asc.png", desc: "sort-desc.png", sort: "sort.png" };
    return `/images/${obj[value]}`;
  }, [value]);
  return (
    <div
      className={`flex items-center cursor-pointer ${className}`}
      onClick={() => {
        let f=value === "sort" ?'desc':value === "desc" ?"asc" : "sort"
        setValue(f);
        props.onChange?.(f);
      }}
    >
      {label} <div className="ml-[6px]"><Image src={getIcon} alt={""} width={16} height={0}></Image></div>
    </div>
  );
}
