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
import {
  ProFormDigit,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-components";
import { ConfigProvider, Form, FormInstance } from "antd";
import zhCN from "antd/locale/zh_CN";
import { useCallback, useEffect, useMemo } from "react";

export default function ProductApplication(props: {
  formIns: FormInstance<any>;
}) {
  let { formIns } = props;
  let { userInfo } = useGlobalContext();
  useEffect(() => {
    formIns.setFieldsValue({
      name: userInfo?.enterprise?.name,
      idcard: userInfo?.enterprise?.idcard,
      term: undefined,
    });
  }, [userInfo]);
  return (
    <>
      <ProFormText
        initialValue={2}
        name={"verify_type"}
        hidden
        colProps={{
          span: 12,
        }}
      />
      <ProFormText
        label="客户名称"
        name={"name"}
        rules={[{ required: true }]}
        disabled
        colProps={{
          span: 12,
        }}
      />
      <ProFormDigit
        label="证件号码"
        disabled
        name={"idcard"}
        rules={[{ required: true }]}
        colProps={{
          span: 12,
        }}
      />
      <ProFormDigit
        label="申请金额"
        name={"apply_money"}
        addonAfter={<a>万元</a>}
        rules={[{ required: true }]}
        colProps={{
          span: 12,
        }}
      />
      <ProFormDigit
        label="申请期限"
        name="term"
        addonAfter={
          <ProFormSelect
            initialValue={2}
            formItemProps={{ style: { marginBottom: 0 } }}
            name="term_unit"
            fieldProps={{ options: term_unitOp }}
          />
        }
        rules={[{ required: true, message: "请输入申请期限" }]}
        colProps={{
          span: 12,
        }}
      />
      <ProFormSelect
        label="担保方式"
        name={"guarantee_method"}
        rules={[{ required: true }]}
        fieldProps={{ options: selectOp }}
        colProps={{
          span: 12,
        }}
      />
      <ProFormText
        label="项目名称"
        name={"project_name"}
        rules={[{ required: true }]}
        colProps={{
          span: 12,
        }}
      />
      <ProFormText
        label="保函受益人名称"
        name={"beneficiary"}
        rules={[{ required: true }]}
        colProps={{
          span: 12,
        }}
      />
    </>
  );
}
