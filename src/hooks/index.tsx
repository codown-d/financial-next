import { TzConfirm } from "@/components/TzModal";
import FundContent from "@/components/UI/FundContent";
import { collateralOp, repaymentMethodOp } from "@/constant";
import {
  getArea,
  getUnique,
  getUserInfo,
  postImgCode,
  postPhoneCode,
} from "@/fetch";
import { FinanceDataTypeEmu, FinanceItemProps } from "@/fetch/definition";
import { promises } from "dns";
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
            value: <span className="text-[20px]">当期LPR</span>,
          },
        ]
      : productType === FinanceDataTypeEmu.EmergencyRefinancing
      ? []
      : [
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
            p: "个月",
          },
        ];
  }, [props]);
  return getDataType;
};

export const useRepaymentMethod = (dataInfo: FinanceItemProps) => {
  let repaymentMethodLabel = useMemo(() => {
    return repaymentMethodOp
      .reduce((pre: any[], item) => {
        if (dataInfo?.repaymentMethod?.includes(item.value)) {
          pre.push(item.label);
        }
        return pre;
      }, [])
      .join("/");
  }, [dataInfo?.repaymentMethod]);
  return { repaymentMethodLabel };
};
export const useDataType = (dataInfo: FinanceItemProps) => {
  let dataTypeLabel = useMemo(() => {
    return collateralOp
      .reduce((pre: any[], item) => {
        if (dataInfo?.dataType?.includes(item.value)) {
          pre?.push?.(item.label);
        }
        return pre;
      }, [])
      .join("/");
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
  let getImgCode = useCallback(() => {
    getUnique().then((res) => {
      let { token } = res;
      setToken(token);
      postImgCode({ token, send_type }).then((res: any) => {
        setImgCode(res.img);
      });
    });
  }, []);
  return {
    getImgCode,
    imgCode,
    token,
  };
};
export const useGetPhoneCode = () => {
  let getPhoneCode = useCallback((val?: any) => {
    return new Promise(async (resolve, reject) => {
      let res = await getUnique();
      if (res.code != 200) {
        reject();
        return;
      }
      let res1 = await postPhoneCode({ ...val, token: res.token });
      if (res1.code != 200) {
        reject();
        return;
      }
      resolve(res1);
    });
  }, []);
  return {
    getPhoneCode,
  };
};
export const useUserInfo = () => {
  let [userInfo, setUserInfo] = useState({});
  let getUserInfoFn = useCallback(async (cal?: (arg: any) => void) => {
    let res = await getUserInfo();
    if (res.code != 200) {
      return;
    }
    console.log(res.data);
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
