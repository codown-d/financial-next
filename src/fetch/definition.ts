import { FinanceDataTypeEmu, TabType } from "@/constant";

export interface IResponseData<T> {
  kind?: string;
  pageToken?: string;
  fields?: string;
  etag?: string;
  id?: string;
  lang?: string;
  updated?: string;
  deleted?: boolean;
  currentItemCount?: number;
  itemsPerPage?: number;
  startIndex?: number;
  totalItems?: number;
  pageIndex?: number;
  totalPages?: number;
  items?: Array<T>;
  item?: T;
  envKey?: string;
  errorOn?: Array<string>;
  waitingOn?: Array<string>;
  successOn?: Array<string>;
}
export enum FinancingEntityEmu {
  /** 企业 */
  Enterprise = "enterprise",
  /** 个人 */
  Personal = "personal",
}
export enum FinancingTypeEmu {
  /** 政策性 */
  Policy = "policy",
  /**  商业性 */
  Commercial = "commercial",
}
export enum InstitutionTypeEmu {
  /** 银行 */
  Bank = "bank ",
  /**  担保 */
  Guaranteed = "guaranteed",
  /**  小额贷款 */
  SmallLoan = "smallLoan",
  /**  基金 */
  Fund = "fund",
}
export enum GuaranteeMethodEmu {
  /** 信用 */
  Credit = "credit",
  /**  抵质押 */
  LoanPledge = "loanPledge",
  /**  保证 */
  Guarantee = "guarantee",
  /**  组合 */
  Combination = "combination",
  /**  电子保函 */
  ElectronicGuarantee = "electronicGuarantee",
  /**  纸质保函 */
  PaperGuarantee = "paperGuarantee",
}
export enum FilterSortEmu {
   /** 暂无排序 */
  All = "all",
  /** 升序 */
  Desc = "desc",
  /**  降序 */
  Asc = "asc",
}

export interface FinanceItemProps {
  tabType: TabType;
  id: string;
  dataType: FinanceDataTypeEmu;
  logoUrl: string;
  companyName: string;
  prodType: string;
  name: string;
  rateDown: string;
  rateUp: string;
  rate: number;
  term: number;
  amount: number;
  dealOrder: number;
  //融资主体
  financingEntity: FinancingEntityEmu;
  //融资类型
  financingType: FinancingTypeEmu;
  //机构类型
  institutionType: InstitutionTypeEmu;
  //担保类型
  guaranteeMethod: GuaranteeMethodEmu[];
  //产品介绍
  productIntroduction?: string;
  repaymentMethod?: string[];
  //服务对象
  serviceObjects?: string;
  applicationConditions?: string[];
  //担保额度
  guaranteeAmount?: string;
  //担保期限
  guaranteePeriod?: string;
  //受益人
  beneficiary?: string;
  //申请资料
  applicationInformation?: string;
  //基金介绍
  fundIntroduction?: string;
  //基金公司介绍
  fundCompanyIntroduction?: string;
  //位置
  location: string;
}
