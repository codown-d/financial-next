"use client";
import { FloatButton, FloatButtonGroupProps, FloatButtonProps } from "antd";
import { FloatButtonBadgeProps } from "antd/es/float-button/interface";
import React, { useMemo } from "react";
interface TzFloatButton  extends FloatButtonProps{
  className?: string;
}
export default function TzFloatButton(props: TzFloatButton) {
  const realProps = useMemo(() => {
    return {
      ...props,
      className: `tz-float-button ${props.className}`,
    };
  }, [props]);
  return <FloatButton {...realProps} />;
}
TzFloatButton.Group=(props: FloatButtonGroupProps)=> {
  let {children} = props
  const realProps = useMemo(() => {
    return {
      ...props,
      className: `tz-float-button-group ${props.className}`,
    };
  }, [props]);
  return <FloatButton.Group {...realProps} >{children}</FloatButton.Group>;
}
TzFloatButton.BackTop=(props: FloatButtonBadgeProps)=> {
  const realProps = useMemo(() => {
    return {
      ...props,
      className: `tz-float-button-group ${props.className}`,
    };
  }, [props]);
  return <FloatButton.BackTop {...realProps} />;
}
export const TzFloatButtonGroup=TzFloatButton.Group
export const TzFloatButtonBackTop=TzFloatButton.BackTop