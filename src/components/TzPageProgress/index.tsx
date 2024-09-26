"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import styles from "./index.module.scss";
import { TzFloatButtonBackTop } from "../TzIFloatButton";

const TzPageProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  let width =40;
  let strokeWidth = 4;
  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / totalHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  let getStrokeDasharray = useMemo(() => {
    return Math.PI * 2 * (width / 2);
  }, []);
  return (
    <TzFloatButtonBackTop
      icon={
        <svg width={width + strokeWidth * 2} height={width + strokeWidth * 2}>
          <motion.circle
            cx={width / 2 + strokeWidth}
            cy={width / 2 + strokeWidth}
            r={width / 2}
            stroke={"rgb(245, 56, 85)"}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={getStrokeDasharray}
            strokeDashoffset={
              getStrokeDasharray - (scrollProgress / 100) * getStrokeDasharray
            }
            transition={{ duration: 0.3 }}
          ></motion.circle>
        </svg>
      }
    />
  );
};

export default TzPageProgress;
