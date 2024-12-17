import { classProduct } from "@/fetch";
import { dealProduct } from "@/lib";
import { useCallback, useEffect, useState } from "react";

export function useGetProduct() {
  let [dataList, setDataList] = useState([]);
  let getProductFn = useCallback(() => {
    classProduct().then((res) => {
      let { data } = res;
      setDataList(
        data.map(dealProduct)
      );
    });
  }, []);
  useEffect(() => {
    getProductFn();
  }, [getProductFn]);
  return { dataList };
}
