"use client";
import { getUserInfo } from "@/fetch";
import { createContext, useState, useContext, useEffect } from "react";
// 创建上下文
interface UserInfoProps{
  token:string;
  user_name:string;
  verify_status:1|2|3;
  enterprise_verify_status:1|2|3;
}
const GlobalContext = createContext<{
  userInfo:UserInfoProps
[x:string]:any
}>(undefined);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [userInfo, setUserInfo] = useState<UserInfoProps>();
  useEffect(() => {
    getUserInfo().then(res=>{
      res.data['verify_status']=1
      setUserInfo(res.data)
      window.localStorage.setItem("userInfo", JSON.stringify(res.data));                  
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
