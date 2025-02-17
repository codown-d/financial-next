"use client";
import { TzForm, TzFormItem } from "@/components";
import { TzButton } from "@/components/TzButton";
import TzCard from "@/components/TzCard";
import { TzCheckableTagNormal } from "@/components/TzCheckableTag";
import TzDivider from "@/components/TzDivider";
import TzNextImage from "@/components/TzNextImage";
import TzSearch from "@/components/TzSearch";
import TzTabs from "@/components/TzTabs";
import FilterMarket from "@/components/UI/FilterMarket";
import FinancialSupermarket from "@/components/UI/FinancialSupermarket";
import FinancialTab from "@/components/UI/FinancialTab";
import ItemSort from "@/components/UI/ItemSort";
import Loan from "@/components/UI/Loan";
import {
  BankLoans,
  ElectronicGuarantee,
  EmergencyRefinancing,
  EquityFinancing,
  FinanceGuarantee,
  FinancialMarket,
  Insurance,
  Microloans,
} from "@/constant";
import { getProduct } from "@/fetch";
import { FilterSortEmu, FinanceDataTypeEmu, TabType } from "@/fetch/definition";
import { dealProduct } from "@/lib";
import { Button, Form } from "antd";
import { Popup } from "antd-mobile";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function Home() {
  const [form] = Form.useForm();
  let [keyword, setKeyword] = useState("");
  let [filterData, setFilterData] = useState({
    highest_money_sort: FilterSortEmu.All,
    term_sort: FilterSortEmu.All,
    rate_sort: FilterSortEmu.All,
  });
  let [dataList, setMarketDataList] = useState([]);
  const handleSelect = (
    value: "rate_sort" | "term_sort" | "highest_money_sort"
  ) => {
    if (value === "rate_sort") {
      form.setFieldsValue({
        term_sort: "",
        highest_money_sort: "",
      });
    } else if (value === "term_sort") {
      form.setFieldsValue({
        rate_sort: "",
        highest_money_sort: "",
      });
    } else if (value === "highest_money_sort") {
      form.setFieldsValue({ rate_sort: "", term_sort: "" });
    }
  };
  let getProductFn = useCallback(() => {
    getProduct({ ...filterData, name: keyword }).then((res) => {
      let { dataList } = res;
      setMarketDataList(dataList.map(dealProduct));
    });
  }, [filterData, keyword]);
  useEffect(() => {
    getProductFn();
  }, [getProductFn]);
  let items = useMemo(() => {
    let tabItems_1 = dataList.filter((item) =>
      [
        FinanceDataTypeEmu.BankLoans,
        FinanceDataTypeEmu.EquityFinancing,
        FinanceDataTypeEmu.Microloans,
        FinanceDataTypeEmu.EmergencyRefinancing,
      ].includes(item.product_type)
    );

    let tabItems_2 = dataList.filter((item) =>
      [
        FinanceDataTypeEmu.FinanceGuarantee,
        FinanceDataTypeEmu.ElectronicGuarantee,
        FinanceDataTypeEmu.Insurance,
      ].includes(item.product_type)
    );
    return [
      {
        label: (
          <div className="flex flex-row items-center">
            <img
              src={"/images/rzfw.png"}
              style={{ width: "48px" }}
              className="mr-2"
            />
            <span>融资服务</span>
          </div>
        ),
        key: "key_1",
        children: <Loan items={tabItems_1} />,
      },
      {
        label: (
          <div className="flex flex-row items-center">
            <img
              src={"/images/zxfw.png"}
              style={{ width: "48px" }}
              className="mr-2"
            />
            <span>增信服务</span>
          </div>
        ),
        key: "key_2",
        children: <Loan items={tabItems_2} />,
      },
    ];
  }, [dataList]);
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="bg-[#F8F8F8] h-full">
        <div className="relative h-[276px] ">
          <div className="relative">
            <img
              src={"/images/jrcs-banner.png"}
              style={{ height: "196px", width: "100%" }}
            />
            <div
              className="absolute bottom-0 w-full h-[80px]"
              style={{
                background:
                  "linear-gradient( 180deg, rgba(255,255,255,0) 0%, #FFFFFF 100%)",
              }}
            ></div>
          </div>
          <div className="flex flex-col items-center absolute top-0 w-full">
            <TzSearch
              placeholder="请输入你想要搜索的内容"
              allowClear
              className="px-4 pt-2"
              enterButton="搜索"
              onSearch={(val) => setKeyword(val)}
            />
            <div className="text-white-500 w-full text-left mt-5 pl-8">
              <div className="text-[20px] font-bold mb-2">产品超市</div>
              <div className="text-[12px]">小贷丨担保丨转贷丨保函丨基金</div>
            </div>
            <div className="px-4 w-full mt-[18px]">
              <div
                className="h-[90px] w-full flex justify-between  items-center px-5"
                style={{
                  background: "url('/images/mobile/znpp.png')",
                  backgroundSize: "100% 100%",
                }}
              >
                <span className="text-white-500">
                  一键筛选
                  <br />
                  您可能感兴趣的服务
                </span>
                <div>
                  <Button
                    shape={"round"}
                    color="primary"
                    style={{ border: "2px solid #fff" }}
                  >
                    智能匹配
                  </Button>
                </div>
              </div>
            </div>
            <div
              className="w-full"
              style={{
                borderRadius: "0 0 16px 16px",
                boxShadow: "0px 4px 16px 0px rgba(0,0,0,0.04)",
              }}
            >
              <div className="py-[14px] px-[24px] flex justify-between">
                <TzForm
                  layout={"inline"}
                  form={form}
                  onValuesChange={(changedValues, allValues) => {
                    setFilterData({ ...changedValues });
                  }}
                >
                  <TzFormItem noStyle name={"rate_sort"} initialValue={""}>
                    <ItemSort
                      label={"利率"}
                      className="mr-10"
                      onChange={() => handleSelect("rate_sort")}
                    />
                  </TzFormItem>
                  <TzFormItem noStyle name={"term_sort"} initialValue={""}>
                    <ItemSort
                      label={"期限"}
                      className="mr-10"
                      onChange={() => handleSelect("term_sort")}
                    />
                  </TzFormItem>
                  <TzFormItem
                    noStyle
                    name={"highest_money_sort"}
                    initialValue={""}
                  >
                    <ItemSort
                      label={"最高额度"}
                      onChange={() => handleSelect("highest_money_sort")}
                    />
                  </TzFormItem>
                </TzForm>
                <div
                  className="flex items-center"
                  onClick={() => {
                    setVisible(true);
                  }}
                >
                  <img
                    src="/images/mobile/sx.png"
                    alt=""
                    className="w-[14px] mr-1"
                  />
                  筛选
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <TzTabs
            size={"small"}
            items={items}
            centered
            destroyInactiveTabPane
          />
        </div>
        <Popup
          visible={visible}
          position="top"
          onMaskClick={() => {
            setVisible(false);
          }}
        >
          <div style={{ height: "40vh", overflowY: "scroll", padding: "20px" }}>
            <TzForm
              form={form}
              onValuesChange={(changedValues, allValues) => {
                setFilterData({ ...changedValues });
              }}
            >
              <div className="flex flex-row pb-[10px] items-center">
                <TzFormItem noStyle name={"rate_sort"} initialValue={""}>
                  <ItemSort
                    label={"利率"}
                    className="mr-10"
                    onChange={() => handleSelect("rate_sort")}
                  />
                </TzFormItem>
                <TzFormItem noStyle name={"term_sort"} initialValue={""}>
                  <ItemSort
                    label={"期限"}
                    className="mr-10"
                    onChange={() => handleSelect("term_sort")}
                  />
                </TzFormItem>
                <TzFormItem
                  noStyle
                  name={"highest_money_sort"}
                  initialValue={""}
                >
                  <ItemSort
                    label={"最高额度"}
                    onChange={() => handleSelect("highest_money_sort")}
                  />
                </TzFormItem>
              </div>
              <TzFormItem
                label={"融资主体"}
                name={"application_form"}
                initialValue={0}
              >
                <TzCheckableTagNormal items={FinancialMarket.entity} />
              </TzFormItem>
              <TzFormItem
                label={"融资类型"}
                name={"finance_type"}
                initialValue={0}
              >
                <TzCheckableTagNormal items={FinancialMarket.type} />
              </TzFormItem>
              <TzFormItem
                label={"机构类型"}
                name={"product_type"}
                initialValue={0}
              >
                <TzCheckableTagNormal items={FinancialMarket.institution} />
              </TzFormItem>
              <TzFormItem
                label={"担保类型"}
                name={"data_type"}
                initialValue={0}
              >
                <TzCheckableTagNormal items={FinancialMarket.financing} />
              </TzFormItem>
              <TzFormItem
                label={"融资额度"}
                name={"highest_money"}
                initialValue={0}
              >
                <TzCheckableTagNormal items={FinancialMarket.guarantee} />
              </TzFormItem>
              <TzFormItem
                label={"融资期限"}
                name={"term"}
                className="!mb-[0px]"
                initialValue={0}
              >
                <TzCheckableTagNormal items={FinancialMarket.term} />
              </TzFormItem>
            </TzForm>
            <div className="flex justify-between pt-4">
              <Button
                onClick={() => {
                  form.resetFields();
                  setVisible(false);
                }}
                shape={"round"}
                className={" mr-2 w-[40%]"}
              >
                重置
              </Button>
              <Button
                onClick={() => {
                  setVisible(false);
                }}
                type="primary"
                className={"ml-2 w-[60%]"}
                shape={"round"}
              >
                筛选
              </Button>
            </div>
          </div>
        </Popup>
      </div>
    </>
  );
}
