"use client";
import React, { useState, useEffect } from "react";
import Logo from "../UI/Logo";
import TzDropdownUI from "../UI/TzDropdownUI";
import useLoginModal from "../UI/login/LoginModal";
import LoginButton from "../UI/login/LoginButton";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  let {getLoginModal} = useLoginModal()
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : "")
        }
      >
        <nav className="px-10 flex justify-between items-center">
          <div className=" flex items-center">
            <Logo />
            <div className="ml-[5px]">
              <div className="text-2xl leading-6 font-bold">
              广元市综合金融服务平台
              </div>
              <div className="text-xs leading-3 text-[#959595]">
                GUANGYUAN INTEGRATED FINANCIAL SERVICES PLATFORM
              </div>
            </div>
          </div> 
          <TzDropdownUI />
          <div className=" font-medium flex justify-end items-center">
            <LoginButton/>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
