import Image from "next/image";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./MainLayout.module.css";
import { GlobalProvider } from "@/hooks/GlobalContext";
import { Suspense } from "react";
import { Spin } from "antd";
const MainLayout: React.FC<{
  children: React.ReactNode;
  title?: string;
}> = ({ children, title = "My App" }) => {
  return (
    <>
      <GlobalProvider>
        <div className={`${styles.container} bg-slate-100`}>
          <Header />
          <main className={`${styles.main} pt-[60px] w-full`}>
            <Suspense fallback={<Spin />}>{children}</Suspense>
          </main>
          {/* <TzFloatButtonGroup className="!w-14 !h-14" icon={<TzIcon className={"fa-phone"} />} trigger="click">
            <TzFloatButton />
            <TzFloatButton icon={<TzIcon className={"fa-wand-magic-sparkles"} />} />
          </TzFloatButtonGroup> */}

          <Footer />
        </div>
      </GlobalProvider>
    </>
  );
};

export default MainLayout;
