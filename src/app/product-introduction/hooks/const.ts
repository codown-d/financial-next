import { MicroloansOp, purposeOp, repaymentMethodOp, selectOp } from "@/constant";
import { find, keys } from "lodash";

export const formLabelObj = {
  verify_type: "类型",
  name: "公司名称/姓名",
  idcard: "证件号码",
  apply_money: "申请金额",
  term: "申请期限",
  loan_guarantee_method: "担保方式",
  purpose:'用途',
  repayment_method:'还款方式',
  contact: "联系方式",
};

export const getFormLabelList = (val: any)=>{
  return keys(val).filter(item=>!['product_id','term_unit'].includes(item)).reduce((pre, item) => {
    let text = val[item];
    if ("apply_money" === item) {
      text = `${text} 万元`;
    } else if ("term" === item) {
      text = `${text} 个月`;
    } else if ("verify_type" === item) {
      text = find(MicroloansOp, (ite) => ite.value == text)?.label;
    } else if ("loan_guarantee_method" === item) {
      text = find(selectOp, (ite) => ite.value == text)?.label;
    }else if ("repayment_method" === item) {
      text = find(repaymentMethodOp, (ite) => ite.value == text)?.label;
    }else if ("purpose" === item) {
      text = find(purposeOp, (ite) => ite.value == text)?.label;
    }
    pre.push({
      key: item,
      label: formLabelObj[item],
      children: text,
    });
    return pre;
  }, []);
}