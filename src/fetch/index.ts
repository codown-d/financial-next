import {
  getHotWords,
  getInvestmentTableData,
  getPolicyTableData,
} from "../mock";
import api from "./api";
import http from "./http";
import { IResponseData } from "./definition";

export const getPolicyList = async (params): Promise<IResponseData<any>> => {
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
    "https://gyx.gyzwfw.com/gygyx/rest/ayystPolicy/getPolicyList",
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
export const getProxyApplyPolicyList = async (
  params?: any
): Promise<IResponseData<GetPolicyListProps>> => {
  return http.post("/api/proxy", params);
};
export const login = async (
  params?: any
): Promise<IResponseData<GetPolicyListProps>> => {
  return http.post("/api/proxy", params,{headers:{'x-target-api':'login'}});
};
export const postYhb1loginajax = async (
  params?: any
): Promise<IResponseData<GetPolicyListProps>> => {
  return http.post(api.yhb1loginajax, params);
};

