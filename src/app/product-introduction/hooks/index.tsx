import TzModal, { TzConfirm } from "@/components/TzModal";
import { DescriptionsProps, Form, FormInstance, message } from "antd";
import { useCallback, useState } from "react";
import ProductApplication from "../components/ProductApplication";
import ApplicationSuccess from "../components/ApplicationSuccess";
import ApplicationFail from "../components/ApplicationFail";
import { TzButton } from "@/components/TzButton";
import { productApply } from "@/fetch";
import { keys } from "lodash";

export default function useApplicationAction() {
  let [failVisible, setFailVisible] = useState(false);
  let [successVisible, setSuccessVisible] = useState(false);
  let [submitVisible, setSubmitVisible] = useState(false);
  let Submit = (props: {
    form: FormInstance<any>;
    type: string;
    product_id:string;
    callback?: (arg: any) => void;
  }) => {
    let { form, type, callback,product_id } = props;
    return (
      <TzModal
        closeIcon={false}
        width={620}
        open={submitVisible}
        title={
          <div className="text-center font-bold mb-[50px] text-2xl pt-10 text-gray-800  leading-[32px]">
            {type}
          </div>
        }
        okButtonProps={{
          shape: "round",
          style: { minWidth: "120px" },
        }}
        cancelButtonProps={{
          shape: "round",
          style: { minWidth: "120px" },
        }}
        footer={(_, { OkBtn, CancelBtn }) => (
          <div className="flex items-center justify-center mt-[40px] mb-2">
            <CancelBtn />
            <div className="ml-5">
              <OkBtn />
            </div>
          </div>
        )}
        okText={"提交申请"}
        onCancel={() => {
          setSubmitVisible(false);
        }}
        onOk={() => {
          return form
            .validateFields()
            .then((val) => {
              productApply(val).then((res) => {
                if (res.code == 200) {
                  callback?.(val);
                  setSubmitVisible(false);
                  form.resetFields();
                  message.success("申请成功");
                }
              });
            })
            .catch();
        }}
      >
        <ProductApplication formIns={form} product_id={product_id} />
      </TzModal>
    );
  };
  let Success = (props: DescriptionsProps) => {
    let { items } = props;
    console.log(items)
    let newItemsList = keys(items).map((item) => {
      return {
        key: item,
        label: 'UserName',
        children: <p>Zhou Maomao</p>,
      }
    })
    
    return (
      <TzModal
        closeIcon={false}
        width={620}
        open={successVisible}
        styles={{ content: { padding: "0px 0px 20px" } }}
        footer={
          <div className="flex items-center justify-center mt-[40px] mb-2">
            <TzButton
              shape={"round"}
              type={"primary"}
              style={{ minWidth: "120px" }}
              onClick={() => {
                setSuccessVisible(false);
              }}
            >
              关闭
            </TzButton>
          </div>
        }
      >
        <ApplicationSuccess items={items} />
      </TzModal>
    );
  };
  let Fail = () => {
    return (
      <TzModal
        width={620}
        closeIcon={false}
        open={failVisible}
        styles={{ content: { padding: "0px 0px 20px" } }}
        okText={"重新申请"}
        cancelText={"关闭"}
        onOk={() => {
          setFailVisible(false);
          setSubmitVisible(true);
        }}
        onCancel={() => {
          setFailVisible(false);
        }}
        okButtonProps={{
          shape: "round",
          style: { minWidth: "120px" },
        }}
        cancelButtonProps={{
          shape: "round",
          style: { minWidth: "120px" },
        }}
        footer={(_, { OkBtn, CancelBtn }) => (
          <div className="flex items-center justify-center mt-[40px] mb-2">
            <CancelBtn />
            <div className="ml-5">
              <OkBtn />
            </div>
          </div>
        )}
      >
        <ApplicationFail />
      </TzModal>
    );
  };
  return {
    Submit,
    setSubmitVisible,
    Success,
    setSuccessVisible,
    Fail,
    setFailVisible,
  };
}
