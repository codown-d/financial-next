import React from "react";
import Lace from "../Lace";
import Image from "next/image";
export default function () {
  return (
    <div className="relative"
    >
      <img
        src={
          "http://ahjr.ah.gov.cn/zhjrfw/resource/newBanner/a80755e4-ee2b-43be-8382-48d1e9e52b50.jpg"
        }
        className="w-full"
      />

      <Lace />
    </div>
  );
}
