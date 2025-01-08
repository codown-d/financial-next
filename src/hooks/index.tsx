import { TzConfirm } from "@/components/TzModal";
import FundContent from "@/components/UI/FundContent";
import { collateralOp, insurance_type, repaymentMethodOp, term_unit } from "@/constant";
import {
  getArea,
  getUnique,
  getUserInfo,
  productDetail,
  postImgCode,
  postPhoneCode,
} from "@/fetch";
import { FinanceDataTypeEmu, FinanceItemProps } from "@/fetch/definition";
import { dealProduct } from "@/lib";
import { keys } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";

interface ResizeProps {
  callback?: (width?: number) => void;
}
export const useResize = (props?: ResizeProps) => {
  let [isMobile, setIsMobile] = useState(false);
  let onResizeChange = useCallback((width: number) => {
    props?.callback?.(width);
  }, []);
  useEffect(() => {
    const element = document.querySelector("body");
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect.width < 560) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
        onResizeChange(entry.contentRect.width);
      }
    });
    resizeObserver.observe(element);
  }, []);
  return { isMobile };
};
export const useProductType = (props: FinanceItemProps) => {
  let { productType, rate, amount, term, rateDown, rateUp } = props;
  let getDataType = useMemo(() => {
    let p=term_unit[props.term_unit]?.text
    return productType === FinanceDataTypeEmu.ElectronicGuarantee
      ? [
        {
          label: (
            <span className="text-[#333]">
              收费标准
              <span className="font-normal text-xs text-gray-400 leading-3 ml-6">
                以审批结果为准
              </span>
            </span>
          ),
          value: `${rate}`,
          p: "%",
        },
      ]
      : productType === FinanceDataTypeEmu.EquityFinancing
        ? [
          {
            label: <span className="text-[#333]">最低利率</span>,
            value: <span className="text-[20px]"><span className="text-[40px]">{rate}</span>%</span>,
          },
        ]
        : productType === FinanceDataTypeEmu.EmergencyRefinancing
          ? []
          : productType === FinanceDataTypeEmu.Insurance?[
            {
              label: "保额",
              value: amount,
              p: "万元",
            },
            {
              label: "期限",
              value: `1-${term}`,
              p
            },
          ]:[
            {
              label: "最高额度",
              value: amount,
              p: "万元",
            },
            {
              label: "最低费率",
              value: rate,
              p: "%",
            },
            {
              label: "期限",
              value: `1-${term}`,
              p
            },
          ];
  }, [props]);
  return getDataType;
};

export const useRepaymentMethod = (dataInfo: FinanceItemProps) => {
  let repaymentMethodLabel = useMemo(() => {
    return repaymentMethodOp
      .reduce((pre: any[], item) => {
        if (dataInfo?.repayment_method?.includes(item.value)) {
          pre.push(item.label);
        }
        return pre;
      }, [])
      .join("/");
  }, [dataInfo?.repayment_method]);
  return { repaymentMethodLabel };
};
export const useDataType = (dataInfo: FinanceItemProps) => {
  let dataTypeLabel = useMemo(() => {
    if(FinanceDataTypeEmu.Insurance===dataInfo?.productType){
      return keys(insurance_type).map(item=>{
        return {
          label:insurance_type[item].text,
          value:item+'',
        }
      })
      .reduce((pre: any[], item) => {
        if (dataInfo?.dataType?.includes((item.value+'') as any)) {
          pre?.push?.(item.label);
        }
        return pre;
      }, [])
      .join("/");
    }else{
      return collateralOp
      .reduce((pre: any[], item) => {
        if (dataInfo?.dataType?.includes(item.value)) {
          pre?.push?.(item.label);
        }
        return pre;
      }, [])
      .join("/");
    }
    
  }, [dataInfo?.dataType]);
  return { dataTypeLabel };
};

export const useFundModal = () => {
  let getFundModal = useCallback(() => {
    TzConfirm({
      footer: (_, { OkBtn, CancelBtn }) => (
        <div className="flex items-center justify-center mt-[20px] mb-2">
          <CancelBtn />
        </div>
      ),
      cancelText: "关闭",
      content: <FundContent />,
    });
  }, []);
  return { getFundModal };
};

type ImgCodeType = "user_login" | "register";
export const useGetImgCode = (send_type: ImgCodeType = "user_login") => {
  let [imgCode, setImgCode] = useState("");
  let [token, setToken] = useState("");
  let getImgCode = useCallback(async () => {
    let uniqueToken = localStorage.getItem("uniqueToken");
    if (!uniqueToken) {
      let res = await getUnique();
      let { token } = res;
      setToken(token)
      localStorage.setItem("uniqueToken", token);
    }
    postImgCode({
      //  token, 
      send_type
    }).then((res: any) => {
      setImgCode(res.img);
    });
  }, []);
  return {
    getImgCode,
    imgCode,
    token,
  };
};
export const useGetPhoneCode = () => {
  let [token, setToken] = useState("");
  let getPhoneCode = useCallback((val?: any) => {

    return new Promise(async (resolve, reject) => {

      let uniqueToken = localStorage.getItem("uniqueToken");
      if (!uniqueToken) {
        let res = await getUnique();
        let { token } = res;
        setToken(token)
        localStorage.setItem("uniqueToken", token);
      }
      let res1 = await postPhoneCode({ ...val });
      if (res1.code != 200) {
        reject();
        return;
      }
      resolve(res1);
    });
  }, []);
  return {
    getPhoneCode,
    token,
  };
};
export const useUserInfo = () => {
  let [userInfo, setUserInfo] = useState({});
  let getUserInfoFn = useCallback(async (cal?: (arg: any) => void) => {
    let res = await getUserInfo();
    if (res.code != 200) {
      return;
    }
    setUserInfo(res.data);
    cal?.(res.data);
  }, []);
  return {
    getUserInfoFn,
    userInfo,
  };
};
export const useGetArea = () => {
  let [area, setArea] = useState(null!);
  let getAreaFn = useCallback(async () => {
    let res = await getArea();
    if (res.code != 200) {
      return;
    }
    setArea(res.data);
  }, []);
  useEffect(() => {
    getAreaFn();
  }, [getAreaFn]);
  return {
    area,
  };
};
export const useGetLoanDetail = (props) => {
  let [dataInfo, setDataInfo] = useState<FinanceItemProps>();
  let getLoanDetail = useCallback(async () => {
    productDetail(props).then((res) => {
        res?.data&&setDataInfo(dealProduct(res.data));
    });
  }, [props.id]);
  useEffect(() => {
    getLoanDetail();
  }, [getLoanDetail]);
  return {
    dataInfo,
  };
};



