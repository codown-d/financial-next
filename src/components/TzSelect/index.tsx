"use client";
import React, { forwardRef, useMemo } from "react";
import {  Select } from 'antd';
import type {  SelectProps } from 'antd';


interface TzSelectProps extends SelectProps{}
const TzSelect= forwardRef((props: TzSelectProps,ref?: any)=> {
  const realProps = useMemo(() => {
    return {
      ...props,
      className: `tz-select ${props.className}`,
    };
  }, [props]);
  return <Select {...realProps} ref={ref}/>;
})
export default TzSelect