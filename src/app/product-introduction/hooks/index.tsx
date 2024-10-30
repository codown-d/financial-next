import { TzConfirm } from "@/components/TzModal";
import { DescriptionsProps, Form } from "antd";
import { useCallback } from "react";
import ProductApplication from "../components/ProductApplication";
import ApplicationSuccess from "../components/ApplicationSuccess";
import ApplicationFail from "../components/ApplicationFail";

export default function useApplicationAction() {
  let [form] = Form.useForm();
  let submit = useCallback(() => {
    return new Promise((resolve, reject) => {
      TzConfirm({
        title: (
          <div className="text-center font-bold mb-[50px] text-2xl text-gray-800 mt-5 leading-[32px]">
            小微贷申请
          </div>
        ),
        content: <ProductApplication formIns={form} />,
        okText: "提交申请",
        onOk() {
          return form
            .validateFields()
            .then((val) => {
              resolve(val);
              form.resetFields()
            })
            .catch();
        },
      });
    });
  }, []);
  let success = useCallback((items: DescriptionsProps["items"]) => {
    TzConfirm({
      title: null,
      content: <ApplicationSuccess items={items} />,
      footer: (_, { OkBtn, CancelBtn }) => (
        <div className="flex items-center justify-center mt-[40px] mb-2">
          <CancelBtn />
        </div>
      ),
      styles:{content:{padding:'0px 0px 20px'}},
      cancelText: "关闭",
    });
  }, []);
  let fail = useCallback(() => {
    TzConfirm({
      title: null,
      content: <ApplicationFail />,
      okText: "重新申请",
      cancelText: "关闭",
      styles:{content:{padding:'0px 0px 20px'}},
      onOk() {},
    });
  }, []);

  return { submit, success, fail };
}
