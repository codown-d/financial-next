"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Banner from "./UI/Banner";
import TzIcon from "./TzIcon";

const FinancialBusiness = (props) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  let data = [
    {
      name: "我要融资",
      number: "390",
      icon: 'fa-user',
    },
    {
      name: "我要担保",
      number: "20",
      icon: "fa-briefcase",
    },
    {
      name: "应急转贷",
      number: "50",
      icon: "fa-coins",
    },

    {
      name: "电子保函",
      number: "50",
      icon: "fa-clipboard",
    },

    {
      name: "政策查询",
      number: "50",
      icon: "fa-file-contract",
    },
  ];
  return (
    <>
      <motion.div variants={scrollAnimation}>
        <Banner />
      </motion.div>
      <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
        {false && (
          <ScrollAnimationWrapper>
            <motion.div
              className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
              variants={scrollAnimation}
            >
              <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                  Want anything to be easy with <strong>LaslesVPN</strong>.
                </h1>
                <p className="text-black-500 mt-4 mb-6">
                  Provide a network for all your needs with ease and fun using
                  LaslesVPN discover interesting features from us.
                </p>
                <ButtonPrimary>Get Started</ButtonPrimary>
              </div>
              <div className="flex w-full">
                <motion.div
                  className="h-full w-full"
                  variants={scrollAnimation}
                >
                  <Image
                    src="/assets/Illustration1.png"
                    alt="VPN Illustrasi"
                    quality={100}
                    width={612}
                    height={383}
                  />
                </motion.div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        )}
        <div className="relative w-full flex pb-20">
          <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-5 py-4 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
            {data.map((item, index) => (
              <motion.div
                className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                key={index}
                custom={{ duration: 2 + index }}
                variants={scrollAnimation}
              >
                <div className="flex flex-col items-center mx-auto w-40 sm:w-auto">
                  <div className="flex items-center justify-center bg-orange-100 w-14 h-14 mb-6 rounded-full">
                    <TzIcon className={item.icon} />
                  </div>
                  <div className="flex flex-col">
                   
                    <p className="text-lg text-black-500">{item.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </ScrollAnimationWrapper>
          <div
            className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
            style={{ filter: "blur(114px)" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default FinancialBusiness;
