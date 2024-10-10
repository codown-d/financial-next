"use client";
import React, { useMemo } from "react";
import Lace from "../Lace";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "@/utils/getScrollAnimation";

export default function () {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="relative bg-[url('/assets/banner.png')] flex  items-center h-[520px] bg-cover bg-center" >
      <motion.h3
        variants={scrollAnimation}
        className="font-bold text-white-300 leading-relaxed  px-20 overflow-hidden "
      >
        <Image src={"/images/banner-text.png"} alt={""} width={798} height={0} />
       </motion.h3>
    </div>
  );
}
