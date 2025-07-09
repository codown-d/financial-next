import {
  MicroloansOp,
  purposeOp,
  repaymentMethodOp,
  selectOp,
  term_unitOp,
} from "@/constant";
import { FinanceDataTypeEmu } from "@/fetch/definition";
import { useGlobalContext } from "@/hooks/GlobalContext";
import {
  ProFormDigit,
  ProFormInstance,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-components";
import { MutableRefObject, useMemo } from "react";

export default function ProductApplication(props: {
  formRef: MutableRefObject<ProFormInstance>;
  product_type: FinanceDataTypeEmu;
}) {
  let { formRef, product_type } = props;
  console.log(props);
  let { userInfo } = useGlobalContext();
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
    <>
      <ProFormSelect
        colProps={{
          span: 12,
        }}
        name="verify_type"
        label={
          product_type == FinanceDataTypeEmu.EquityFinancing ? "公司" : "类型"
        }
        rules={[{ required: true, message: "请选择类型" }]}
        fieldProps={{
          options: newMicroloansOp,
          onChange: (value) => {
            if (value == 1) {
              formRef.current?.setFieldsValue({
                name: userInfo?.realname?.name,
                idcard: userInfo?.realname?.idcard,
                user_name: userInfo?.user_name,
                term: undefined,
              });
            } else if (value == 2) {
              formRef.current?.setFieldsValue({
                name: userInfo?.enterprise?.name,
                idcard: userInfo?.enterprise?.idcard,
                user_name: userInfo?.user_name,
                term: undefined,
              });
            }
          },
        }}
      />
      <ProFormText
        label="公司名称/姓名"
        name="name"
        disabled
        rules={[{ required: true, message: "请输入公司名称/姓名" }]}
        colProps={{
          span: 12,
        }}
      />
      <ProFormDigit
        label="证件号码"
        disabled
        name={"idcard"}
        rules={[{ required: true, message: "请输入证件号码" }]}
        colProps={{
          span: 12,
        }}
      />
      <ProFormDigit
        label="申请金额"
        name={"apply_money"}
        addonAfter={<a>万元</a>}
        rules={[{ required: true, message: "请输入申请金额" }]}
        colProps={{
          span: 12,
        }}
      />
      <ProFormDigit
        label="申请期限"
        name="term"
        addonAfter={
          <ProFormSelect
            initialValue={
              product_type == FinanceDataTypeEmu.EquityFinancing ? 1 : 2
            }
            formItemProps={{ style: { marginBottom: 0 } }}
            name="term_unit"
            disabled={product_type == FinanceDataTypeEmu.EquityFinancing}
            fieldProps={{ options: term_unitOp }}
          />
        }
        rules={[{ required: true, message: "请输入申请期限" }]}
        colProps={{
          span: 12,
        }}
      />
      <ProFormSelect
        label={
          [
            FinanceDataTypeEmu.EquityFinancing,
            FinanceDataTypeEmu.BankLoans,
            FinanceDataTypeEmu.Microloans,
          ].includes(product_type)
            ? "担保措施"
            : "反担保措施"
        }
        name={"guarantee_method"}
        rules={[{ required: true, message: "请选择" }]}
        fieldProps={{ options: selectOp }}
        colProps={{
          span: 12,
        }}
      />
      <ProFormSelect
        label="用途"
        initialValue={
          product_type == FinanceDataTypeEmu.EquityFinancing ? "4" : undefined
        }
        disabled={product_type == FinanceDataTypeEmu.EquityFinancing}
        name={"purpose"}
        rules={[{ required: true, message: "请选择用途" }]}
        fieldProps={{ options: purposeOp }}
        colProps={{
          span: 12,
        }}
      />
      <ProFormSelect
        label="还款方式"
        initialValue={
          product_type == FinanceDataTypeEmu.EquityFinancing ? "3" : undefined
        }
        disabled={product_type == FinanceDataTypeEmu.EquityFinancing}
        name={"repayment_method"}
        rules={[{ required: true, message: "请选择还款方式" }]}
        fieldProps={{ options: repaymentMethodOp }}
        colProps={{
          span: 12,
        }}
      />
      <ProFormText
        label="联系方式"
        name={"user_name"}
        rules={[{ required: true, message: "请联系方式" }]}
        disabled
        colProps={{
          span: 12,
        }}
      />
    </>
  );
}
