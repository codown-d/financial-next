"use client";
import { ConfigProvider, Menu } from "antd";
import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import Link from "next/link";
import TzDropdown from "../TzDropdown";

export default function TzDropdownUI() {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  let items = [
    {
      label: "金融服务",
      key: "financialProduct",
      children: [
        {
          label: "小额贷款",
          key: "/small-loan",
        },
        {
          label: "融资担保",
          key: "/loan-guarantee",
        },
        {
          label: "应急转贷",
          key: "/emergency-loan",
        },
      ],
    },
    {
      label: "保函服务",
      key: "guaranteeServices",
      children: [
        {
          label: "履约保函",
          key: "/performance-bond",
        },
        {
          label: "农民工工资保函",
          key: "/wage-bond",
        },
        {
          label: "预付款保函",
          key: "/advance-payment-bond",
        },
      ],
    },
    {
      label: "机构服务",
      key: "institutionalServices",
      children: [
        {
          label: "业务管理",
          key: "/business-management",
        },
        {
          label: "资产管理",
          key: "/asset-management",
        },
        {
          label: "风险预警",
          key: "/risk-warning",
        },
      ],
    },

    {
      label: "投资服务",
      key: "investmentServices",
      children: [
        {
          label: "广财基金",
          key: "/guangcai-fund",
        },
        {
          label: "股权投资",
          key: "/equity-investment",
        },
        {
          label: "贸易服务",
          key: "/trade-services",
        },
      ],
    },
    {
      label: "政策服务",
      key: "policyServices",
      children: [
        {
          label: "政策查询",
          key: "/policy-inquiry",
        },
        {
          label: "政策原文",
          key: "/policy-matching",
        },
        {
          label: "政策解析",
          key: "/online-application",
        },
      ],
    },
  ].map((item) => {
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
          label: (
            <Link
              href={key}
              key={key}
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
        id={"header"}
        className="flex items-center justify-center text-[16px]"
      >
        {items.map((item, index) => {
          let { label, children } = item;
          return (
            <TzDropdown
              key={index}
              className="!bg-transparent !border-0 px-4 mx-2 py-3"
              menu={{ items: children }}
              getPopupContainer={() => document.getElementById("header")}
            >
              {label}
            </TzDropdown>
          );
        })}
      </div>
    </ConfigProvider>
  );
}
