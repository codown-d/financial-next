"use client";
import { getUserInfo } from "@/fetch";
import { createContext, useState, useContext, useEffect } from "react";
// 创建上下文
const GlobalContext = createContext<any>(undefined);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [userInfo, setUserInfo] = useState<any>();
  useEffect(() => {
    getUserInfo().then(res=>{
      setUserInfo(res.userInfo)
      window.localStorage.setItem("userInfo", JSON.stringify(res.userInfo));                  
    })
  }, []);
  return (
    <GlobalContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </GlobalContext.Provider>
  );
}

// 自定义 Hook 以便使用上下文
export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
}
