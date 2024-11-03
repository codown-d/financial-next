"use client";
import TzCard from "@/components/TzCard";
import TzTag from "@/components/TzCheckableTag";
import TzIcon from "@/components/TzIcon";
import TzNextImage from "@/components/TzNextImage";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PersonalCenterLayout(props) {
  let { children } = props;
  let items = [
    { key: "user", label: "个人中心" },
    { key: "financing", label: "融资管理" },
    { key: "real-name", label: "实名认证" },
    { key: "enterprise", label: "企业认证" },
    { key: "account", label: "账户信息" },
  ];
  const { id } = useParams();
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState(id);

  useEffect(() => {
    const segments = pathname.split("/");
    const lastSegment = segments.pop() || segments[segments.length - 1];
    setActiveItem(lastSegment);
  }, [pathname]);
  return (
    <AntdRegistry>
    <div className="bg-[#F8F8F8] h-full pt-3 pb-[90px]">
      <div className="flex-r-c max-w-screen-lg !items-start  mx-auto">
        <TzCard className="w-[240px]" styles={{ body: { padding: "14px" } }}>
          <div className="flex-c-c">
            <div className="text-[20px]">用户名</div>
            <div className="mt-[10px] mb-[20px]">180 **** 0000</div>
            <div className="flex-r-c !flex">
              <TzTag
                icon={
                  <TzNextImage
                    src={"/images/smrz-icon.png"}
                    width={16}
                    height={0}
                  />
                }
                color="#FFEEE3"
                style={{ color: "#FF9958", fontWeight: "bold" }}
              >
                &nbsp;实名
              </TzTag>
              <TzTag
                icon={
                  <TzNextImage
                    src={"/images/qyrz-icon.png"}
                    width={16}
                    height={0}
                  />
                }
                className="ml-3 flex-r-c !flex"
                color="#F0F3FF"
                style={{ color: "#3D5AF5", fontWeight: "bold" }}
              >
                &nbsp;企业
              </TzTag>
            </div>
            <div className="w-full mt-8">
              {items.map((item) => {
                return (
                  <Link href={`/personal-center/${item.key}`} key={item.key}>
                    <div
                      className={`hover:text-[#3D5AF5] hover:bg-[rgba(61,90,245,0.1)] flex h-[44px] leading-[44px] w-full pl-[10px] ${
                        activeItem === item.key ? "active-item" : ""
                      }`}
                      onClick={() => {
                        setActiveItem(item.key);
                      }}
                    >
                      {item.label}
                    </div>{" "}
                  </Link>
                );
              })}
            </div>
          </div>
        </TzCard>
        <div className="flex-1 w-0 ml-3">{children}</div>
      </div>
    </div>
    </AntdRegistry>
  );
}
