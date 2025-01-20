import {
  FinanceDataTypeEmu,
  FinanceItemProps,
  FinancingEntityEmu,
  FinancingTypeEmu,
  GuaranteeMethodEmu,
  InstitutionTypeEmu,
} from "@/fetch/definition";

export const colorScale = [
  "rgb(252 211 77)",
  "rgb(52 211 153)",
  "rgb(190 242 100)",
  "rgb(45 212 191)",
  "rgb(103 232 249)",
  "rgb(129 140 248)",
  "#E377C2",
  "#7F7F7F",
  "#BCBD22",
  "#17BECF",
];

export const Bank = {
  zgyh: { img: "/images/bank/zgyh.jpg", label: "中国银行" },
  nyyh: { img: "/images/bank/nyyh.jpg", label: "中国农业银行" },
  ycyh: { img: "/images/bank/ycyh.jpg", label: "中国邮储银行" },
  jtyh: { img: "/images/bank/jtyh.jpg", label: "中国交通银行" },
  jsyh: { img: "/images/bank/jsyh.jpg", label: "中国建设银行" },
  gsyh: { img: "/images/bank/gsyh.jpg", label: "中国工商银行" },
  hsyh: { img: "/images/bank/hsyh.jpg", label: "中国华夏银行" },
  zsyh: { img: "/images/bank/zsyh.jpg", label: "中国招商银行" },
  msyh: { img: "/images/bank/msyh.jpg", label: "中国民生银行" },
  payh: { img: "/images/bank/payh.jpg", label: "中国平安银行" },
  xyyh: { img: "/images/bank/xyyh.jpg", label: "中国兴业银行" },
  lzyh: { img: "/images/bank/lzyh.jpg", label: "中国泸州银行" },
  snyh: { img: "/images/bank/snyh.jpg", label: "中国遂宁银行" },
  dzyh: { img: "/images/bank/dzyh.jpg", label: "中国达州银行" },
};

export const MenuList = [
  {
    label: "首页",
    key: "/",
    children: [],
  },
  {
    label: "融资服务",
    key: "/bank-loan",
    children: [
      {
        label: "银行贷款",
        key: "/bank-loan",
      },
      {
        label: "小额贷款",
        key: "/small-loan",
      },
      {
        label: "应急转贷",
        key: "/emergency-refinancing",
      },

      {
        label: "股权融资",
        key: "/equity-financing",
      },
    ],
  },
  {
    label: "增信服务",
    // key: "guaranteeServices",
    key: "/performance-bond",
    children: [
      {
        label: "融资担保",
        key: "/performance-bond",
      },
      {
        label: "电子保函",
        key: "/ele-bond",
      },
      {
        label: "综合保险",
        key: "/advance-payment-bond",
      },
    ],
  },
  {
    label: "金融创新服务",
    key: "institutionalServices",
    children: [
      {
        label: "数字金融工具",
        key: "/business-management",
      },
      {
        label: "风险评估服务",
        key: "/asset-management",
      },
      {
        label: "不良资产管理",
        key: "/risk-warning",
      },
    ],
  },
  {
    label: "企业公共服务",
    key: "/policy-services",
    children: [
      {
        label: "政策服务",
        key: "/policy-services",
      },
      {
        label: "数据资产入表",
        key: "/data-elements",
      },
      {
        label: "供应链贸易",
        key: "/trade-services",
      },
    ],
  },
];

