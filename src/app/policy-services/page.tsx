import { useRouter } from "next/navigation";
import PolicyServices from "./components/PolicyServices";
const apiHost = process.env.NEXT_PUBLIC_API_HOST;
async function getServerSideProps(context) {
  console.log('context',context)
  const res = await fetch( `${apiHost}/admin/enterprise/service/policy/all/list`, { cache: 'no-store' });
  const data = await res.json();
  return {
    items: data.dataList,
    total:data.count,
  };
}
export default async function ({ searchParams }) {
  let {body_type='',query} = searchParams
  const { items: initialData, total } = await getServerSideProps({});
  return (
    <PolicyServices
      hotWords={["发改委", "住建局", "财政部"]}
      initialData={initialData}
      total={total}
      query={query}
      body_type={body_type}
    />
  );
}
