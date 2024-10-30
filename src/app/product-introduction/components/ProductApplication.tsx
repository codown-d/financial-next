import { TzForm, TzFormItem, TzInput } from "@/components";
import TzInputNumber from "@/components/TzInputNumber";
import TzSelect from "@/components/TzSelect";
import { MicroloansOp, MicroloansOp2, selectOp } from "@/constant";
import { ConfigProvider, FormInstance } from "antd";
import zhCN from "antd/locale/zh_CN";

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
        <TzFormItem
          label="类型"
          name={"type"}
          rules={[{ required: true, message: "请选择类型" }]}
        >
          <TzSelect placeholder="请选择" options={MicroloansOp} />
        </TzFormItem>
        <TzFormItem
          label="公司名称/姓名"
          name={"name"}
          rules={[{ required: true }]}
        >
          <TzInput placeholder="请输入" />
        </TzFormItem>
        <TzFormItem
          label="证件号码"
          name={"credential"}
          rules={[{ required: true }]}
        >
          <TzInputNumber placeholder="请输入" />
        </TzFormItem>
        <TzFormItem
          label="申请金额"
          name={"amount"}
          rules={[{ required: true }]}
        >
          <TzInputNumber placeholder="请输入" suffix="元" />
        </TzFormItem>
        <TzFormItem
          label="申请期限"
          name={"deadline"}
          rules={[{ required: true }]}
        >
          <TzInput placeholder="请输入" type="n" />
        </TzFormItem>
        <TzFormItem
          label="反担保措施"
          name={"measure"}
          rules={[{ required: true, message: "请选择反担保措施" }]}
        >
          <TzSelect placeholder="请选择" options={selectOp} />
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
