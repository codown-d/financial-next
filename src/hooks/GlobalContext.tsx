"use client";
import { getUserInfo } from "@/fetch";
import { createContext, useState, useContext, useEffect } from "react";
// 创建上下文
interface UserInfoProps{
  token:string;
  user_name:string;
  verify_status:1|2|3;
  enterprise_verify_status:1|2|3;
  idcard:string;
  realname_name:string;
  enterprise_name:string;
}
const GlobalContext = createContext<{
  userInfo:UserInfoProps
[x:string]:any
}>(undefined);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [userInfo, setUserInfo] = useState<UserInfoProps>();
  const [financeApply, setFinanceApply] = useState<{
    apply_count:number;
    apply_count_not:number;
    finance_count:number;
    finance_count_not:number;
  }>();
  useEffect(() => {
    getUserInfo().then(res=>{
      console.log(res)
      // res.data['verify_status']=1
      setUserInfo(res.data)
      setFinanceApply(res.finance_apply)
      window.localStorage.setItem("userInfo", JSON.stringify(res.data));                  
    })
  }, []);
  return (
    <GlobalContext.Provider value={{ userInfo, setUserInfo ,financeApply}}>
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
