"use client";
import React, { useMemo } from "react";
import Lace from "../Lace";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "@/utils/getScrollAnimation";

export default function () {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="relative bg-[url('/assets/banner.png')] h-[520px] bg-cover bg-center" >
      <motion.h3
        variants={scrollAnimation}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white-300 leading-relaxed  px-20 overflow-hidden "
      >
        <p className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text mt-[18vh]">广元市综合金融服务平台</p>
        <p className="text-accent px-20 py-10">焕新金融服务 赋能实体经济</p>
      </motion.h3>
      {/* <img src={"/assets/banner.png"} className="w-full" /> */}
      {/* <Lace /> */}
    </div>
  );
}
