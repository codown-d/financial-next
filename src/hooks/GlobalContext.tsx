"use client";
import  { createContext, useState, useContext } from "react";
// 创建上下文
const GlobalContext = createContext<any>(undefined);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState<string>("Initial Value");
  return (
    <GlobalContext.Provider value={{ value, setValue }}>
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
