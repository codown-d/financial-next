import React from "react";
import Logo from "../UI/Logo";
import TzIcon from "../TzIcon";
import { Image } from "antd";
const Footer = () => {
  
  let link = [
    {
      title: "广元市中小企业金融服务有限公司",
      url:'http://www.gyjrfw.com/'
    },
  ];
  return (
    <div className="bg-[#444343] pt-8 text-white-500">
      <div className="max-w-screen-lg mx-auto flex flex-col items-start ">
        <p className="text-xl">广元综合金融服务平台</p>
        <div className="mb-6 font-normal text-[10px] text-[#959595] leading-[14px]">
          GUANGYUAN INTEGRATED FINANCIAL SERVICES PLATFORM
        </div>
      </div>
      <div className="max-w-screen-lg w-full mx-auto  grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="">
          <Image
            src="/images/qr-code.jpg"
            width={182}
            height={182}
            alt=""
            className="rounded-lg"
          />
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-5 sm:col-end-8 flex flex-col">
          <div className="footer-item  mb-6">
            联系方式
          </div>
          <div className="text-[#7BF1C2] mb-4">0839-3271399</div>
          <div className="text-desc mb-4">邮箱：jrfwjt@163.com</div>
          <div className="text-desc mb-4">地址：四川省广元市利州区利州东路二段509号康隆·财富旺角18楼</div>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-8 sm:col-end-10 flex flex-col">
          <p className="footer-item mb-4">关于我们</p>
          <ul className="text-black-500">
            {[].map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-desc mb-6"
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-10 sm:col-end-12 flex flex-col">
          <p className="footer-item  mb-4">友情链接</p>
          <ul className="text-black-500">
            {link.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-desc mb-6"
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center h-[60px] border-t border-[#6A6A6A] mt-6">
        <p className="text-desc">
          备案 ©2024 - 广元金融服务集团
        </p>
      </div>
    </div>
  );
};

export default Footer;
