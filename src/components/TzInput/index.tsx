"use client";
import { Input, InputProps } from "antd";
import { InputRef } from "antd/es/input";
import { forwardRef, useMemo } from "react";

interface TzInputProps extends InputProps {}
export default forwardRef<InputRef, TzInputProps>(function TzInput(props: TzInputProps,ref) {
  const realProps = useMemo(() => {
    return {
      ...props,
      className: `tz-input ${props.className || ""}`,
    };
  }, [props]);
  return <Input {...realProps} ref={ref}/>;
})
