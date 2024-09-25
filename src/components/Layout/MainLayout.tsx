import TzIcon from "../TzIcon";
import TzFloatButton, {
  TzFloatButtonBackTop,
  TzFloatButtonGroup,
} from "../TzIFloatButton";
import TzPageProgress from "../TzPageProgress";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./MainLayout.module.css";
import { GlobalProvider } from "@/hooks/GlobalContext";

const MainLayout: React.FC<{
  children: React.ReactNode;
  title?: string;
}> = ({ children, title = "My App" }) => {
  return (
    <>
      <GlobalProvider>
        <div className={`${styles.container} bg-slate-100`}>
          <Header />
          <main className={`${styles.main} pt-14 w-full`}>{children}</main>
          {/* <TzFloatButtonGroup className="!w-14 !h-14" icon={<TzIcon className={"fa-phone"} />} trigger="click">
            <TzFloatButton />
            <TzFloatButton icon={<TzIcon className={"fa-wand-magic-sparkles"} />} />
          </TzFloatButtonGroup> */}

          <TzPageProgress />
          <Footer />
        </div>
      </GlobalProvider>
    </>
  );
};

export default MainLayout;
