"use client";
import styles from "./MainLayout.module.css";
import { GlobalProvider, useGlobalContext } from "@/hooks/GlobalContext";
import { Suspense, useEffect, useMemo } from "react";
import { Spin } from "antd";
import MHeader from "./MHeader";
import Header from "./Header";
const MainLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  let { device } = useGlobalContext();
  useEffect(() => {
    let { isMobile } = device;
    const viewportMeta = document.querySelector(
      "meta[name=viewport]"
    ) as HTMLMetaElement;
    if (viewportMeta) {
      if (isMobile) {
        // 移动端设置 viewport
        viewportMeta.setAttribute(
          "content",
          "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        );
      } else {
        // 非移动端设置
        viewportMeta.setAttribute("content", "width=1200, initial-scale=1");
      }
    } else {
      // 如果没有找到 viewport meta 标签，动态创建并添加它
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content = isMobile
        ? "width=device-width, user-scalable=no, initial-scale=0.5"
        : "width=1200, initial-scale=1";
      document.head.appendChild(meta);
    }
  }, [device]);
  let loginPage=useMemo(()=>{
    console.log(window.location.pathname)
    return window.location.pathname.indexOf('/mobile/login')!=-1
  },[])
  return (
    <>
      <div className={`${styles.container} bg-slate-100`}>
        {device.isMobile ? loginPage?null:<MHeader /> : <Header />}
        <main className={`${styles.main} ${device.isMobile?'pt-[32px]' :'pt-[60px]'} w-full`}>
          <Suspense fallback={<Spin />}>{children}</Suspense>
        </main>
        {/* <TzFloatButtonGroup className="!w-14 !h-14" icon={<TzIcon className={"fa-phone"} />} trigger="click">
            <TzFloatButton />
            <TzFloatButton icon={<TzIcon className={"fa-wand-magic-sparkles"} />} />
          </TzFloatButtonGroup> */}

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default MainLayout;
