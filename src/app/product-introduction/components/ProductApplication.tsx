import { TzForm, TzFormItem, TzInput } from "@/components";
import TzInputNumber from "@/components/TzInputNumber";
import TzSelect from "@/components/TzSelect";
import { MicroloansOp, purposeOp, repaymentMethodOp, selectOp } from "@/constant";
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
  product_id: string;
}) {
  let { formIns, product_id } = props;
  let { userInfo } = useGlobalContext();
  const handleValuesChange = useCallback(
    (changedValues, allValues) => {
      if (changedValues.verify_type == 1) {
        formIns.setFieldsValue({
          name: userInfo?.realname_name,
          idcard: userInfo?.idcard,
        });
      } else if (changedValues.verify_type == 2) {
        formIns.setFieldsValue({
          name: userInfo?.enterprise_name,
          idcard: userInfo?.idcard,
        });
      }
    },
    [userInfo]
  );
  let newMicroloansOp = useMemo(() => {
    return MicroloansOp.map((item) => {
      if (item.value == "2") {
        return {
          ...item,
          disabled: userInfo?.enterprise_verify_status != 3,
          label: item.label,
        };
      } else if (item.value == "1") {
        return {
          ...item,
          disabled: userInfo?.verify_status != 3,
          label: item.label,
        };
      }
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
        onValuesChange={handleValuesChange}
      >
        <TzFormItem name={"product_id"} hidden initialValue={product_id}>
          <TzInput />
        </TzFormItem>
        <TzFormItem name={"term_unit"} hidden initialValue={2}>
          <TzInput />
        </TzFormItem>
        {true ? (
          <TzFormItem
            label="类型"
            name={"verify_type"}
            rules={[{ required: true, message: "请选择类型" }]}
          >
            <TzSelect placeholder="请选择" options={newMicroloansOp} />
          </TzFormItem>
        ) : (
          <TzFormItem
            label="类型"
            initialValue={"2"}
            name={"verify_type"}
            rules={[{ required: true, message: "请选择类型" }]}
          >
            <TzSelect placeholder="请选择" options={newMicroloansOp} disabled />
          </TzFormItem>
        )}
        <TzFormItem
          label="公司名称/姓名"
          name={"name"}
          rules={[{ required: true }]}
        >
          <TzInput placeholder="请输入" disabled />
        </TzFormItem>
        <TzFormItem
          label="证件号码"
          name={"idcard"}
          rules={[{ required: true }]}
        >
          <TzInputNumber placeholder="请输入" />
        </TzFormItem>
        <TzFormItem
          label="申请金额"
          name={"apply_money"}
          rules={[{ required: true }]}
        >
          <TzInputNumber placeholder="请输入" suffix="万元" />
        </TzFormItem>
        <TzFormItem label="申请期限" name={"term"} rules={[{ required: true }]}>
          <TzInputNumber placeholder="请输入" suffix="月" />
        </TzFormItem>
        <TzFormItem
          label="反担保措施"
          name={"loan_guarantee_method"}
          rules={[{ required: true }]}
        >
          <TzSelect placeholder="请选择" options={selectOp} />
        </TzFormItem>
        <TzFormItem label="用途" name={"purpose"} rules={[{ required: true }]}>
          <TzSelect placeholder="请选择" options={purposeOp} />
        </TzFormItem>
        
        <TzFormItem label="还款方式" name={"repayment_method"} rules={[{ required: true }]}>
          <TzSelect placeholder="请选择" options={repaymentMethodOp} />
        </TzFormItem>
        <TzFormItem
          label="联系方式"
          name={"contact"}
          rules={[{ required: true }]}
        >
          <TzInput placeholder="请输入" />
        </TzFormItem>
      </TzForm>
    </ConfigProvider>
  );
}
