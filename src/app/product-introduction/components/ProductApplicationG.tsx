import { TzForm, TzFormItem, TzInput } from "@/components";
import TzInputNumber from "@/components/TzInputNumber";
import TzSelect from "@/components/TzSelect";
import {
  MicroloansOp,
  purposeOp,
  repaymentMethodOp,
  selectOp,
  term_unitOp,
} from "@/constant";
import { useGlobalContext } from "@/hooks/GlobalContext";
import { ConfigProvider, Form, FormInstance } from "antd";
import zhCN from "antd/locale/zh_CN";
import { useCallback, useEffect, useMemo } from "react";

export interface ApplicationProps {
  type: string;
  name: string;
  credential: string;
  amount: string;
  deadline: string;
  measure: string;
  contact: string;
}
export default function ProductApplication(props: {
  formIns: FormInstance<any>;
}) {
  let { formIns } = props;
  let { userInfo } = useGlobalContext();
  useEffect(() => {
    formIns.setFieldsValue({
      name: userInfo?.enterprise.name,
      idcard: userInfo?.enterprise.idcard,
    });
  }, [userInfo]);
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        components: {
          Form: {
            itemMarginBottom: 32,
          },
        },
      }}
    >
      <TzForm
        form={formIns}
        labelCol={{ flex: "120px" }}
        wrapperCol={{ flex: "400px" }}
        colon={false}
        labelAlign={"right"}
      >
        <TzFormItem name={"term_unit"} hidden initialValue={2}>
          <TzInput />
        </TzFormItem>
        <TzFormItem name={"verify_type"} initialValue={2} hidden>
          <TzInput />
        </TzFormItem>
        <TzFormItem label="客户名称" name={"name"} rules={[{ required: true }]}>
          <TzInput placeholder="请输入" disabled />
        </TzFormItem>
        <TzFormItem
          label="证件号码"
          name={"idcard"}
          rules={[{ required: true }]}
        >
          <TzInputNumber placeholder="请输入" disabled />
        </TzFormItem>
        <TzFormItem
          label="申请金额"
          name={"apply_money"}
          rules={[{ required: true }]}
        >
          <TzInputNumber placeholder="请输入" suffix="万元" />
        </TzFormItem>
        <TzFormItem label="申请期限" required style={{ marginBottom: 0 }}>
          <TzFormItem
            name="term"
            rules={[{ required: true,message:'请输入申请期限' }]}
            style={{width:'calc(100% - 112px)'}}
            className="flex-1 inline-block"
          >
            <TzInputNumber placeholder="请输入" />
          </TzFormItem>
          <TzFormItem
            name="term_unit"
            className="w-[100px] inline-block !ml-3"
          >
            <TzSelect  defaultValue={2} options={term_unitOp} />
          </TzFormItem>
        </TzFormItem>
        <TzFormItem label="用途" name={"purpose"} rules={[{ required: true }]}>
          <TzSelect placeholder="请选择" options={purposeOp} />
        </TzFormItem>
        <TzFormItem
          label="担保方式"
          name={"loan_guarantee_method"}
          rules={[{ required: true }]}
        >
          <TzSelect placeholder="请选择" options={selectOp} />
        </TzFormItem>
        <TzFormItem
          label="项目名称"
          name={"product_name"}
          rules={[{ required: true }]}
        >
          <TzInput placeholder="请输入" />
        </TzFormItem>
        <TzFormItem
          label="保函受益人名称"
          name={"beneficiary"}
          rules={[{ required: true }]}
        >
          <TzInput placeholder="请输入" />
        </TzFormItem>
      </TzForm>
    </ConfigProvider>
  );
}
