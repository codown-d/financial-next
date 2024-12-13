import { colorScale } from "@/constant";
import { GuaranteeMethodEmu } from "@/fetch/definition";
import dayjs from "dayjs";
import { isArray } from "lodash";
// import dayjs from 'dayjs';

export function generateRandomColor() {
  let r, g, b;
  do {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
  } while ((r > 240 && g > 240 && b > 240) || (r < 15 && g < 15 && b < 15));

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

export function getColorScale(i: number) {
  let index = i % colorScale.length;
  return colorScale[index];
}

export function timeFormat(time: number, format = "YYYY-MM-DD HH:mm:ss") {
  return dayjs(time).format(format);
}
export function dealProduct(item) {
  return {
    ...item,
    logoUrl: item.financial_organs?.logo || "/images/logo.png",
    amount: item.highest_money,
    dataType: isArray(item.data_type)?item.data_type.map(item=>item+''):[item.data_type+''] ,
    productType:item.product_type,
    success_count: item.success_count<50? ? Math.ceil(Math.random() * 150+50): item.success_count,
    applicationInformation:item.application_info,
    productIntroduction:item.product_intro,
    beneficiary:item.product_intro,
    serviceObjects:item.service_object,
    guaranteePeriod:item.term,
    guaranteeAmount:item.highest_money,
    repaymentMethod:item.repayment_method,
    applicationConditions:item.application_condition,
  };
}

export function logout(){
  localStorage.removeItem('token')
  localStorage.removeItem('userInfo')
  window.location.href = '/'
 
}