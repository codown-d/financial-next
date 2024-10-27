import { Form, Pagination } from "antd";
import TzForm, { TzFormItem } from "../TzForm";
import { MarketDataList } from "@/constant";
import TzSpace from "../TzSpace";
import FilterHeader from "./FilterHeader";
import MarketCard from "./MarketCard";
import ItemSort from "./ItemSort";

export default function FilterMarket(props: { type: "service" | "credit" }) {
  let { type } = props;
  const [form] = Form.useForm();
  return (
    <div>
      <div className="mb-2 mt-1 ml-3 text-[#999]">
        共{MarketDataList.length}条结果
      </div>
      <FilterHeader
        className={"!mb-3"}
        left={"产品列表"}
        right={
          <TzForm
            layout={"inline"}
            form={form}
            onValuesChange={(changedValues, allValues) => {
              console.log(changedValues, allValues);
            }}
          >
            <TzFormItem noStyle name={"rate"}>
              <ItemSort label={"利率"} className="mr-10" />
            </TzFormItem>
            <TzFormItem noStyle name={"term"}>
              <ItemSort label={"期限"} className="mr-10" />
            </TzFormItem>
            <TzFormItem noStyle name={"amount"}>
              <ItemSort label={"最高额度"} />
            </TzFormItem>
          </TzForm>
        }
      />
      <TzSpace direction="vertical" size="middle" style={{ display: "flex" }}>
        {MarketDataList.map((item, index) => {
          return <MarketCard {...item} key={index} />;
        })}
      </TzSpace>
      <div className="mt-[60px] mb-[90px] flex">
        <Pagination defaultCurrent={6} total={MarketDataList.length} />
      </div>
    </div>
  );
}
