import { TzForm, TzFormItem, TzInput } from "@/components";
import TzSelect from "@/components/TzSelect";
import { FormInstance } from "antd";

export default function ProductApplication(props: {
  formIns: FormInstance<any>;
}) {
  let { formIns } = props;
  return (
    <TzForm
      form={formIns}
      labelCol={{ flex: "120px" }}
      colon={false}
      labelAlign={"right"}
    >
      <TzFormItem label="类型" name={"amount"} rules={[{ required: true }]}>
        <TzSelect placeholder="请选择" options={[]} />
      </TzFormItem>
      <TzFormItem
        label="公司名称/姓名"
        name={"amount"}
        rules={[{ required: true }]}
      >
        <TzInput placeholder="请输入" />
      </TzFormItem>
      <TzFormItem label="证件号码" name={"amount"} rules={[{ required: true }]}>
        <TzInput placeholder="请输入" />
      </TzFormItem>
      <TzFormItem label="申请金额" name={"amount"} rules={[{ required: true }]}>
        <TzInput placeholder="请输入" suffix="元" />
      </TzFormItem>
      <TzFormItem label="申请期限" name={"amount"} rules={[{ required: true }]}>
        <TzInput placeholder="请输入" />
      </TzFormItem>
      <TzFormItem
        label="反担保措施"
        name={"amount"}
        rules={[{ required: true }]}
      >
        <TzSelect placeholder="请选择" options={[]} />
      </TzFormItem>
      <TzFormItem label="联系方式" name={"amount"} rules={[{ required: true }]}>
        <TzInput placeholder="请输入" />
      </TzFormItem>
    </TzForm>
  );
}
