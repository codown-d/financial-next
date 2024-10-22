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
    key: "/home",
    children: [],
  },
  {
    label: "融资服务",
    key: "financialProduct",
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
    key: "guaranteeServices",
    children: [
      {
        label: "融资担保",
        key: "/performance-bond",
      },
      {
        label: "电子保函",
        key: "/wage-bond",
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
    key: "investmentServices",
    children: [
      {
        label: "政策服务",
        key: "/guangcai-fund",
      },
      {
        label: "数据资产入表",
        key: "/equity-investment",
      },
      {
        label: "供应链贸易",
        key: "/trade-services",
      },
    ],
  },
];
export enum FinanceDataTypeEmu {
  /** 银行贷款 */
  BankLoans = "BankLoans",
  /** 小额贷款 */
  Microloans = "Microloans",
  /** 股权融资 */
  EmergencyRefinancing = "EmergencyRefinancing",
  /** 应急转贷 */
  EquityFinancing = "EquityFinancing",
  /** 融资担保 */
  FinanceGuarantee = "FinanceGuarantee",
  /** 电子保函 */
  ElectronicGuarantee = "ElectronicGuarantee",
}
export const BankLoans = {
  title: "银行贷款",
  description: "银行金融业机构，为企业和个人提供资金支持。",
  key: "BankLoans",
  list: [
    {
      dataType: FinanceDataTypeEmu.BankLoans,
      imgUrl: "/images/gxxd.png",
      logo: "广创担保",
      title: `小微贷`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.35",
      term: 36,
      amount: 50,
      guaranteeMethod: ["信用", "抵质押", "保证"],
    },
    {
      dataType: FinanceDataTypeEmu.BankLoans,
      imgUrl: "/images/gxxd.png",
      logo: "广创担保",
      title: `小微贷`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.35",
      term: 36,
      amount: 500,
      guaranteeMethod: ["抵质押", "保证"],
    },
    {
      dataType: FinanceDataTypeEmu.BankLoans,
      imgUrl: "/images/gxxd.png",
      logo: "广创担保",
      title: `小微贷`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.25",
      term: 36,
      amount: 500,
      guaranteeMethod: ["信用", "抵质押", "保证"],
    },
  ],
};
export const Microloans = {
  title: "小额贷款",
  description: "短期资金周转，办理便捷、形式灵活。",
  key: "Microloans",
  list: [
    {
      dataType: FinanceDataTypeEmu.Microloans,
      imgUrl: "/images/gxxd.png",
      logo: "国信小贷",
      title: `小微贷`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "6.7",
      term: 12,
      amount: 50,
      guaranteeMethod: ["信用", "抵质押", "保证", "组合"],
    },
    {
      dataType: FinanceDataTypeEmu.Microloans,
      imgUrl: "/images/gxxd.png",
      logo: "国信小贷",
      title: `及时贷`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "6.7",
      term: 12,
      amount: 500,
      guaranteeMethod: ["抵质押", "保证", "组合"],
    },
    {
      dataType: FinanceDataTypeEmu.Microloans,
      imgUrl: "/images/gxxd.png",
      logo: "国信小贷",
      title: `搭桥贷`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "6.7",
      term: 3,
      amount: 500,
      guaranteeMethod: ["抵质押", "保证", "组合"],
    },
  ],
};
export const EmergencyRefinancing = {
  title: "股权融资",
  description: "政府引导基金&市场化基金。",
  key: "EmergencyRefinancing",
  list: [
    {
      dataType: FinanceDataTypeEmu.EmergencyRefinancing,
      imgUrl: "/images/gcjj.png",
      logo: "广财基金",
      title: `广元市产业发展投资引导基金`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.35",
      term: 36,
      amount: 10,
      guaranteeMethod: ["信用", "抵质押", "保证"],
    },
    {
      dataType: FinanceDataTypeEmu.EmergencyRefinancing,
      imgUrl: "/images/gcjj.png",
      logo: "广财基金",
      title: `广元市乡村振兴基金`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.35",
      term: 36,
      amount: 3,
      guaranteeMethod: ["信用", "抵质押", "保证"],
    },
    {
      dataType: FinanceDataTypeEmu.EmergencyRefinancing,
      imgUrl: "/images/gcjj.png",
      logo: "广财基金",
      title: `广元市铝基新材料产业发展基金`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.35",
      term: 36,
      amount: 5,
      guaranteeMethod: ["信用", "抵质押", "保证"],
    },
  ],
};
export const EquityFinancing = {
  title: "应急转贷",
  description: "广元市工业应急转贷专区。",
  key: "EquityFinancing",
  list: [
    {
      dataType: FinanceDataTypeEmu.EquityFinancing,
      imgUrl: "/images/gcjj.png",
      logo: "广财基金",
      title: `广元市工业企业应急转贷`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.35",
      term: 36,
      amount: 1000,
      guaranteeMethod: ["抵质押", "保证", "组合"],
    },
  ],
};
export const FinanceGuarantee = {
  title: "融资担保",
  description: "政府性融资担保机构，服务“小微”与“三农”。",
  key: "FinanceGuarantee",
  list: [
    {
      dataType: FinanceDataTypeEmu.FinanceGuarantee,
      imgUrl: "/images/gcdb.png",
      logo: "广创担保",
      title: `小微增额保`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "1",
      term: 12,
      amount: 500,
      guaranteeMethod: ["信用", "保证"],
    },
    {
      dataType: FinanceDataTypeEmu.FinanceGuarantee,
      imgUrl: "/images/gcdb.png",
      logo: "广创担保",
      title: `创业担保贷款`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "0.8",
      term: 36,
      amount: 400,
      guaranteeMethod: ["信用", "抵质押", "保证", "组合"],
    },
    {
      dataType: FinanceDataTypeEmu.FinanceGuarantee,
      imgUrl: "/images/gcdb.png",
      logo: "广创担保",
      title: `企业担保贷款`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "1",
      term: 24,
      amount: 60,
      guaranteeMethod: ["抵质押", "保证", "组合"],
    },
    {
      dataType: FinanceDataTypeEmu.FinanceGuarantee,
      imgUrl: "/images/gcdb.png",
      logo: "广创担保",
      title: `融创科贷`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "0.8",
      term: 36,
      amount: 200,
      guaranteeMethod: ["信用", "抵质押", "保证", "组合"],
    },
    {
      dataType: FinanceDataTypeEmu.FinanceGuarantee,
      imgUrl: "/images/gcdb.png",
      logo: "广创担保",
      title: `极速贷`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "0.6",
      term: 36,
      amount: 200,
      guaranteeMethod: ["信用", "抵质押", "保证", "组合"],
    },
  ],
};
export const ElectronicGuarantee = {
  title: "电子保函",
  description: "代替现金保证金，为企业降压减负。",
  key: "ElectronicGuarantee",
  list: [
    {
      dataType: FinanceDataTypeEmu.ElectronicGuarantee,
      imgUrl: "/images/gcdb.png",
      logo: "广创担保",
      title: `履约保函`,
      rateDown: "0.3",
      rateUp: "3",
      rate: "3.35",
      term: 36,
      amount: 50,
      guaranteeMethod: ["电子保函", "纸质保函"],
    },
    {
      dataType: FinanceDataTypeEmu.ElectronicGuarantee,
      imgUrl: "/images/gcdb.png",
      logo: "广创担保",
      title: `农民工工资保函`,
      rateDown: "0.3",
      rateUp: "3",
      rate: "3.35",
      term: 36,
      amount: 50,
      guaranteeMethod: ["电子保函", "纸质保函"],
    },
    {
      dataType: FinanceDataTypeEmu.ElectronicGuarantee,
      imgUrl: "/images/gcdb.png",
      logo: "广创担保",
      title: `财产保全保函`,
      rateDown: "0.02",
      rateUp: "3",
      rate: "3.35",
      term: 36,
      amount: 50,
      guaranteeMethod: ["电子保函", "纸质保函"],
    },
    {
      dataType: FinanceDataTypeEmu.ElectronicGuarantee,
      imgUrl: "/images/gcdb.png",
      logo: "广创担保",
      title: `通用保函`,
      rateDown: "0.3",
      rateUp: "3",
      rate: "3.35",
      term: 36,
      amount: 50,
      guaranteeMethod: ["电子保函", "纸质保函"],
    },
  ],
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
export const termOp = [3, 12, 24, 36].map((item) => ({
  label: item + "个月内",
  value: item,
}));

export const collateralOp = [
  {
    label: "信用",
    value: "Credit",
  },
  {
    label: "抵质押",
    value: "Mortgage",
  },
  {
    label: "保证",
    value: "Guarantee",
  },
  {
    label: "组合",
    value: "Pledge",
  },
];
export const PolicyData = [
  {
    title: "数据资产入表",
    key: "policy_2",
    imgUrl: "/images/ggfw_2.png",
    descImgUrl: "/images/sjzcrb.png",
    desc: "数据资产入表指的是将企业或组织所拥有的各种数据资源，纳入到资产管理体系中进行有效管理和利用，实质是将数据作为一种有价值的资产进行确认、计量和报告。助力企业优化财务指标，提升融资能力。",
  },
  {
    title: "供应链贸易业务",
    key: "policy_3",
    imgUrl: "/images/ggfw_3.png",
    descImgUrl: "/images/gylmyzq.png",
    desc: "供应链贸易业务，通过有效地整合和管理供应链上的各个环节，实现产品从生产到销售的无缝衔接和协同运作，提高供应链的效率、降低成本和提升服务质量，实现企业间的合作共赢，促进我市经济发展。",
  },
];

export const FinancialMarket = {
  entity: [
    {
      label: "全部",
      value: "key1",
    },
    {
      label: "企业",
      value: "key2",
    },
    {
      label: "个人",
      value: "key3",
    },
  ],
  type: [
    {
      label: "全部",
      value: "key1",
    },
    {
      label: "政策性",
      value: "key2",
    },
    {
      label: "商业性",
      value: "key3",
    },
  ],
  institution: [
    {
      label: "全部",
      value: "key1",
    },
    {
      label: "银行",
      value: "key2",
    },
    {
      label: "担保",
      value: "key3",
    },
    {
      label: "小额贷款",
      value: "key4",
    },
    {
      label: "基金",
      value: "key5",
    },
  ],
  financing: [
    {
      label: "全部",
      value: "key1",
    },
    {
      label: "信用",
      value: "key2",
    },
    {
      label: "抵/质押",
      value: "key3",
    },
    {
      label: "保证",
      value: "key4",
    },
    {
      label: "组合",
      value: "key5",
    },
  ],
  guarantee: [
    {
      label: "全部",
      value: "key1",
    },
    {
      label: "0-50万（含）",
      value: "key2",
    },
    {
      label: "50万-100万（含）",
      value: "key3",
    },
    {
      label: "100万-500万（含）",
      value: "key4",
    },
    {
      label: "500万以上",
      value: "key5",
    },
  ],
  term: [
    {
      label: "全部",
      value: "key1",
    },
    {
      label: "6个月以下",
      value: "key2",
    },
    {
      label: "12个月及以下",
      value: "key3",
    },
    {
      label: "36个月及以下",
      value: "key4",
    },
    {
      label: "60个月及以下",
      value: "key5",
    },
  ],
};

export const MarketDataList = [
  ...BankLoans.list,
  ...Microloans.list,
  ...EmergencyRefinancing.list,
  ...EquityFinancing.list,
  ...FinanceGuarantee.list,
  ...ElectronicGuarantee.list,
];
export const ProductInfo = {
  ...BankLoans.list[0],
  location: "广元市",
  repaymentMethod: ['按周期付息','到期还本/分期还款/一次性还本付息'],
};
