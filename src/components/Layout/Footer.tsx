import React from "react";
import Logo from "../UI/Logo";
import TzIcon from "../TzIcon";
import { Image } from "antd";
const Footer = () => {
  
  let link = [
    {
      title: "广元市财政局",
      url:'http://sczj.cngy.gov.cn/'
    },
    {
      title: "广元市中小企业金融服务有限公司",
      url:'http://www.gygfct.com/'
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
        <div className="flex w-[320px] justify-between">
          <Image
            src="/images/code1.png"
            width={140}
            height={140}
            alt=""
            className="rounded-lg"
          />
          <Image
            src="/images/code2.png"
            width={140}
            height={140}
            alt=""
            className="rounded-lg"
          />
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-6 sm:col-end-10 flex flex-col">
          <div className="footer-item mb-3">
            联系方式
          </div>
          <div className="text-desc mb-3">客服电话：0839-3617508</div>
          <div className="text-desc mb-3">邮箱：1598436243@qq.com</div>
          <div className="text-desc mb-3">地址：广元市利州区利州东路二段509号康隆财富旺角21楼</div>
        </div>
        {/* <div className="row-span-2 sm:col-span-2 sm:col-start-8 sm:col-end-10 flex flex-col">
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
        </div> */}
        <div className="row-span-2 sm:col-span-2 sm:col-start-10 sm:col-end-12 flex flex-col">
          <p className="footer-item  mb-3">友情链接</p>
          <ul className="text-black-500">
            {link.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-desc mb-3 hover:bg-blue-700"
                >
                  <a href={item.url} target="_blank" className="hover:bg-blue-700">{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center h-[60px] border-t border-[#6A6A6A] mt-6">
        <p className="text-desc">
          备案 蜀ICP备2020029389号- 广元广财企业服务有限公司
        </p>
      </div>
    </div>
  );
};

export default Footer;
