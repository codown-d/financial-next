"use client";
import { useCallback, useMemo, useState } from "react";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { motion } from "framer-motion";
import PolicyTable from "./PolicyTable";
import { TzParagraph, TzTitle } from "../TzTypography";
import TitleBg from "./TitleBg";
import Image from "next/image";
import SeeMore from "./SeeMore";
import PublicServicesDes from "./PublicServicesDes";
import { TzButton } from "../TzButton";
import TzIcon from "../TzIcon";
import { PolicyData } from "@/constant";
import styles from "./ui.module.scss";
import { useRouter } from "next/navigation";
import TzTable from "../TzTable";
import { DataType } from "./PolicyList";

export default function PolicyTableItem(props: DataType) {
  let { title, desc, time, id } = props;
  return (
    <div>
      <div className="font-medium text-[20px] text-[#333333] leading-[20px]">
        {title}
      </div>
      <div className="text-[#999] text-xs">{desc}</div>
      <div className="flex items-center justify-between">
        <span>{time}</span>
        <TzButton
          type="text"
          icon={<TzIcon className={"fa-arrow-right text-white-500 text-sm"} />}
          iconPosition={"end"}
        >
          查看详情
        </TzButton>{" "}
      </div>
    </div>
  );
}
