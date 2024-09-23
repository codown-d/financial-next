"use client";
import { Card, CardProps, Image } from "antd";
import React, { useMemo } from "react";
import { type } from "os";
interface TzCardProps extends CardProps {}
export default function TzCard(props: TzCardProps) {
  console.log(props)
  const realProps = useMemo(() => {
    return {
      ...props,
      className: `tz-card ${props.className}`,
    };
  }, [props]);
  return <Card {...realProps}></Card>;
}
