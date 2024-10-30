import { useCallback } from "react";
import TzCard from "../../TzCard";
import Title from "../Title";
import { TzConfirm } from "../../TzModal";
import LoginContent from "./components/LoginContent";

export default function useLoginModal() {
  let getLoginModal = useCallback(() => {
    TzConfirm({
      width: 620,
      styles:{content:{padding:'0px',borderRadius:'16px'}},
      icon: null,
      footer: null,
      content:<LoginContent/>
    });
  }, []);
  return { getLoginModal };
}
