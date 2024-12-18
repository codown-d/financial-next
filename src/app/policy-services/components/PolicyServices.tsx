"use client";
import Image from "next/image";
import TzCard from "@/components/TzCard";
import FilterHeader from "@/components/UI/FilterHeader";
import ItemSort from "@/components/UI/ItemSort";
import { TzCheckableTagNormal } from "@/components/TzCheckableTag";
import TzDivider from "@/components/TzDivider";
import { useCallback, useEffect, useState } from "react";
import { TzTableServerPage } from "@/components/TzTable";
import PolicyTableItem from "./PolicyTableItem";
import { getPolicyList, policyStatistics, themeFeature } from "@/fetch";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import TzSearch from "@/components/TzSearch";
import { FilterSortEmu } from "@/fetch/definition";
import PolicyStatistics from "./PolicyStatistics";
import { TzForm, TzFormItem, TzInput } from "@/components";
import { Form } from "antd";
import dayjs from "dayjs";
import { TzButton } from "@/components/TzButton";
import { UndoOutlined } from "@ant-design/icons";
import { merge } from "lodash";
export interface DataType {
  id: any;
  title: string;
  publishdate: number;
  name: string;
}
const getYears = (): number[] => {
  const currentYear = dayjs().year(); // 获取当前年份
  const years = [];

  // 循环输出当前年份以及前五年
  for (let i = 0; i < 5; i++) {
    years.push(currentYear - i);
  }

  return years;
};
export default function PolicyServices(props: any) {
  let { initialData, total, body_type: bt } = props;
  const [dataTotal, setDataTotal] = useState(total);
  let [filter, setFilter] = useState({
    add_time_sort:'desc',
    area_type:'all',
    body_type:'',
    keyword:'',
    
  });
  let getTableData = useCallback(
    async (pagination) => {
      const { current = 1, pageSize = 10 } = pagination;
      let res: any = await getPolicyList({
        page: current,
        limit: pageSize,
        ...filter,
        area_type:filter.area_type=='all'?0:filter.area_type
      });
      setDataTotal(res.count);
      return {
        data: res.dataList,
        total: res.count,
      };
    },
    [filter]
  );
  let columns = [
    {
      title: "标题",
      dataIndex: "title",
      render: (text, row) => <PolicyTableItem {...row} />,
    },
  ];
  useEffect(() => {
    getThemeFeature();
  }, []);
  let [feature, setFeature] = useState([]);
  let [theme, setTheme] = useState([]);
  let [hotWords, setHotWords] = useState([]);
  const [form] = Form.useForm();
  let getThemeFeature = () => {
    themeFeature().then((res) => {
      setFeature(
        res.feature.map((item) => {
          return {
            label: item.name,
            value: item.id,
          };
        })
      );
      setTheme(
        res.theme.map((item) => {
          return {
            label: item.name,
            value: item.id,
          };
        })
      );
      setHotWords(res.hot.map((item) => item.name));
    });
  };
  let timeList = getYears().map((item, index) => {
    return {
      label: index === 4 ? item + "年以前" : item + "年",
      value: item,
    };
  });
  return (
    <AntdRegistry>
      <div className="relative bg-[#F8F8F8]">
        <div className="h-[320px] relative flex justify-center">
          <Image
            src={"/images/zc-banner.png"}
            alt={""}
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="mt-[60px] flex flex-col items-center z-10">
            <Image
              src={"/images/zcfw-title.png"}
              alt={""}
              height={0}
              width={240}
              className="mb-[56px]"
            />
            <TzSearch
              placeholder="请输入你想要搜索的内容"
              allowClear
              className="!w-[560px] p-1"
              enterButton="搜索"
              size={"large"}
              onSearch={(val) => {
                setFilter((pre) => {
                  return {
                    ...pre,
                    keyword: val,
                  };
                });
              }}
            />
            <div className="mt-2 flex items-start w-full pl-3">
              {hotWords.map((item, index) => (
                <span className="mr-6 text-white-500 text-sm" key={index}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-screen-lg  mx-auto overflow-hidden flex">
          <div className="w-[260px] pr-[20px] mt-3">
            <PolicyStatistics
              onChange={(val) => {
                setFilter((pre) => {
                  return {
                    ...pre,
                    area_type: val,
                  };
                });
              }}
            />
          </div>
          <div className="flex-1">
            <TzCard className="!mt-3">
              <TzForm
                form={form}
                onValuesChange={(changedValues, allValues) => {
                  setFilter((pre) => {
                    return merge({}, pre, changedValues);
                  });
                }}
              >
                <TzFormItem
                  label={"按主题"}
                  name={"theme_id"}
                  initialValue={0}
                  style={{ marginBottom: "12px" }}
                >
                  <TzCheckableTagNormal
                    items={[
                      {
                        label: "全部",
                        value: 0,
                      },
                      ...theme,
                    ]}
                  />
                </TzFormItem>
                <TzDivider />
                <TzFormItem
                  label={"按特色"}
                  name={"feature_id"}
                  initialValue={0}
                  style={{ marginBottom: "12px" }}
                >
                  <TzCheckableTagNormal
                    items={[
                      {
                        label: "全部",
                        value: 0,
                      },
                      ...feature,
                    ]}
                  />
                </TzFormItem>
                <TzDivider />
                <TzFormItem
                  label={"按时间"}
                  name={"start"}
                  initialValue={0}
                  style={{ marginBottom: 0 }}
                >
                  <TzCheckableTagNormal
                    items={[
                      {
                        label: "全部",
                        value: 0,
                      },
                      ...timeList,
                    ]}
                  />
                </TzFormItem>
              </TzForm>
            </TzCard>
            <FilterHeader
              className={"mb-3 pl-[10px] !py-[14px] mt-3"}
              left={
                <div className="flex items-center">
                  <div className=" ml-3 mr-10 text-[#999]">
                    共{" "}
                    <span className="text-[#3C5BF6] font-bold">
                      {dataTotal}
                    </span>{" "}
                    条结果
                  </div>
                  <TzButton icon={<UndoOutlined />} className="!px-[12px]" onClick={()=>{
                    form.resetFields()
                  }}>
                    重置选项
                  </TzButton>
                </div>
              }
              right={
                <div className="flex items-center">
                  <ItemSort
                    label={"发布时间"}
                    className="font-medium"
                    onChange={(val) => {
                      setFilter((pre) => {
                        return {
                          ...pre,
                          add_time_sort:
                            val == FilterSortEmu.Asc
                              ? FilterSortEmu.Asc
                              : FilterSortEmu.Desc,
                        };
                      });
                    }}
                  />
                </div>
              }
            />
            <TzCard
              className=" !mt-3 !mb-[96px]"
              style={{ boxShadow: "0px 4px 16px 0px rgba(0,0,0,0.04)" }}
            >
              <TzTableServerPage
                initialData={initialData}
                columns={columns}
                rowKey={"id"}
                showHeader={false}
                reqFun={getTableData}
              />
            </TzCard>
          </div>
        </div>
      </div>
    </AntdRegistry>
  );
}
