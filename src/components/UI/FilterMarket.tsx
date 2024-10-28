import { Form, Pagination } from "antd";
import TzForm, { TzFormItem } from "../TzForm";
import { MarketDataList, TabType } from "@/constant";
import TzSpace from "../TzSpace";
import FilterHeader from "./FilterHeader";
import MarketCard from "./MarketCard";
import ItemSort from "./ItemSort";
import { useMemo, useState } from "react";
import { FilterSortEmu } from "@/fetch/definition";

export default function FilterMarket(props: { type: TabType; filter: any,keyword?:string }) {
  let { type, filter,keyword } = props;
  let [filterData, setFilterData] = useState({
    amount: FilterSortEmu.All,
    term: FilterSortEmu.All,
    rate: FilterSortEmu.All,
  });
  const [form] = Form.useForm();
  let dataList = useMemo(() => {
    let list = MarketDataList.filter((item) => {
      let entity =
        filter.entity === "all" ? true : filter.entity === item.financingEntity;
      let financing =
        filter.financing === "all"
          ? true
          : filter.financing === item.financingType;
      let type =
        filter.type === "all" ? true : filter.type === item.guaranteeMethod;
      let institution =
        filter.institution === "all"
          ? true
          : filter.institution === item.institutionType;
      let guarantee =
        filter.guarantee === 0 ? true : item.amount <= filter.guarantee;
      let term = filter.term === 0 ? true : item.term <= filter.term;
      return (
        item.tabType === props.type &&
        entity &&
        financing &&
        type &&
        institution &&
        guarantee &&
        term
      );
    }).filter(item=>!keyword||item.name.includes(keyword));
    if (filterData.amount !== FilterSortEmu.All) {
      console.log(list);
      list.sort((a, b) => {
        if (filterData.amount === FilterSortEmu.Asc) {
          return b.rate - a.rate;
        } else {
          return a.rate - b.rate;
        }
      });
    }
    if (filterData.term !== FilterSortEmu.All) {
      list.sort((a, b) => {
        if (filterData.term === FilterSortEmu.Asc) {
          return b.rate - a.rate;
        } else {
          return a.rate - b.rate;
        }
      });
    }
    if (filterData.rate !== FilterSortEmu.All) {
      list.sort((a, b) => {
        if (filterData.rate === FilterSortEmu.Asc) {
          return b.rate - a.rate;
        } else {
          return a.rate - b.rate;
        }
      });
    }
    return list;
  }, [props, filterData,keyword]);
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
              console.log({ ...allValues, ...changedValues });
              setFilterData({ ...allValues, ...changedValues });
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
