import { useCallback } from "react";
import { TzConfirm } from "../../TzModal";
import LoginWrap from "./components/LoginWrap";

export default function useLoginModal() {
  let getLoginModal = useCallback(() => {
    TzConfirm({
      closable:true,
      width: 620,
      styles:{content:{padding:'0px',borderRadius:'16px',marginTop:200}},
      icon: null,
      footer: null,
      content:<LoginWrap/>
    });
  }, []);
  return { getLoginModal };
}
