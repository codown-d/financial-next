import { getProduct } from "@/fetch";
import { dealProduct } from "@/lib";
import { useCallback, useEffect, useState } from "react";

export function useGetProduct() {
  let [dataList, setDataList] = useState([]);
  let getProductFn = useCallback(() => {
    getProduct().then((res) => {
      let { dataList } = res;
      setDataList(
        dataList.map(dealProduct)
      );
    });
  }, []);
  useEffect(() => {
    getProductFn();
  }, [getProductFn]);
  return { dataList };
}
