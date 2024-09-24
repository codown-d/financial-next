import React from "react";
import Lace from "../Lace";
import Image from "next/image";

export default function () {
  return (
    <div className="relative">
      <img src={"/assets/banner.png"} className="w-full" />
      <Lace />
    </div>
  );
}
