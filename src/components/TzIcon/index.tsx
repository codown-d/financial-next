"use client";
import React, { useMemo } from "react";
interface TzIconProps {
  className: string;
}
export default function TzIcon(props: TzIconProps) {
  const realProps = useMemo(() => {
    return {
      ...props,
      className: `tz-icon text-3xl fa-solid ${props.className}`,
    };
  }, [props]);
  return <i {...realProps}></i>;
}
