import { Form, Pagination } from "antd";
import TzForm, { TzFormItem } from "../TzForm";
import TzSpace from "../TzSpace";
import FilterHeader from "./FilterHeader";
import MarketCard from "./MarketCard";
import ItemSort from "./ItemSort";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FilterSortEmu, TabType } from "@/fetch/definition";
import { getProduct } from "@/fetch";
import { dealProduct } from "@/lib";

export default function FilterMarket(props: { filter: any; keyword?: string }) {
  let { filter, keyword } = props;
  let [filterData, setFilterData] = useState({
    highest_money_sort: FilterSortEmu.All,
    term_sort: FilterSortEmu.All,
    rate_sort: FilterSortEmu.All,
  });
  let [dataList, setMarketDataList] = useState([]);
  const [form] = Form.useForm();

  let getProductFn = useCallback(() => {
    getProduct({ ...filter, ...filterData, name: keyword }).then((res) => {
      let { dataList } = res;
      setMarketDataList(dataList.map(dealProduct));
    });
  }, [filter, filterData, keyword]);
  useEffect(() => {
    getProductFn();
  }, [getProductFn]);
  const handleSelect = (
    value: "rate_sort" | "term_sort" | "highest_money_sort"
  ) => {
    if (value === "rate_sort") {
      form.setFieldsValue({
        term_sort: '',
        highest_money_sort: '',
      });
    } else if (value === "term_sort") {
      form.setFieldsValue({
        rate_sort: '',
        highest_money_sort: '',
      });
    } else if (value === "highest_money_sort") {
      form.setFieldsValue({ rate_sort: '', term_sort: '' });
    }
  };
  return (
    <>
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
              setFilterData({ ...changedValues });
            }}
          >
            <TzFormItem noStyle name={"rate_sort"} initialValue={''}>
              <ItemSort
                label={"利率"}
                className="mr-10"
                onChange={() => handleSelect("rate_sort")}
              />
            </TzFormItem>
            <TzFormItem noStyle name={"term_sort"} initialValue={''}>
              <ItemSort
                label={"期限"}
                className="mr-10"
                onChange={() => handleSelect("term_sort")}
              />
            </TzFormItem>
            <TzFormItem noStyle name={"highest_money_sort"} initialValue={''}>
              <ItemSort
                label={"最高额度"}
                onChange={() => handleSelect("highest_money_sort")}
              />
            </TzFormItem>
          </TzForm>
        }
      />
      <TzSpace direction="vertical" size="middle" style={{ display: "flex" }}>
        {dataList.map((item, index) => {
          return <MarketCard {...item} key={item.id} />;
        })}
      </TzSpace>
      <div className="mt-[60px] mb-[90px] flex justify-end">
        <Pagination defaultCurrent={6} total={dataList.length} />
      </div>
    </>
  );
}