export const MarketDataList: FinanceItemProps[] = [];
export const BankLoans = {
  title: "银行贷款",
  description: "银行金融业机构，为企业和个人提供资金支持。",
  key: FinanceDataTypeEmu.BankLoans,
  list: [],
};
export const Microloans = {
  title: "小额贷款",
  description: "短期资金周转，办理便捷、形式灵活。",
  key: FinanceDataTypeEmu.Microloans,
  list: [],
};
export const EmergencyRefinancing = {
  title: "股权融资",
  description: "政府引导基金&市场化基金。",
  key: FinanceDataTypeEmu.EmergencyRefinancing,
  list: [],
};
export const EquityFinancing = {
  title: "应急转贷",
  description: "广元市工业应急转贷专区。",
  key: FinanceDataTypeEmu.EquityFinancing,
  list: [],
};
export const FinanceGuarantee = {
  title: "融资担保",
  description: "政府性融资担保机构，服务“小微”与“三农”。",
  key: FinanceDataTypeEmu.FinanceGuarantee,
  list: [],
};
export const ElectronicGuarantee = {
  title: "电子保函",
  description: "代替现金保证金，为企业降压减负。",
  key: FinanceDataTypeEmu.ElectronicGuarantee,
  list: [],
};
export const Insurance = {
  title: "保险",
  description: "一站式综合保险服务。",
  key: FinanceDataTypeEmu.Insurance,
  list: [],
};
export const purposeOp = [
  {
    label: "生产经营",
    value: "1",
  },
  {
    label: "创业助业",
    value: "2",
  },
  {
    label: "购买资产",
    value: "3",
  },
  {
    label: "归还贷款",
    value: "4",
  },
];
export const termOp = [3, 12, 24, 36].map((item, index) => ({
  label: item + "个月内",
  value: index + 1,
}));

export const selectOp = [
  {
    label: "信用",
    value: GuaranteeMethodEmu.Credit,
  },
  {
    label: "抵质押",
    value: GuaranteeMethodEmu.LoanPledge,
  },
  {
    label: "保证",
    value: GuaranteeMethodEmu.Guarantee,
  },
  {
    label: "组合",
    value: GuaranteeMethodEmu.Combination,
  },
];
export const collateralOp = [
  ...selectOp,
  {
    label: "电子保函",
    value: GuaranteeMethodEmu.ElectronicGuarantee,
  },

  {
    label: "纸质保函",
    value: GuaranteeMethodEmu.ElectronicGuarantee,
  },
];
export const PolicyData = [
  {
    title: "数据资产入表",
    key: "/data-elements",
    imgUrl: "/images/ggfw_2.png",
    descImgUrl: "/images/sjzcrb.png",
    desc: "数据资产入表指的是将企业或组织所拥有的各种数据资源，纳入到资产管理体系中进行有效管理和利用，实质是将数据作为一种有价值的资产进行确认、计量和报告。助力企业优化财务指标，提升融资能力。",
  },
  {
    title: "供应链贸易业务",
    key: "/trade-services",
    imgUrl: "/images/ggfw_3.png",
    descImgUrl: "/images/gylmyzq.png",
    desc: "供应链贸易业务，通过有效地整合和管理供应链上的各个环节，实现产品从生产到销售的无缝衔接和协同运作，提高供应链的效率、降低成本和提升服务质量，实现企业间的合作共赢，促进我市经济发展。",
  },
];

export const FinancialMarket = {
  entity: [
    {
      label: "全部",
      value: 0,
    },
    {
      label: "企业",
      value: FinancingEntityEmu.Enterprise,
    },
    {
      label: "个人",
      value: FinancingEntityEmu.Personal,
    },
  ],
  type: [
    {
      label: "全部",
      value: 0,
    },
    {
      label: "政策性",
      value: FinancingTypeEmu.Policy,
    },
    {
      label: "商业性",
      value: FinancingTypeEmu.Commercial,
    },
  ],
  institution: [
    {
      label: "全部",
      value: 0,
    },
    {
      label: "银行",
      value: FinanceDataTypeEmu.BankLoans,
    },
    {
      label: "担保",
      value: FinanceDataTypeEmu.FinanceGuarantee,
    },
    {
      label: "小额贷款",
      value: FinanceDataTypeEmu.Microloans,
    },
    {
      label: "基金",
      value: FinanceDataTypeEmu.EmergencyRefinancing,
    },
    {
      label: "转贷",
      value: FinanceDataTypeEmu.EquityFinancing,
    },
    {
      label: "保函",
      value: FinanceDataTypeEmu.ElectronicGuarantee,
    },
    {
      label: "保险",
      value: FinanceDataTypeEmu.Insurance,
    },
  ],
  financing: [
    {
      label: "全部",
      value: 0,
    },
    ...selectOp,
  ],
  guarantee: [
    {
      label: "全部",
      value: 0,
    },
    {
      label: "0-50万（含）",
      value: 1,
    },
    {
      label: "50万-100万（含）",
      value: 2,
    },
    {
      label: "100万-500万（含）",
      value: 3,
    },
    {
      label: "500万以上",
      value: 4,
    },
  ],
  term: [
    {
      label: "全部",
      value: 0,
    },
    {
      label: "6个月以下",
      value: 1,
    },
    {
      label: "12个月及以下",
      value: 2,
    },
    {
      label: "36个月及以下",
      value: 3,
    },
    {
      label: "60个月及以下",
      value: 4,
    },
  ],
};
export const PolicyTags = [
  {
    label: "全部",
    value: "",
  },
  {
    label: "原文",
    value: 1,
  },
  {
    label: "解读",
    value: 2,
  },
];
export const repaymentMethodOp = [
  {
    label: "按周期付息,到期还本",
    value: "1",
  },
  {
    label: "分期还款",
    value: "2",
  },
  {
    label: "一次性还本付息",
    value: "3",
  },
  {
    label: "随借随还",
    value: "4",
  },
];
export const MicroloansOp = [
  {
    label: "公司",
    value: "2",
  },
  {
    label: "自然人",
    value: "1",
  },
];
export const MicroloansOp2 = [
  {
    label: "小微贷",
    value: "小微贷",
  },
  {
    label: "及时贷",
    value: "及时贷",
  },
  {
    label: "搭桥贷",
    value: "搭桥贷",
  },
];

