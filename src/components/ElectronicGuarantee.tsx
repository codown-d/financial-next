"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Loan from "./UI/Loan";
import TzCard from "./TzCard";
import Meta from "antd/es/card/Meta";
import { Span } from "next/dist/trace";

export default function ElectronicGuarantee() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  let list = [
    {
      imgUrl: "/images/gcdb-logo.jpg",
      title: "履约保函",
      rateDown: "3.10",
      rateUp: "3.90",
    },
    {
      imgUrl: "/images/gcdb-logo.jpg",
      title: "农民工工资保函",
      rateDown: "3.10",
      rateUp: "3.90",
    },
    {
      imgUrl: "/images/gcdb-logo.jpg",
      title: "财产保全保函",
      rateDown: "3.10",
      rateUp: "3.90",
    },
    {
      imgUrl: "/images/gcdb-logo.jpg",
      title: "保函定制",
      rateDown: "3.10",
      rateUp: "3.90",
    },
  ];

  return (
    <div id='guaranteeServices' className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14">
      <div className="max-w-screen-lg  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              电子保函
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              让我们选择最适合您的套餐，并愉快地探索它。
            </motion.p>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.div
              className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-4 gap-4 lg:gap-8 py-8 lg:py-8 "
              variants={scrollAnimation}
            >
              {list.map((item, index) => {
                let { imgUrl, title, rateDown, rateUp } = item;
                return (
                  <TzCard
                    key={index}
                    hoverable
                    cover={<img alt="example" src={imgUrl} className=" !w-4/5 mx-auto" />}
                  >
                    <Meta
                      title={<span className="text-lg">{title}</span>}
                      description={
                        <div className="flex items-end mt-2">
                          费率：
                          <div className="flex items-center">
                            <span className="text-primary-100 text-3xl mr-2">
                              {rateDown}
                            </span>
                            —
                            <span className="text-primary-100  text-3xl  ml-2 mr-2">
                              {rateUp}
                            </span>
                          </div>{" "}
                          %
                        </div>
                      }
                    />
                  </TzCard>
                );
              })}
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
}
