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
    key: "home",
    children: [],
  },
  {
    label: "融资服务",
    key: "financialProduct",
    children: [
      {
        label: "银行贷款",
        key: "/small-loan",
      },
      {
        label: "小额贷款",
        key: "/loan-guarantee",
      },
      {
        label: "应急转贷",
        key: "/emergency-3",
      },

      {
        label: "股权融资",
        key: "/emergency-4",
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

export const BankLoans = {
  title: "银行贷款",
  description: "银行或其他金融机构向个人或企业发放的资金",
  key: "BankLoans",
  list: [
    {
      imgUrl: "/images/gxxd.jpg",
      title: `小微贷`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.35",
      term: 36,
      amount: 50,
      guaranteeMethod: ["信用", "抵押", "质押", "保证"],
    },
    {
      imgUrl: "/images/gxxd.jpg",
      title: `小微贷`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.35",
      term: 36,
      amount: 500,
      guaranteeMethod: ["抵押", "质押", "保证"],
    },
    {
      imgUrl: "/images/gxxd.jpg",
      title: `小微贷`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.25",
      term: 36,
      amount: 500,
      guaranteeMethod: ["信用", "抵押", "质押", "保证"],
    },
  ],
};
export const Microloans = {
  title: "小额贷款",
  description: "银行或其他金融机构向个人或企业发放的资金",
  key: "Microloans",
  list: [
    {
      imgUrl: "/images/gxxd.jpg",
      title: `小微贷`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.35",
      term: 12,
      amount: 50,
      guaranteeMethod: ["信用", "抵质押", "保证",'组合'],
    },
    {
      imgUrl: "/images/gxxd.jpg",
      title: `及时贷`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.35",
      term: 12,
      amount: 50,
      guaranteeMethod: ["抵押", "质押", "保证",'组合'],
    },
    {
      imgUrl: "/images/gxxd.jpg",
      title: `搭桥贷`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.25",
      term: 3,
      amount: 500,
      guaranteeMethod: ["抵质押", "保证",'组合'],
    },
  ],
};
export const EmergencyRefinancing = {
  title: "应急转贷",
  description: "银行或其他金融机构向个人或企业发放的资金",
  key: "EmergencyRefinancing",
  list: [
    {
      imgUrl: "/images/gxxd.jpg",
      title: `小微贷`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.35",
      term: 36,
      amount: 50,
      guaranteeMethod: ["信用", "抵押", "质押", "保证"],
    },
    {
      imgUrl: "/images/gxxd.jpg",
      title: `小微贷`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.35",
      term: 36,
      amount: 500,
      guaranteeMethod: ["抵押", "质押", "保证"],
    },
  ],
};
export const EquityFinancing = {
  title: "股权融资",
  description: "银行或其他金融机构向个人或企业发放的资金",
  key: "EquityFinancing",
  list: [
    {
      imgUrl: "/images/gxxd.jpg",
      title: `应急转贷`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.35",
      term: 36,
      amount: 1000,
      guaranteeMethod: ["信用", "抵押", "质押", "保证"],
    }
  ],
};
export const FinanceGuarantee = {
  title: "融资担保",
  description: "银行或其他金融机构向个人或企业发放的资金",
  key: "FinanceGuarantee",
  list: [
    {
      imgUrl: "/images/gxxd.jpg",
      title: `基金业务`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.35",
      term: 36,
      amount: 50,
      guaranteeMethod: ["信用", "抵押", "质押", "保证"],
    },
    {
      imgUrl: "/images/gxxd.jpg",
      title: `基金业务`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.35",
      term: 36,
      amount: 500,
      guaranteeMethod: ["抵押", "质押", "保证"],
    },
    {
      imgUrl: "/images/gxxd.jpg",
      title: `基金业务`,
      rateDown: "3.10",
      rateUp: "3.90",
      rate: "3.25",
      term: 36,
      amount: 500,
      guaranteeMethod: ["信用", "抵押", "质押", "保证"],
    },
  ],
};
export const purposeOp = [
  {
    label: "消费",
    value: "",
  },
];
export const termOp=[6,12,36,60].map(item=>( {
  label: item+"个月",
  value: item,
}))

export const collateralOp = [
  {
    label: "信用",
    value: "Credit",
  },
  {
    label: "抵押",
    value: "Mortgage",
  },
  {
    label: "质押",
    value: "Pledge",
  },
  {
    label: "保证",
    value: "Guarantee",
  },
];
