import TzNextImage from "@/components/TzNextImage";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import LoginContent from "./LoginContent";
import UserRegistration from "./UserRegistration";
import { CSSTransition } from "react-transition-group";
import { Form } from "antd";

export const LoginContext = createContext(null!);
export const useLoginContext = () => {
  return useContext(LoginContext);
};
export default function (props) {
  let { setOpen, type } = props;
  const [contentType, setContentType] = useState(type);
  let [formRegistration] = Form.useForm();
  const [inProp, setInProp] = useState(true);
  useEffect(() => {
    setContentType(type);
  }, [type]);
  useEffect(() => {
    setInProp(false);
    setTimeout(() => {
      setInProp(true);
    }, 100);
  }, [contentType]);
  let getLoginContentDom = useMemo(() => {
    if (contentType === "login") {
      return <LoginContent setOpen={setOpen} />;
    } else {
      return <UserRegistration />;
    }
  }, [contentType,setOpen]);
  return (
    <div className="flex w-full">
      <TzNextImage src={"/images/login-img.png"} width={220}></TzNextImage>
      <LoginContext.Provider
        value={{ contentType, setContentType, formRegistration }}
      >
        <CSSTransition in={inProp} timeout={300} classNames="fade">
          {!inProp ? <></> : getLoginContentDom}
        </CSSTransition>
      </LoginContext.Provider>
    </div>
  );
}
