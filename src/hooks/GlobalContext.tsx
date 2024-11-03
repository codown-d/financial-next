"use client";
import  { createContext, useState, useContext } from "react";
// 创建上下文
const GlobalContext = createContext<any>(undefined);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [userInfo, setUserInfo] = useState<any>(JSON.parse(window.localStorage.getItem('userInfo')));
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
