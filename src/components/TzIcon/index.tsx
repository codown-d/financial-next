"use client";
import React, { useMemo } from "react";
interface TzIconProps {
  className: string;
}
export default function TzIcon(props: TzIconProps) {
  const realProps = useMemo(() => {
    return {
      ...props,
      className: `tz-icon text-3xl text-primary-100 fa-solid ${props.className}`,
    };
  }, [props]);
  return <i {...realProps}></i>;
}
