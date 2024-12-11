import { Form, Pagination } from "antd";
import TzForm, { TzFormItem } from "../TzForm";
import TzSpace from "../TzSpace";
import FilterHeader from "./FilterHeader";
import MarketCard from "./MarketCard";
import ItemSort from "./ItemSort";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FilterSortEmu, TabType } from "@/fetch/definition";
import { getProduct } from "@/fetch";
import { find } from "lodash";
import { prodTypeEmu } from "@/constant";
import { dealProduct } from "@/lib";

export default function FilterMarket(props: {
  type: TabType;
  filter: any;
  keyword?: string;
}) {
  let { type, filter, keyword } = props;
  let [filterData, setFilterData] = useState({
    highest_money_sort: FilterSortEmu.All,
    term_sort: FilterSortEmu.All,
    rate_sort: FilterSortEmu.All,
  });
  let [dataList,setMarketDataList]=useState([])
  const [form] = Form.useForm();
  
  let getProductFn=useCallback(()=>{
    getProduct({...props.filter,...filterData,name:keyword}).then((res) => {
      let { dataList } = res;
      setMarketDataList(
        dataList.map(dealProduct)
      );
    })
  },[props.filter,filterData,keyword])
  useEffect(()=>{
    getProductFn()
  },[getProductFn])
  return (
    <div>
      <div className="mb-2 mt-1 ml-3 text-[#999]">
        共{dataList.length}条结果
      </div>
      <FilterHeader
        className={"!mb-3"}
        left={"产品列表"}
        right={
          <TzForm
            layout={"inline"}
            form={form}
            onValuesChange={(changedValues, allValues) => {
              setFilterData({ ...allValues, ...changedValues });
            }}
          >
            <TzFormItem noStyle name={"rate_sort"}>
              <ItemSort label={"利率"} className="mr-10" />
            </TzFormItem>
            <TzFormItem noStyle name={"term_sort"}>
              <ItemSort label={"期限"} className="mr-10" />
            </TzFormItem>
            <TzFormItem noStyle name={"highest_money_sort"}>
              <ItemSort label={"最高额度"} />
            </TzFormItem>
          </TzForm>
        }
      />
      <TzSpace direction="vertical" size="middle" style={{ display: "flex" }}>
        {dataList.map((item, index) => {
          return <MarketCard {...item} key={index} />;
        })}
      </TzSpace>
      <div className="mt-[60px] mb-[90px] flex justify-end">
        <Pagination defaultCurrent={6} total={dataList.length} />
      </div>
    </div>
  );
}
