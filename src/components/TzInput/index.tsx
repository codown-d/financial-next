"use client";
import { Input, InputProps } from "antd";
import { SearchProps } from "antd/es/input";
import { useMemo } from "react";

interface TzInputProps extends InputProps {}
export default function TzInput(props: TzInputProps) {
  const realProps = useMemo(() => {
    return {
      ...props,
      className: `tz-input ${props.className || ""}`,
    };
  }, [props]);
  return <Input {...realProps} />;
}

interface TzSearchProps extends SearchProps {}
const { Search } = Input;
export const TzSearch = (props: TzSearchProps) => {
  const realProps = useMemo(() => {
    return {
      ...props,
      className: `tz-search ${props.className || ""}`,
    };
  }, [props]);
  return <Search {...realProps} />;
};
