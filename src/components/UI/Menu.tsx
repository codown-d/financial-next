"use client";
import { ConfigProvider, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TzMenuUi() {
  const currentPath = usePathname();
  let items = [
    {
      label: "金融服务",
      key: "/financial-services",
      children: [
        {
          label: '小额贷款',
          key: "/small-loan",
        },
        {
          label: '融资担保',
          key: "/loan-guarantee",
        },
        {
          label: '应急转贷',
          key: "/emergency-loan",
        }
      ]
    },
    {
      label: "保函服务",
      key: "/guarantee-services",
      children: [
        {
          label: '履约保函',
          key: "/performance-bond",
        },
        {
          label: '农民工工资保函',
          key: "/wage-bond",
        },
        {
          label: '预付款保函',
          key: "/advance-payment-bond",
        }
      ]
    },
    {
      label: "机构服务",
      key: "/institutional-services",
      children: [
        {
          label: '业务管理',
          key: "/business-management",
        },
        {
          label: '资产管理',
          key: "/asset-management",
        },
        {
          label: '风险预警',
          key: "/risk-warning",
        }
      ]
    },
    {
      label: "政策服务",
      key: "/policy-services",
      children: [
        {
          label: '政策查询',
          key: "/policy-inquiry",
        },
        {
          label: '政策速配',
          key: "/policy-matching",
        },
        {
          label: '网上申报',
          key: "/online-application",
        }
      ]
    },
    {
      label: "投资服务",
      key: "/investment-services",
      children: [
        {
          label: '广财基金',
          key: "/guangcai-fund",
        },
        {
          label: '股权投资',
          key: "/equity-investment",
        },
        {
          label: '贸易服务',
          key: "/trade-services",
        }
      ]
    },
  ].map((item) => {
    let { key, label,children } = item;
    return {
      label: label,
      key: key,
      children:children.map(ite=>{
        let {key,label} = ite;
        return {
          label: <Link href={key}>{label}</Link>,
          key: key,
        }
      })
    };
  });
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            fontSize:16,
          },
        },
      }}
    >
      <Menu
        className="head-menu !bg-transparent !border-0"
        selectedKeys={[currentPath]}
        mode="horizontal"
        items={items}
        onChange={() => {}}
      />
     </ConfigProvider>
  );
}
