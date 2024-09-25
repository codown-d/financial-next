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
    <div className="bg-white-300 pt-36">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Logo />
          <p className="mb-4 mt-4">公司介绍</p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2  w-14 h-14 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <TzIcon className={"fa-star"} />
            </div>
            <div className="mx-2  w-14 h-14 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <TzIcon className={"fa-cloud"} />
            </div>
            <div className="mx-2 w-14 h-14 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <TzIcon className={"fa-tag"} />
            </div>
          </div>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-6 sm:col-end-8 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">建设单位</p>
          <ul className="text-black-500 ">
            {jsdw.map((item, index) => {
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
        <div className="row-span-2 sm:col-span-2 sm:col-start-8 sm:col-end-10 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">友情链接</p>
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
        <div className="row-span-2 sm:col-span-2 sm:col-start-10 sm:col-end-12 flex flex-col">
          <Image src="/images/qr-code.png" />
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
