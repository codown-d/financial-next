import { getApplyPolicyList, getHotWordList } from "@/fetch";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import PolicyServices from "./components/PolicyServices";

async function getServerSideProps(context) {
  const {
    currentpage = 1,
    pageSize = 10,
    lawlevel = 10,
    taskname = "",
  } = context;
  const res: any = await getApplyPolicyList({
    params: {
      currentpage: currentpage,
      pagesize: pageSize,
      lawlevel: lawlevel,
      lawtheme: "",
      applicableindustry: "",
      keyword: taskname,
      orderfrom: "desc",
      areacode: "",
      publishdatetype: "",
      publishdatefrom: "",
      publishdateto: "",
      msjxType: "",
      area: "",
      ouguid: "",
      tran: 0,
      policytype: "",
      msjxitem: 0,
    },
    token: "epoint_webserivce_**##0601",
  });
  return {
    items: res.custom.rtnlist,
    total: res.custom.totalnum,
  };
}
async function getServerHotWordList() {
  const res = await getHotWordList();
  return res;
}

export default async function () {
  const { items: initialData, total } = await getServerSideProps({
    currentpage: 0,
    pageSize: 10,
    lawlevel: 10,
    taskname: "",
  });
  const { items: hotWords } = await getServerHotWordList();
  return (
    <PolicyServices
      hotWords={hotWords}
      initialData={initialData}
      total={total}
    />
  );
}