//1 银行贷款，2小额贷款，3融资担保，4应急转贷、5基金、6保险、7保函
export const prodTypeEmu = [
  {
    label: "银行贷款",
    value: 1,
  },
  {
    label: "小额贷款",
    value: 2,
  },
  {
    label: "融资担保",
    value: 3,
  },
  {
    label: "应急转贷",
    value: 4,
  },
  {
    label: "基金",
    value: 5,
  },
  {
    label: "保险",
    value: 6,
  },
  {
    label: "保函",
    value: 7,
  },
];
export const action_status_filter = {
  //1已申请，2未受理，3办理中，4谢绝，5完成
  1: {
    text: "已申请",
    status: "Default",
  },
  2: {
    text: "未受理",
    status: "Processing",
  },
  3: {
    text: "办理中",
    status: "Success",
  },
  4: {
    text: "谢绝",
    status: "Error",
  },
  5: {
    text: "完成",
    status: "Success",
  },
};
export const term = {
  0: {
    text: "全部",
  },
  1: {
    text: "3个月内",
  },

  2: {
    text: "12个月内",
  },

  3: {
    text: "24个月内",
  },
  4: {
    text: "36个月内",
  },
};
export const purpose = {
  1: {
    text: "生产经营",
  },

  2: {
    text: "创业助业",
  },

  3: {
    text: "购买资产",
  },

  4: {
    text: "归还贷款",
  },
};
export const AREA_TYPE: any = {
  all: {
    text: "全部",
  },
  1: {
    text: "国家级",
  },
  2: {
    text: "省级",
  },
  3: {
    text: "市级",
  },
  510802: {
    text: "利州区",
  },
  510811: {
    text: "昭化区",
  },
  510812: {
    text: "朝天区",
  },
  510821: {
    text: "旺苍县",
  },
  510822: {
    text: "青川县",
  },

  510823: {
    text: "剑阁县",
  },

  510824: {
    text: "苍溪县",
  },
};
export const term_unitOp = [
  {
    label: "天",
    value: 1,
  },
  {
    label: "月",
    value: 2,
  },
];
export const term_unit = {
  1: {
    text: "天",
  },
  2: {
    text: "月",
  },
};
export const data_type = {
  1: {
    text: "信用",
  },
  2: {
    text: "抵质押",
  },
  3: {
    text: "保证",
  },
  4: {
    text: "组合",
  },
};
export const insurance_type = {
  1: {
    text: "财产险",
  },
  2: {
    text: "责任险",
  },
  3: {
    text: "寿险",
  },
  4: {
    text: "意外险",
  },
  5: {
    text: "保证险",
  },
  6: {
    text: "综合险",
  },
};
