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
      label: label,
      key: key,
      children: children?.map((ite) => {
        let { key, label } = ite;
        return {
          label: <Link href={key}>{label}</Link>,
          key: key,
        };
      }),
    };
  });
  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: "#3C5BF6",
      },
    }}>
      <Menu
        className="header-menu !bg-transparent !border-0"
        selectedKeys={[activeLink]}
        mode="horizontal"
        onChange={() => {}}
      >
        {items.map((item) => {
          return (
            <Menu.Item
              key={item.key}
              title={item.label}
              className="leading-[60px] w-[100px] text-center hover:!bg-[#3C5BF6] hover:!text-[#fff] font-bold"
            >
              {item.label}
            </Menu.Item>
          );
        })}
      </Menu>
    </ConfigProvider>
  );
}
