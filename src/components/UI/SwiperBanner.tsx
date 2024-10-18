"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css"; // 导入 Swiper 的 CSS
import "swiper/css/pagination";

const SwiperBanner = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<div class="w-[40px] h-[4px] bg-[#D8D8D8] rounded-[2px] opacity-30"></div>`; // 自定义分页内容
        },
      }}
    >
      <SwiperSlide>
        <div className="relative bg-[url('/assets/banner.png')] flex  items-center h-[520px] bg-cover bg-center">
          <motion.h3
            variants={scrollAnimation}
            className="font-bold text-white-300 leading-relaxed  px-20 overflow-hidden "
          >
            <Image
              src={"/images/banner-text.png"}
              alt={""}
              width={798}
              height={0}
            />
          </motion.h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative bg-[url('/images/banner2.png')] flex  items-center h-[520px] bg-cover bg-center"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative bg-[url('/images/banner3.png')] flex  items-center h-[520px] bg-cover bg-center"></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperBanner;
