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
  const handleValuesChange = useCallback(
    (changedValues, allValues) => {
      if (changedValues.verify_type == 1) {
        formIns.setFieldsValue({
          name: userInfo?.realname.name,
          idcard: userInfo?.realname.idcard,
          user_name:userInfo?.user_name,
          term:undefined
        });
      } else if (changedValues.verify_type == 2) {
        formIns.setFieldsValue({
          name: userInfo?.enterprise?.name,
          idcard: userInfo?.enterprise?.idcard,
          user_name:userInfo?.user_name,
          term:undefined
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
        <TzFormItem name={"term_unit"} hidden initialValue={2}>
          <TzInput />
        </TzFormItem>
        <TzFormItem
          label="类型"
          name={"verify_type"}
          rules={[{ required: true, message: "请选择类型" }]}
        >
          <TzSelect placeholder="请选择" options={newMicroloansOp} />
        </TzFormItem>
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
            initialValue={2}
          >
            <TzSelect options={term_unitOp} />
          </TzFormItem>
        </TzFormItem>
        <TzFormItem
          label="反担保措施"
          name={"guarantee_method"}
          rules={[{ required: true }]}
        >
          <TzSelect placeholder="请选择" options={selectOp} />
        </TzFormItem>
        <TzFormItem label="用途" name={"purpose"} rules={[{ required: true }]}>
          <TzSelect placeholder="请选择" options={purposeOp} />
        </TzFormItem>

        <TzFormItem
          label="还款方式"
          name={"repayment_method"}
          rules={[{ required: true }]}
        >
          <TzSelect placeholder="请选择" options={repaymentMethodOp} />
        </TzFormItem>
        <TzFormItem
          label="联系方式"
          name={"user_name"}
          rules={[{ required: true }]}
        >
          <TzInput placeholder="请输入" disabled/>
        </TzFormItem>
      </TzForm>
    </ConfigProvider>
  );
}
