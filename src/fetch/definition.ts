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

  [x:string]:any;
}
export enum FinancingEntityEmu {
  /** 企业 */
  Enterprise = 2,
  /** 个人 */
  Personal = 3,
}
export enum FinancingTypeEmu {
  /** 政策性 */
  Policy = 2,
  /**  商业性 */
  Commercial = 1,
}
export enum InstitutionTypeEmu {
  /** 银行 */
  Bank = 1,
  /**  担保 */
  Guaranteed =3,
  /**  小额贷款 */
  SmallLoan = 2,
  /**  基金 */
  Fund = 5,
}
export enum GuaranteeMethodEmu {
  /** 信用 */
  Credit = 1,
  /**  抵质押 */
  LoanPledge = 2,
  /**  保证 */
  Guarantee = 3,
  /**  组合 */
  Combination = 4,
  /**  电子保函 */
  ElectronicGuarantee = "electronicGuarantee",
  /**  纸质保函 */
  PaperGuarantee = "paperGuarantee",
}
export enum FilterSortEmu {
   /** 暂无排序 */
  All = "",
  /** 升序 */
  Desc = "desc",
  /**  降序 */
  Asc = "asc",
}

export interface FinanceItemProps {
  tabType: TabType;
  add_time?:number;
  id: string|number;
  fo_id?:number;
  dataType: FinanceDataTypeEmu;
  logoUrl: string;//logo
  companyName: string;
  prodType: string;
  name: string;
  rateDown: string;
  rateUp: string;
  rate: number|string;
  term: number;//贷款期限
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
