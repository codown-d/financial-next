"use client";
import TzCard from "@/components/TzCard";
import TzTag from "@/components/TzCheckableTag";
import TzNextImage from "@/components/TzNextImage";
import { useGlobalContext } from "@/hooks/GlobalContext";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function PersonalCenterLayout(props) {
  let { children } = props;
  let items = [
    { key: "user", label: "个人中心" },
    // { key: "financing", label: "融资管理" },
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

  let { userInfo } = useGlobalContext();
  let getUserStatus = useMemo(() => {
    let obj = {
      1: {
        label: "未认证",
        color: "#EEEEEE",
        imgUrl:'/images/wsmrz-icon.png',
        style: { color: "#999", fontWeight: "bold" },
      },
      2: {
        label: "认证审核中",
        color: "#EEEEEE",
        imgUrl:'/images/wsmrz-icon.png',
        style: { color: "#999", fontWeight: "bold" },
      },
      3: {
        label: "认证通过",
        imgUrl:'/images/smrz-icon.png',
        color: "#FFEEE3",
        style: { color: "#FF9958", fontWeight: "bold" },
      },
    };
    return obj[userInfo?.verify_status];
  }, [userInfo]);
  let getEnterpriseStatus = useMemo(() => {
    let obj = {
      1: {
        label: "未认证",
        imgUrl:'/images/wqyrz-icon.png',
        color: "#EEEEEE",
        style: { color: "#999", fontWeight: "bold" },
      },
      2: {
        label: "认证审核中",
        color: "#EEEEEE",
        imgUrl:'/images/wqyrz-icon.png',
        style: { color: "#999", fontWeight: "bold" },
      },
      3: {
        label: "认证通过",
        color: "#F0F3FF",
        imgUrl:'/images/qyrz-icon.png',
        style: { color: "#3D5AF5", fontWeight: "bold" },
      },
    };
    return obj[userInfo?.enterprise_verify_status];
  }, [userInfo]);
  return (
    <AntdRegistry>
      <div className="bg-[#F8F8F8]  pt-3 pb-[90px] min-h-[900px]">
        <div className="flex-r-c max-w-screen-lg !items-start  mx-auto">
          <TzCard className="w-[240px]" styles={{ body: { padding: "14px" } }}>
            <div className="flex-c-c">
              <div className="text-[20px]">用户名</div>
              <div className="mt-[10px] mb-[20px]">{userInfo?.user_name}</div>
              <div className="flex-r-c !flex">
                <TzTag
                  icon={
                    <TzNextImage src={getUserStatus?.['imgUrl']||''} width={16} />
                  }
                  color={getUserStatus?.color}
                  style={getUserStatus?.style}
                >
                  &nbsp;实名
                </TzTag>
                <TzTag
                  icon={
                    <TzNextImage src={getEnterpriseStatus?.['imgUrl']||''} width={16} />
                  }
                  className="ml-3 flex-r-c !flex"
                  color={getEnterpriseStatus?.color}
                  style={getEnterpriseStatus?.style}
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
