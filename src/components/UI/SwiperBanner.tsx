"use client";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { Autoplay, Pagination, Scrollbar, A11y } from "swiper/modules";
import { TzButton } from "../TzButton";
import TzIcon from "../TzIcon";
import { useRouter } from "next/navigation";
import TzNextImage from "../TzNextImage";

const SwiperBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0); // 当前激活的索引
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0); // 当前激活的索引
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const onAutoplayTimeLeft = useCallback((s, time, progress) => {
    setProgress(progress);
  }, []);
  let itemList = ["banner0", "banner1", "banner2"];

  const router = useRouter();
  return (
    <Swiper
      ref={swiperRef}
      className="relative"
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      onSlideChange={(swiper) => {
        setActiveIndex(swiper.activeIndex);
      }}
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 3000, // 自动播放的延迟时间（3秒）
        disableOnInteraction: true, // 用户操作后是否停止自动播放
      }}
    >
      {itemList.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className={`relative  flex  items-center h-[520px] bg-cover bg-center`}
              style={{ backgroundImage: `url('/images/${item}.png')` }}
            >
              {index != 1 ? (
                <div className="flex flex-col px-20">
                  <TzNextImage
                    src={`/images/banner${index}-text.png`}
                    width={798}
                    height={0}
                  />
                  <div>
                    {index!=0?<TzButton
                      shape={"round"}
                      type={"primary"}
                      className="mt-[100px]"
                      icon={
                        <TzIcon
                          className={"fa-arrow-right text-white-500 text-sm"}
                        />
                      }
                      iconPosition={"end"}
                      onClick={() => {
                        router.push(
                          `/product-introduction?id=34`
                        );
                      }}
                    >
                      查看详情
                    </TzButton>:null}
                  </div>
                </div>
              ) : null}
            </div>
          </SwiperSlide>
        );
      })}
      <div className="w-full flex flex-row gap-x-4 justify-center items-center absolute bottom-4 z-10">
        {itemList.map((item, index) => {
          return (
            <div
              key={index}
              className="py-2  cursor-pointer"
              onClick={() => swiperRef.current.swiper.slideTo(index)}
            >
              <div
                className={`w-[40px] h-[4px] bg-[#D8D8D8] rounded-[2px] overflow-hidden ${
                  index < activeIndex ? "!bg-[#7BF1C2]" : ""
                }`}
              >
                {index == activeIndex ? (
                  <div
                    className="bg-[#7BF1C2] h-[4px]"
                    style={{
                      width: `${(1 - progress) * 40}px`,
                    }}
                  ></div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </Swiper>
  );
};

export default SwiperBanner;
