"use client";
import { ConfigProvider, Menu } from "antd";
import { Link as LinkScroll } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import TzDropdown from "../TzDropdown";
import { MenuList } from "@/constant";

export default function TzDropdownUI() {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  let items = MenuList.map((item) => {
    let { key, label, children } = item;
    return {
      label: (
        <LinkScroll
          key={key}
          activeClass="active"
          to={key}
          spy={true}
          smooth={true}
          offset={-95}
          onSetActive={() => {
            setActiveLink(key);
          }}
        >
          {label}
        </LinkScroll>
      ),
      key: key,
      children: children?.map((ite) => {
        let { key, label } = ite;
        return {
          label: (
            <Link
              href={key}
              key={key}
              passHref
              className="text-[16px] px-1 py-1 min-w-36"
            >
              {label}
            </Link>
          ),
          key: key,
        };
      }),
    };
  });
  
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            fontSize: 16,
          },
        },
      }}
    >
      <div
        ref={dropdownRef}
        className="flex items-center justify-center text-[16px]"
      >
        {items.map((item, index) => {
          let { label, children } = item;
          return (
            <TzDropdown
              key={index}
              className="w-[160px] h-[60px] text-center leading-[60px] hover:text-white-500 hover:bg-primary-500"
              menu={{ items: children }}
              getPopupContainer={() => dropdownRef.current}
            >
              {label}
            </TzDropdown> 
          );
        })}
      </div>
    </ConfigProvider>
  );
}
