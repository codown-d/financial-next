import {
  getHotWords,
  getInvestmentTableData,
  getPolicyTableData,
} from "../mock";
import api from "./api";
import http from "./http";
import { FinanceItemProps, IResponseData } from "./definition";
const apiHost = process.env.NEXT_PUBLIC_API_HOST;
export const getServerSidePolicyList = async (params): Promise<IResponseData<any>> => {
  if (process.env.NEXT_PUBLIC_USE_MOCK) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getPolicyTableData());
      }, 50);
    });
  } else {
    return http.get(api.policy, params);
  }
};

export interface InvestmentListProps {
  resource: string;
  module: string;
  resource2: string;
}

export const getInvestmentList = async (
  params?: any
): Promise<IResponseData<InvestmentListProps>> => {
  if (process.env.NEXT_PUBLIC_USE_MOCK) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getInvestmentTableData());
      }, 50);
    });
  } else {
    return http.get(api.policy, params);
  }
};
export const getHotWordList = async (
  params?: any
): Promise<IResponseData<any>> => {
  if (process.env.NEXT_PUBLIC_USE_MOCK) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getHotWords());
      }, 50);
    });
  } else {
    return http.get(api.policy, params);
  }
};
interface ResProps {
  code: Number;
  data: any;
}
interface GetPolicyListProps {
  custom: {
    list: any[];
    totalnum: number;
  };
}
export const getApplyPolicyList = async (
  params?: any
): Promise<IResponseData<GetPolicyListProps>> => {
  return http.post(
    `${apiHost}/admin/enterprise/service/policy/all/list`,
    params
  );
};
export const getPolicyByRowguid = async (
  params?: any
): Promise<IResponseData<GetPolicyListProps>> => {
  return http.post(
    "https://gyx.gyzwfw.com/gygyx/rest/ayystPolicy/getPolicyByRowguid",
    params
  );
};
export const yhb1loginajax = async (
  params?: any
): Promise<IResponseData<any>> => {
  return http.post(
    "http://129.211.162.64/gy001/public/Api2024/yhb1loginajax",
    params
  );
};


export const postYhb1loginajax = async (
  params?: any
): Promise<IResponseData<GetPolicyListProps>> => {
  return http.post(api.yhb1loginajax, params);
};
export const getUnique = async (params?: any): Promise<IResponseData<any>> => {
  return http.get(api.unique, params);
};
export const postImgCode = async (params: any): Promise<IResponseData<any>> => {
  let { token,...otherParams } = params;
  return http.post(api.imgCode, otherParams, { headers: { token: token } });
};
export const login = async (
  params?: any
): Promise<IResponseData<any>> => {
  let { token ,...otherParams} = params;
  return http.post(api.userLogin, otherParams, {
    headers: { token },
  });
};
export const getUserInfo = async (params?: any): Promise<IResponseData<any>> => {
  return http.get(api.userInfo, params, {silence:true});
};
export const getProduct = async (params?: any): Promise<IResponseData<any>> => {
  return http.get(api.product, params, );
};
export const getPolicyList = async (params?: any): Promise<IResponseData<any>> => {
  return http.get(api.policyList, params, );
};
export const getPolicyThemeFeature = async (params?: any): Promise<IResponseData<any>> => {
  return http.get(api.policyThemeFeature, params, );
};
export const getPolicyDetail = async (params?: any): Promise<IResponseData<any>> => {
  let {id} = params
  return http.get(`${api.policyDetail}/${id}`, params, );
};
export const getServicePolicy = async (params?: any): Promise<IResponseData<any>> => {
  return http.get(`${api.servicePolicy}`, params, );
};
export const postPhoneCode = async (params?: any): Promise<IResponseData<any>> => {
  let { token,...otherParams } = params;
  console.log(token)
  return http.post(`${api.phoneCode}`, otherParams, { headers: { token: token } });
};
export const modifyPass = async (params?: any): Promise<IResponseData<any>> => {
  return http.post(`${api.modifyPass}`, params);
};
export const userRegister = async (params?: any): Promise<IResponseData<any>> => {
  let { token,...otherParams } = params;
  return http.post(`${api.userRegister}`, otherParams,{ headers: { token: token } });
};
export const phoneLogin = async (params?: any): Promise<IResponseData<any>> => {
  return http.post(`${api.phoneLogin}`, params);
};
export const phoneModify = async (params?: any): Promise<IResponseData<any>> => {
  return http.post(`${api.phoneModify}`, params);
};
export const quit = async (params?: any): Promise<IResponseData<any>> => {
  return http.post(`${api.quit}`, params);
};
export const adminQuit = async (params?: any): Promise<IResponseData<any>> => {
  return http.get(`${api.adminQuit}`, params);
};

export const userVerify = async (params?: any): Promise<IResponseData<any>> => {
  return http.post(`${api.userVerify}`, params);
};
export const enterpriseVerify = async (params?: any): Promise<IResponseData<any>> => {
  return http.post(`${api.enterpriseVerify}`, params);
};
export const getArea = async (params?: any): Promise<IResponseData<any>> => {
  return http.get(`${api.getArea}`, params);
};
export const productRecommend = async (params?: any): Promise<IResponseData<any>> => {
  return http.get(`${api.productRecommend}`, params);
};
export const productDetail = async (params?: any): Promise<IResponseData<FinanceItemProps>> => {
  let {id }=params
  return http.get(`${api.productDetail}/${id}`, params);
};
export const productApply = async (params?: any): Promise<IResponseData<any>> => {
  return http.post(`${api.productApply}`, params);
};
export const financeAdd = async (params?: any): Promise<IResponseData<any>> => {
  return http.post(`${api.financeAdd}`, params);
};
export const loanDetail = async (params?: any): Promise<IResponseData<FinanceItemProps>> => {
  let {id }=params
  return http.get(`${api.loanDetail}/${id}`, params);
};
export const verifyRegiste = async (params?: any): Promise<IResponseData<FinanceItemProps>> => {
  return http.post(`${api.verifyRegiste}`, params);
};
export const financeList = async (params?: any): Promise<IResponseData<FinanceItemProps>> => {
  return http.get(`${api.financeList}`, params);
};
export const applyList = async (params?: any): Promise<IResponseData<FinanceItemProps>> => {
  return http.get(`${api.applyList}`, params);
};
export const policyStatistics = async (params?: any): Promise<IResponseData<FinanceItemProps>> => {
  return http.get(`${api.policyStatistics}`, params);
};
export const themeFeature = async (params?: any): Promise<IResponseData<FinanceItemProps>> => {
  return http.get(`${api.themeFeature}`, params);
};

