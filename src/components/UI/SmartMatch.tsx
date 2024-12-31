import { getFormLabelList } from "@/app/product-introduction/hooks/const";
import { FinanceDataTypeEmu } from "@/fetch/definition";
import { message, Empty, DescriptionsProps, Form } from "antd";
import { TzButton } from "../TzButton";
import TzModal from "../TzModal";
import FinanceCard, { FinanceCardProps } from "./FinanceCard";
import { useGlobalContext } from "@/hooks/GlobalContext";
import useApplicationAction from "@/app/product-introduction/hooks";
import { useFundModal } from "@/hooks";
import { useEffect, useMemo, useState } from "react";
import { productRecommend } from "@/fetch";
import { dealProduct } from "@/lib";
import { find } from "lodash";

export default (props) => {
  let { open, setOpen } = props;
  let { userInfo } = useGlobalContext();
  let { Submit, Success, Fail, setSubmitVisible, setSuccessVisible } =
    useApplicationAction();
  const [formApply] = Form.useForm();
  let [items, setItems] = useState<DescriptionsProps["items"]>([]);
  let { getFundModal } = useFundModal();
  let [marketDataList, setMarketDataList] = useState<FinanceCardProps[]>([]);
  let getProductRecommend = () => {
    productRecommend({}).then((res) => {
      setMarketDataList(res.data.map(dealProduct).slice(0, 3));
    });
  };

  let [actItem, setActItem] = useState<any>("");
  let dataInfo = useMemo(() => {
    let node = find(marketDataList, (item) => item.id === actItem);
    return node;
  }, [actItem]);
  useEffect(() => {
    getProductRecommend();
  }, []);
  return (
    <>
      <TzModal
        width={1200}
        open={open}
        closeIcon={false}
        footer={
          <div className="flex items-center justify-center mt-[20px] mb-2">
            <TzButton shape={"round"} onClick={() => setOpen(false)}>
              关闭
            </TzButton>
            <TzButton
              className="ml-5"
              shape={"round"}
              type={"primary"}
              onClick={() => {
                if (
                  userInfo?.verify_status == 3 ||
                  userInfo?.enterprise_verify_status == 3
                ) {
                  if (
                    [
                      FinanceDataTypeEmu.EmergencyRefinancing,
                      FinanceDataTypeEmu.Insurance,
                    ].includes(dataInfo?.product_type)
                  ) {
                    getFundModal();
                  } else {
                    setSubmitVisible(true);
                  }
                } else {
                  message.error("暂无权限请实名之后申请！");
                }
              }}
            >
              提交申请
            </TzButton>
          </div>
        }
        okText={"提交申请"}
        title={
          <div className="text-center font-bold mb-[50px] text-2xl text-gray-800 mt-5 leading-[32px]">
            智能匹配
          </div>
        }
      >
        <div className="flex  mb-[100px] justify-center  space-x-8">
          {marketDataList.length == 0 ? (
            <Empty />
          ) : (
            marketDataList.map((item, index) => {
              return (
                <div key={index} 
                  className={`flex flex-1 w-0 rounded-[8px] ${
                    actItem == item.id ? "act-item-card" : ""
                  }`}
                  style={{ border: "2px solid transparent" }}
                  onClick={() => {
                    setActItem(item.id);
                  }}
                >
                  <FinanceCard {...item} />
                </div>
              );
            })
          )}
        </div>
      </TzModal>
      <Submit
        form={formApply}
        product_id={dataInfo?.id}
        product_type={dataInfo?.productType}
        type={"业务申请"}
        callback={(val) => {
          setItems(getFormLabelList(val));
          setSuccessVisible(true);
        }}
      />
      <Success items={items} />
      <Fail />
    </>
  );
};
