import { TzConfirm } from "@/components/TzModal";
import FundContent from "@/components/UI/FundContent";
import { FinanceDataTypeEmu } from "@/constant";
import { getUnique, postImgCode } from "@/fetch";
import { FinanceItemProps } from "@/fetch/definition";
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
export const useDataType = (props: FinanceItemProps) => {
  let { dataType, rate, amount, term, rateDown, rateUp } = props;
  let getDataType = useMemo(() => {
    return dataType === FinanceDataTypeEmu.ElectronicGuarantee
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
            value: `${rateDown}-${rateUp}`,
            p: "%",
          },
        ]
      : dataType === FinanceDataTypeEmu.EquityFinancing
      ? [
          {
            label: <span className="text-[#333]">最低利率</span>,
            value: <span className="text-[20px]">当期LPR</span>,
          },
        ]
      : dataType === FinanceDataTypeEmu.EmergencyRefinancing
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
      setToken(token)
      postImgCode({ token, send_type }).then((res: any) => {
        setImgCode(res.img);
      });
    });
  }, []);
  return {
    getImgCode,
    imgCode,
    token
  };
};
