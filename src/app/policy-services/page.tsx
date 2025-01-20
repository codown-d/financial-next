import { useRouter } from "next/navigation";
import PolicyServices from "./components/PolicyServices";
export default async function ({ searchParams }) {
  let {body_type='',query} = searchParams
  return (
    <PolicyServices
      hotWords={["发改委", "住建局", "财政部"]}
      query={query||'{}'}
      body_type={body_type}
    />
  );
}
