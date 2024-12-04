import { getProduct } from "@/fetch";
import { useCallback, useEffect, useState } from "react";

export function useGetProduct() {
  let [dataList, setDataList] = useState([]);
  let getProductFn = useCallback(() => {
    getProduct().then((res) => {
      let { dataList } = res;
      setDataList(
        dataList.map((item) => {
          return {
            ...item,
            logoUrl: item.financial_organs.logo || "/images/logo.png",
            amount: item.highest_money,
            guaranteeMethod: [item.data_type],
            dataType: item.data_type,
            dealOrder: item.success_count || Math.ceil(Math.random() * 1000),
          };
        })
      );
    });
  }, []);
  useEffect(() => {
    getProductFn();
  }, [getProductFn]);
  return { dataList };
}
