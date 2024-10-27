import TzNextImage from "@/components/TzNextImage";
import TzTabs from "@/components/TzTabs";

export default function () {
  let items = [
    {
      label: "账号登录",
      key: "/login",
      children: 'Content of Tab Pane 1',
      
    },
    {
      label: "短信登录",
      key: "/register",
      children: 'Content of Tab Pane 1',
    },
  ];
  return (
    <div className="flex w-full">
      <TzNextImage src={"/images/login-img.png"} width={220}></TzNextImage>
      <div className="flex-1">
          <TzTabs items={items} centered tabBarStyle={{ borderBottom: 'none' }} className="border-0"></TzTabs>
      </div>
    </div>
  );
}
