"use client"
import { FilterSortEmu } from "@/fetch/definition";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function ItemSort(props: {
  label: React.ReactNode;
  defaultValue?: string;
  className?: string;
  value?: string;
  onChange?: (value: FilterSortEmu) => void;
}) {
  let { label, className } = props;
  let [value, setValue] = useState(props.value || props.defaultValue || FilterSortEmu.All);
  let getIcon = useMemo(() => {
    let obj = { asc: "sort-asc.png", desc: "sort-desc.png", all: "sort.png" };
    return `/images/${obj[value]}`;
  }, [value]);
  useEffect(()=>{
    setValue(props.value)
  },[props.value])
  return (
    <div
      className={`flex items-center cursor-pointer ${className}`}
      onClick={() => {
        let f=value === FilterSortEmu.All?FilterSortEmu.Desc:value === FilterSortEmu.Desc ?FilterSortEmu.Asc : FilterSortEmu.All
        setValue(f);
        props.onChange?.(f);
      }}
    >
      {label} <div className="ml-[6px]"><Image src={getIcon} alt={""} width={16} height={0}></Image></div>
    </div>
  );
}
