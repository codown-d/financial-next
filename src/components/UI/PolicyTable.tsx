"use client";
import { ColumnsType } from "antd/es/table";
import TzTable from "../TzTable";
import { AnyObject } from "antd/es/_util/type";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import { useMemo } from "react";
import getScrollAnimation from "@/utils/getScrollAnimation";

export default function PolicyTable(props: {
  columns: ColumnsType<AnyObject>;
  dataSource: AnyObject[];
}) {
  let { columns, dataSource } = props;
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <ScrollAnimationWrapper>
      <motion.div variants={scrollAnimation}>
        <div className="flex">
          {/* <img src="/assets/banner.png" alt="" className="w-[200px] mr-5"/> */}
          <TzTable key={'policyText'}  dataSource={dataSource} columns={columns} className="w-full" showHeader={false} size="large"/>
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
}
