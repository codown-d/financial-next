import React from "react";
import Logo from "../UI/Logo";
import TzIcon from "../TzIcon";
import { Image } from "antd";
const Footer = () => {
  let jsdw = [
    {
      title: "关于我们",
    },
    {
      title: "关于我们",
    },
    {
      title: "关于我们",
    },
    {
      title: "关于我们",
    },
  ];
  let link = [
    {
      title: "友情链接",
    },
    {
      title: "友情链接",
    },
    {
      title: "友情链接",
    },
    {
      title: "友情链接",
    },
  ];
  return (
    <div className="bg-[#444343] pt-8 text-white-500">
      <div className="max-w-screen-lg w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <p className="text-xl">广元综合金融服务平台</p>
          <div className="mb-6 ">GUANGYUAN INTEGRATED</div>
          <Image src="/images/qr-code.png" width={182} height={182} alt="" />
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-6 sm:col-end-8 flex flex-col">
          <div className="text-black-600 mb-4 font-medium text-lg">
            联系方式
          </div>
          <div className="text-[#7BF1C2] mb-4">0000-0000-000</div>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-8 sm:col-end-10 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">关于我们</p>
          <ul className="text-black-500">
            {link.map((item, index) => {
              return (
                <li
                  key={index}
                  className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                >
                  {item.title}
                  {index}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center pt-16 mb-12">
        <p className="text-gray-400">
          备案 ©{new Date().getFullYear()} - 广元金融服务集团
        </p>
      </div>
    </div>
  );
};

export default Footer;
