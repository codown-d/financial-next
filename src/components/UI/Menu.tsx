"use client";
import { ConfigProvider, Menu } from "antd";
import { Link as LinkScroll } from "react-scroll";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MenuList } from "@/constant";

export default function TzMenuUi() {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
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
          activeClass="active23"
          to={key}
          spy={true}
          smooth={true}
          offset={-95}
          onSetActive={() => {
            setActiveLink(key);
          }}
          className={
            "cursor-pointer animation-hover inline-block relative" +
            (activeLink === key
              ? " text-orange-500 animation-active "
              : " text-black-500 !hover:text-orange-500")
          }
        >
          {label}
        </LinkScroll>
      ),
      key: key,
      children: children.map((ite) => {
        let { key, label } = ite;
        return {
          label: <Link href={key}>{label}</Link>,
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
      <Menu
        className="head-menu !bg-transparent !border-0"
        selectedKeys={[activeLink]}
        mode="horizontal"
        items={items}
        onChange={() => { }}
      />
    </ConfigProvider>
  );
}
