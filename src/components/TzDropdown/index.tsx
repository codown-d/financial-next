"use client";
import { Dropdown, DropdownProps } from "antd";
import React, { useMemo } from "react";
interface TzDropdownProps extends DropdownProps {}
export default function TzDropdown(props: TzDropdownProps) {
  let { children } = props;
  const realProps = useMemo(() => {
    return {
      ...props,
      className: `tz-dropdown ${props.className}`,
    };
  }, [props]);
  return <Dropdown {...realProps}>{children}</Dropdown>;
}
