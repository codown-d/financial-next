"use client";
import React, { useState, useEffect } from "react";

import LoginButton from "../UI/login/LoginButton";
import TzNextImage from "../TzNextImage";
import { Button } from "antd-mobile";

const Header = () => {
  return (
    <>
      <header className={"fixed top-0 w-full h-[32px]  z-30 bg-white-500 transition-all "}>
        <nav className="px-4 flex justify-between items-center h-full">
          <div className="flex items-center">
            <TzNextImage src="/images/logo.png" alt="logo" width={31} height={24} />
            <div>
              <div className="text-[10px] font-bold">
              广元市综合金融服务平台
              </div>
              <div className="text-[6px] leading-3 text-[#959595]">
                GUANGYUAN INTEGRATED FINANCIAL SERVICES PLATFORM
              </div>
            </div>
          </div> 
          <div className=" font-medium flex justify-end items-center">
          <Button color='primary'  shape='rounded' size="mini">
          登录/注册
          </Button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
