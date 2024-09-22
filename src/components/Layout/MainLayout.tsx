import Footer from "./Footer";
import Header from "./Header";
import styles from "./MainLayout.module.css";
import { GlobalProvider } from "@/hooks/GlobalContext";
// import { Rubik } from 'next/font/google';

// const rubik = Rubik ({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700'], // 根据需要选择字体粗细
//   style: ['normal', 'italic'], // 如果需要斜体，加入 'italic'
// });
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
          <Footer />
        </div>
      </GlobalProvider>
    </>
  );
};

export default MainLayout;
