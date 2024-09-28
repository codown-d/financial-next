"use client";
import React from "react";
import Meta from "antd/es/card/Meta";
import { getColorScale } from "@/lib";
import TzCard, { TzCardProps } from "../TzCard";
interface CardColorProps extends TzCardProps {
  imgUrl?: any;
  avatar?: any;
  title?: any;
  description?: any;
}
export default function (props: CardColorProps) {
  let { imgUrl, avatar, title, description, ...otherProps } = props;
  const randomNumber = Math.floor(Math.random() * 10);
  let bg = getColorScale(randomNumber);
  return (
    <>
      <TzCard
        style={{ backgroundColor: bg }}
        {...otherProps}
        hoverable
        className={"!p-10 !bg-imgbg !text-white !bg-no-repeat !bg-cover"}
      >
        <Meta title={<span className="text-lg text-white-500">{title}</span>} />
      </TzCard>
    </>
  );
}
