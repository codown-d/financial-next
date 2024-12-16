"use client";
import TzCard from "@/components/TzCard";
import { AREA_TYPE, PolicyTags } from "@/constant";
import { useCallback, useEffect, useState } from "react";
import { getPolicyList, policyStatistics } from "@/fetch";
import { keys } from "lodash";
export interface DataType {
  id: any;
  title: string;
  publishdate: number;
  name: string;
}

export default function PolicyStatistics(props:{onChange:(val:any)=>void}) {
  let [statistics, setStatistics] = useState({});
  let [actItem, setActItem] = useState<Number | string>();
  let getPolicyStatistics = () => {
    policyStatistics().then((res) => {
      let data = res.data;
      setStatistics({ all: data.all, ...data.area_type_count });
    });
  };
  useEffect(() => {
    getPolicyStatistics();
  }, []);
  let arr = ["all", "1", "2", "3"];
  return (
    <TzCard styles={{ body: { padding: 0 } }}>
      <div className="pl-[20px] bg-gradient-to-l from-[#7B9DF1] to-[#3C5BF6] rounded-[14px] text-[14px] text-[#fff] flex h-[44px] leading-[44px] ">
        <span className="before:content-[''] before:absolute before:bg-white-500 before:rounded-[2px] before:w-[4px] before:h-[14px] before:top-[50%] before:mt-[-7px] before:left-0 relative pl-[10px]">
          政策层级
        </span>
      </div>
      <div>
        {arr.map((item) => {
          return (
            <div
              className={`flex justify-between ml-[32px] mr-[14px] leading-[44px] hover:text-[#3D5AF5] cursor-pointer ${
                actItem === item ? "text-[#3D5AF5]" : ""
              }`}
              onClick={() => {
                props.onChange(item)
                setActItem(item)
              }}
            >
              <span className="font-bold">{AREA_TYPE[item].text}</span>{" "}
              <span>({statistics[item]})</span>
            </div>
          );
        })}
        <div className="flex justify-between ml-[32px] mr-[14px] leading-[44px] font-bold">县级</div>
        <div className="mb-5">
          {keys(AREA_TYPE)
            .filter((item) => !arr.includes(item + ""))
            .map((item) => {
              return (
                <div
                  className={`flex justify-between ml-[32px] mr-[14px] leading-[44px] hover:text-[#3D5AF5] cursor-pointer ${
                    actItem === item ? "text-[#3D5AF5]" : ""
                  }`}
                  onClick={() => {
                    props.onChange(item)
                    setActItem(item)
                  }
                }
                >
                  <span className="pl-[20px] border-l-[2px] border-[#eee]">{AREA_TYPE[item].text}</span>{" "}
                  <span>({statistics[item]})</span>
                </div>
              );
            })}
        </div>
      </div>
    </TzCard>
  );
}
