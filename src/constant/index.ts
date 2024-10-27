import PolicyTable from "@/components/UI/PolicyTable";
import {
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
  BankLoans = "bankLoans",
  /** 小额贷款 */
  Microloans = "microloans",
  /** 股权融资 */
  EmergencyRefinancing = "emergencyRefinancing",
  /** 应急转贷 */
  EquityFinancing = "equityFinancing",
  /** 融资担保 */
  FinanceGuarantee = "financeGuarantee",
  /** 电子保函 */
  ElectronicGuarantee = "electronicGuarantee",
}
export enum TabType {
  service = "service",
  credit = "credit",
}
export const MarketDataList: FinanceItemProps[] = [
  {
    name: "小微贷",
    companyName: "国信小贷",
    logoUrl: "/images/gxxd.png",
    dataType: FinanceDataTypeEmu.Microloans,
    rateDown: "3.10",
    rateUp: "3.90",
    rate: "6.7",
    id: FinanceDataTypeEmu.Microloans + "1",
    financingEntity: FinancingEntityEmu.Enterprise,
    financingType: FinancingTypeEmu.Commercial,
    institutionType: InstitutionTypeEmu.SmallLoan,
    term: 12,
    amount: 50,
    dealOrder: Math.ceil(Math.random() * 1000 + 500),
    guaranteeMethod: [
      GuaranteeMethodEmu.Credit,
      GuaranteeMethodEmu.LoanPledge,
      GuaranteeMethodEmu.Guarantee,
      GuaranteeMethodEmu.Combination,
    ],
    productIntroduction:
      "主要针对三农、小微企业、公职人员、个体商户因购置设备、原材料、进货、门店装修、消费购物、投资创业等需求而发放的扶持类贷款",
    repaymentMethod: ["按周期付息,到期还本", "分期还款", "一次性还本付息"],
    serviceObjects: "三农、小微企业、公职人员、个体商户",
    applicationConditions: [
      "申贷主体合规",
      "征信记录良好",
      "生产经营正常",
      "还款来源明确",
      "担保措施充足",
    ],
    location: "广元市",
  },
  {
    dataType: FinanceDataTypeEmu.Microloans,
    id: FinanceDataTypeEmu.Microloans + "2",
    rateDown: "3.10",
    rateUp: "3.90",
    rate: "6.7",
    name: "及时贷",
    companyName: "国信小贷",
    logoUrl: "/images/gxxd.png",
    term: 12,
    amount: 50,
    dealOrder: Math.ceil(Math.random() * 1000 + 500),
    financingEntity: FinancingEntityEmu.Enterprise,
    financingType: FinancingTypeEmu.Commercial,
    institutionType: InstitutionTypeEmu.SmallLoan,
    guaranteeMethod: [
      GuaranteeMethodEmu.LoanPledge,
      GuaranteeMethodEmu.Guarantee,
      GuaranteeMethodEmu.Combination,
    ],
    productIntroduction:
      "主要针对三农、中小微企业和个体工商户因生产经营急需的短期资金周转需求贷款。",
    repaymentMethod: ["按周期付息,到期还本", "分期还款", "一次性还本付息"],
    serviceObjects: "三农、小微企业、公职人员、个体商户",
    applicationConditions: [
      "申贷主体合规",
      "征信记录良好",
      "生产经营正常",
      "还款来源明确",
      "担保措施充足",
    ],
    location: "广元市",
  },
  {
    dataType: FinanceDataTypeEmu.Microloans,
    id: FinanceDataTypeEmu.Microloans + "3",
    logoUrl: "/images/gxxd.png",
    companyName: "国信小贷",
    name: `搭桥贷`,
    rateDown: "3.10",
    rateUp: "3.90",
    rate: "6.7",
    term: 3,
    amount: 500,
    dealOrder: Math.ceil(Math.random() * 1000 + 500),
    guaranteeMethod: [
      GuaranteeMethodEmu.LoanPledge,
      GuaranteeMethodEmu.Guarantee,
      GuaranteeMethodEmu.Combination,
    ],
    financingEntity: FinancingEntityEmu.Enterprise,
    financingType: FinancingTypeEmu.Commercial,
    institutionType: InstitutionTypeEmu.SmallLoan,
    productIntroduction:
      "借款人在与我公司合作银行的贷款即将到期，合作银行同意办理续贷，需在我公司申请的专项用于归还银行贷款的短期周转贷款。",
    repaymentMethod: ["按周期付息,到期还本", "分期还款", "一次性还本付息"],
    serviceObjects: "三农、小微企业、公职人员、个体商户",
    applicationConditions: [
      "申贷主体合规",
      "征信记录良好",
      "生产经营正常",
      "还款来源明确",
      "担保措施充足",
    ],
    location: "广元市",
  },
  {
    dataType: FinanceDataTypeEmu.EmergencyRefinancing,
    id: FinanceDataTypeEmu.EmergencyRefinancing + "1",
    logoUrl: "/images/gcjj.png",
    companyName: "广财基金",
    name: `广元市产业发展投资引导基金`,
    rateDown: "3.10",
    rateUp: "3.90",
    rate: "3.35",
    term: 36,
    amount: 10,
    dealOrder: Math.ceil(Math.random() * 1000 + 500),
    guaranteeMethod: [
      GuaranteeMethodEmu.Credit,
      GuaranteeMethodEmu.LoanPledge,
      GuaranteeMethodEmu.Guarantee,
    ],
    financingEntity: FinancingEntityEmu.Enterprise,
    financingType: FinancingTypeEmu.Policy,
    institutionType: InstitutionTypeEmu.Fund,
    fundCompanyIntroduction:
      "广元广财私募基金公司成立于2023年2月14日，注册资本1500万元，为国有全资公司，已获得中国证券投资基金业协会登记认定的私募投资基金（股权投资、创业投资）管理人牌照（机构编号：P1074549），为第一家注册地在广元市的基金管理人。公司主要受托管理广元市产业发展投资引导基金、广元市铝基新材料产业发展基金，同时受托管理各类市场化基金。公司立足金融、服务实体，坚持“依法管理，合规经营，稳步发展，资产增值”的工作思路，围绕全市“1+3+3”优势产业布局，充分发挥政府投资基金的引导和放大作用，引导社会资本投资广元各类产业和基础设施项目，按照市场化方式募集和运营社会资本，支持企业（项目）发展壮大，推动产业转型升级，为全市产业发展服务。",
    fundIntroduction:
      "广元市产业发展投资引导基是经市政府批准，财政出资发起设立的政府引导基金，认缴总规模10亿元，于2023年10月完成中国证券投资基金业协会备案，2023年11月完成国家发改委“全国政府出资产业投资基金信用信息登记系统”备案。由广元广财私募基金管理有限公司（以下简称广财基金公司）作为基金管理人，负责广元市产业发展投资引导基金（以下简称市产业基金）的募、投、管、退等工作。市产业基金可以直接股权投资具体产业项目(企业），也可以设立子基金、参与国内其它基金，根据实际情况确定投资项目的规模和数量。市产业基金重点投资广元市范围内符合产业发展政策的基础产业、主导产业、支柱产业、先导产业、瓶颈产业等各类产业项目（企业），重点关注绿色家居、铝基新材料、食品饮料、清洁能源、装备制造、数字经济及电子信息、生物医药、硅基新材料、猕猴桃、核桃、茶叶、土鸡、肉牛羊、文旅康养、现代商业贸易、现代物流、建筑建材等产业。",

    location: "广元市",
  },
  {
    dataType: FinanceDataTypeEmu.EmergencyRefinancing,
    id: FinanceDataTypeEmu.EmergencyRefinancing + "2",
    logoUrl: "/images/gcjj.png",
    companyName: "广财基金",
    name: `广元市乡村振兴基金`,
    rateDown: "3.10",
    rateUp: "3.90",
    rate: "3.35",
    term: 36,
    amount: 3,
    dealOrder: Math.ceil(Math.random() * 1000 + 500),
    guaranteeMethod: [
      GuaranteeMethodEmu.Credit,
      GuaranteeMethodEmu.LoanPledge,
      GuaranteeMethodEmu.Guarantee,
    ],
    financingEntity: FinancingEntityEmu.Enterprise,
    financingType: FinancingTypeEmu.Policy,
    institutionType: InstitutionTypeEmu.Fund,
    fundCompanyIntroduction:
      "广元广财私募基金公司成立于2023年2月14日，注册资本1500万元，为国有全资公司，已获得中国证券投资基金业协会登记认定的私募投资基金（股权投资、创业投资）管理人牌照（机构编号：P1074549），为第一家注册地在广元市的基金管理人。公司主要受托管理广元市产业发展投资引导基金、广元市铝基新材料产业发展基金，同时受托管理各类市场化基金。公司立足金融、服务实体，坚持“依法管理，合规经营，稳步发展，资产增值”的工作思路，围绕全市“1+3+3”优势产业布局，充分发挥政府投资基金的引导和放大作用，引导社会资本投资广元各类产业和基础设施项目，按照市场化方式募集和运营社会资本，支持企业（项目）发展壮大，推动产业转型升级，为全市产业发展服务。",
    fundIntroduction:
      "广元市乡村振兴基金由市农业农村局发起，授权广财基金公司组建。基金认缴总规模3亿元，其中：市本级、县区通过共同组建合伙企业作为有限合伙人，认缴不高于1.2亿元；基金管理人募资不低于1.8亿元。基金采用双GP模式，通过市场化方式选择基金管理人，广财基金公司作为有限合伙人协助基金管理人管理基金。乡村振兴基金原则上投资于广元市行政区域内助推乡村振兴发展的项目。以猕猴桃、核桃、茶叶、土鸡、生猪、肉牛羊、农旅融合等产业为重点，包括现代种业、乡土特色产业、农产品加工业（含食品饮料）、农产品流通业（含冷链物流）、乡村新型服务业、生态循环农业、农业科技创新产业、农业生产设施、数字农业、现代农（林）业园区等领域，以及国家储备林、森林粮库、林业碳汇等。",

    location: "广元市",
  },
  {
    dataType: FinanceDataTypeEmu.EmergencyRefinancing,
    id: FinanceDataTypeEmu.EmergencyRefinancing + "3",
    logoUrl: "/images/gcjj.png",
    companyName: "广财基金",
    name: `广元市铝基新材料产业发展基金`,
    rateDown: "3.10",
    rateUp: "3.90",
    rate: "3.35",
    term: 36,
    amount: 5,
    dealOrder: Math.ceil(Math.random() * 1000 + 500),
    guaranteeMethod: [
      GuaranteeMethodEmu.Credit,
      GuaranteeMethodEmu.LoanPledge,
      GuaranteeMethodEmu.Guarantee,
    ],
    financingEntity: FinancingEntityEmu.Enterprise,
    financingType: FinancingTypeEmu.Policy,
    institutionType: InstitutionTypeEmu.Fund,
    fundCompanyIntroduction:
      "广元广财私募基金公司成立于2023年2月14日，注册资本1500万元，为国有全资公司，已获得中国证券投资基金业协会登记认定的私募投资基金（股权投资、创业投资）管理人牌照（机构编号：P1074549），为第一家注册地在广元市的基金管理人。公司主要受托管理广元市产业发展投资引导基金、广元市铝基新材料产业发展基金，同时受托管理各类市场化基金。公司立足金融、服务实体，坚持“依法管理，合规经营，稳步发展，资产增值”的工作思路，围绕全市“1+3+3”优势产业布局，充分发挥政府投资基金的引导和放大作用，引导社会资本投资广元各类产业和基础设施项目，按照市场化方式募集和运营社会资本，支持企业（项目）发展壮大，推动产业转型升级，为全市产业发展服务。",
    fundIntroduction:
      "广元市铝基新材料产业发展基金作为广元市产业发展投资引导基金的子基金，由广元经济技术开发区为主导，市产业基金、市园投公司、广财基金公司等参与组建，通过市场化运作，吸引金融、社会等资本投资市内铝基新材料产业项目（企业）。基金认缴规模5亿元，目前正在办理基金登记备案相关工作。",
    location: "广元市",
  },
  {
    dataType: FinanceDataTypeEmu.FinanceGuarantee,
    id: FinanceDataTypeEmu.FinanceGuarantee + "1",
    logoUrl: "/images/gcdb.png",
    companyName: "广创担保",
    name: `小微增额保`,
    rateDown: "3.10",
    rateUp: "3.90",
    rate: "1",
    term: 12,
    amount: 500,
    dealOrder: Math.ceil(Math.random() * 1000 + 500),
    guaranteeMethod: [GuaranteeMethodEmu.Credit, GuaranteeMethodEmu.Guarantee],
    financingEntity: FinancingEntityEmu.Enterprise,
    financingType: FinancingTypeEmu.Policy,
    institutionType: InstitutionTypeEmu.Guaranteed,
    productIntroduction:
      "“蜀担快贷—小微增额保”是由四川省信用再担保公司、我公司等省内12家担保公司集合体、中国工商银行股份有限公司四川省分行三方合作的一个批量担保产品，该产品在共担风险、事先锁定总体担保代偿率上限的前提下，由承办银行负责对贷款业务进行审批、放款和贷后管理，融资担保体系全部成员都不再进行贷款担保审核。由承办担保机构在承办银行贷款发放时直接提供担保，省再担保公司对承办担保机构承保的项目提供批量再担保。",
    repaymentMethod: ["按周期付息,到期还本", "分期还款"],
    serviceObjects:
      "小微企业、“三农”、创业创新市场主体、战略性新兴产业企业等符合《国务院办公厅关于有效发挥政府性融资担保基金作用切实支持小微企业和“三农”发展的指导意见》（国办发〔2019〕6号）规定的担保支持对象。",
    applicationConditions: [
      "贷款业务应符合国家信贷政策和监管要求，不得为地方政府（及地方融资平台）提供贷款担保。",
      "贷款天数不超过一年。",
      "贷款业务应为承办银行确认的经营性担保贷款，并在借款合同注明贷款用途。",
      "贷款发放前承办银行需要查询借款人的人行征信信息，借款人需符合承办银行准入标准（在保合作业务因债务人到期不能清偿，以借新还旧或无还本续贷等贷款重组方式缓释风险并报送融资担保体系的，不适用本条）。",
      "首次贷款业务不得为展期或借新还旧项目。",
    ],
    location: "广元市",
  },
  {
    dataType: FinanceDataTypeEmu.FinanceGuarantee,
    id: FinanceDataTypeEmu.FinanceGuarantee + "2",
    logoUrl: "/images/gcdb.png",
    companyName: "广创担保",
    name: `创业担保贷款`,
    rateDown: "3.10",
    rateUp: "3.90",
    rate: "0.8",
    term: 36,
    amount: 400,
    dealOrder: Math.ceil(Math.random() * 1000 + 500),
    guaranteeMethod: [
      GuaranteeMethodEmu.Credit,
      GuaranteeMethodEmu.LoanPledge,
      GuaranteeMethodEmu.Guarantee,
      GuaranteeMethodEmu.Combination,
    ],
    financingEntity: FinancingEntityEmu.Enterprise,
    financingType: FinancingTypeEmu.Policy,
    institutionType: InstitutionTypeEmu.Guaranteed,
    productIntroduction:
      "创业担保贷款是符合条件的个人或小微企业由我公司提供担保、合作银行放款、由财政部门贴息的贷款。对于符合条件的创业担保贷款财政部门给予贷款实际利率50%的贴息。",
    repaymentMethod: ["按周期付息,到期还本", "分期还款"],
    serviceObjects:
      "小微企业、在法定劳动年龄内，具有完全民事行为能力，在广元市境内创业（包括合伙创业或者组织起来创业）的城乡劳动者，具体包括：城镇登记失业人员、就业困难人员、复员转业退伍军人、刑满释放人员、高校毕业生（含大学生村官和留学回国学生）、化解过剩产能企业职工和失业人员、返乡创业农民工、网络商户、建档立卡贫困人口、自主创业人员。",
    applicationConditions: [
      "个人属于重点就业群体，：城镇登记失业人员、就业困难人员、复员转业退伍军人、刑满释放人员、高校毕业生（含大学生村官和留学回国学生）、化解过剩产能企业职工和失业人员、返乡创业农民工、网络商户、建档立卡贫困人口、自主创业人员。",
      "个人除助学贷款、脱贫人口小额新贷、住房贷款、购车贷款、5万元以下小额消费贷款以外申请人提交申请时，本人及其配偶无其他贷款。",
      "企业为小微企业。",
      "企业在申请创业担保贷款前1年内新招用的人数达到企业现有的在职职工人数10%（超100人的企业达到5%）并与其签订1年以上的劳动合同。",
    ],
    location: "广元市",
  },
  {
    dataType: FinanceDataTypeEmu.FinanceGuarantee,
    id: FinanceDataTypeEmu.FinanceGuarantee + "3",
    logoUrl: "/images/gcdb.png",
    companyName: "广创担保",
    name: `企业担保贷款`,
    rateDown: "3.10",
    rateUp: "3.90",
    rate: "1",
    term: 24,
    amount: 60,
    dealOrder: Math.ceil(Math.random() * 1000 + 500),
    guaranteeMethod: [
      GuaranteeMethodEmu.LoanPledge,
      GuaranteeMethodEmu.Guarantee,
      GuaranteeMethodEmu.Combination,
    ],
    financingEntity: FinancingEntityEmu.Enterprise,
    financingType: FinancingTypeEmu.Policy,
    institutionType: InstitutionTypeEmu.Guaranteed,
    productIntroduction:
      "企业生产经营需要，向银行等金融机构申请贷款、银行承兑汇票等融资时，我公司提供担保。",
    repaymentMethod: ["按周期付息,到期还本", "分期还款"],
    serviceObjects:
      "大学生、城乡劳动者个人创业创办企业、个人合伙组建的经济实体、符合国家产业政策中小微企业。",
    applicationConditions: [
      "企业生产经营正常，且生产经营范围不属于受限制类行业。",
      "企业吸纳了一定数量的劳动者就业、再就业，且与之签订了一年（含一年）以上的劳动合同，并按规定缴纳了社会保险。",
      "企业能提供符合《中华人民共和国担保法》规定反担保保证。",
      "无不良信用记录。",
    ],
    location: "广元市",
  },
  {
    dataType: FinanceDataTypeEmu.FinanceGuarantee,
    id: FinanceDataTypeEmu.FinanceGuarantee + "4",
    logoUrl: "/images/gcdb.png",
    companyName: "广创担保",
    name: `融创科贷`,
    rateDown: "3.10",
    rateUp: "3.90",
    rate: "0.8",
    term: 36,
    amount: 200,
    dealOrder: Math.ceil(Math.random() * 1000 + 500),
    guaranteeMethod: [
      GuaranteeMethodEmu.Credit,
      GuaranteeMethodEmu.LoanPledge,
      GuaranteeMethodEmu.Guarantee,
      GuaranteeMethodEmu.Combination,
    ],
    financingEntity: FinancingEntityEmu.Enterprise,
    financingType: FinancingTypeEmu.Policy,
    institutionType: InstitutionTypeEmu.Guaranteed,
    productIntroduction:
      "为进一步提升服务小微、三农、重点就业群体融资担保的能力，满足科技企业和科技人才融资担保服务的需求，与广元市贵商村镇银行合作的、重点支持科技型小微企业和科技型人才、支小支农双创类的担保产品。 ",
    repaymentMethod: ["按周期付息,到期还本", "分期还款"],
    serviceObjects:
      "广元市辖区内的小微企业(含科技型小微企业）、科技型人才、个体工商户以及从事农业及涉农相关产业的各类企业、组织和个人。",
    applicationConditions: ["--"],
    location: "广元市",
  },
  {
    dataType: FinanceDataTypeEmu.FinanceGuarantee,
    id: FinanceDataTypeEmu.FinanceGuarantee + "5",
    logoUrl: "/images/gcdb.png",
    companyName: "广创担保",
    name: `极速贷`,
    rateDown: "3.10",
    rateUp: "3.90",
    rate: "0.6",
    term: 36,
    amount: 200,
    dealOrder: Math.ceil(Math.random() * 1000 + 500),
    guaranteeMethod: [
      GuaranteeMethodEmu.Credit,
      GuaranteeMethodEmu.LoanPledge,
      GuaranteeMethodEmu.Guarantee,
      GuaranteeMethodEmu.Combination,
    ],
    financingEntity: FinancingEntityEmu.Enterprise,
    financingType: FinancingTypeEmu.Policy,
    institutionType: InstitutionTypeEmu.Guaranteed,
    productIntroduction:
      "在公司和中国邮政储蓄银行股份有限公司广元市利州区支行合作下，按照“极速贷（信用、信用户）”专项合作协议与邮储银行利州支行共担风险、事先锁定担保代偿率上限的前提下，50万元（含）以下由承办银行负责对贷款业务进行审批、放款，我公司见贷即保，50万元（不含）以上，我公司与银行共同尽调、各自审批的贷款担保产品。",
    repaymentMethod: ["随借随还"],
    serviceObjects:
      "通过中国邮储银行信息化平台“大数据”筛查出的借款人，包括在广元市辖区内从事经营活动的企业、个体工商户及个人。",
    applicationConditions: [
      "通过中国邮储银行信息化平台“大数据”筛查出的贷款主体。",
    ],
    location: "广元市",
  },
  {
    dataType: FinanceDataTypeEmu.EquityFinancing,
    id: FinanceDataTypeEmu.EquityFinancing + "1",
    logoUrl: "/images/gcjj.png",
    companyName: "广财基金",
    name: `广元市工业企业应急转贷`,
    rateDown: "3.10",
    rateUp: "3.90",
    rate: "3.35",
    term: 36,
    amount: 1000,
    dealOrder: Math.ceil(Math.random() * 1000 + 500),
    guaranteeMethod: [
      GuaranteeMethodEmu.LoanPledge,
      GuaranteeMethodEmu.Guarantee,
      GuaranteeMethodEmu.Combination,
    ],
    financingEntity: FinancingEntityEmu.Enterprise,
    financingType: FinancingTypeEmu.Commercial,
    institutionType: InstitutionTypeEmu.Fund,
    productIntroduction:
      "广元市工业企业应急转贷资金是由市政府主导设立，主要为市内资金周转暂时困难、符合银行续贷条件的工业企业提供按时还贷续贷的周转资金。",
    repaymentMethod: ["一次性还本付息"],
    serviceObjects: "广元市范围内（不包括扩权县）符合银行续贷条件的工业企业。",
    applicationConditions: [
      "具有独立法人资格。",
      "符合产业发展政策，生产经营正常，信用良好。",
      "财务会计制度完整规范。",
    ],
    location: "广元市",
  },

  {
    dataType: FinanceDataTypeEmu.ElectronicGuarantee,
    id: FinanceDataTypeEmu.ElectronicGuarantee + "1",
    logoUrl: "/images/gcdb.png",
    companyName: "广创担保",
    name: `履约保函`,
    rateDown: "0.3",
    rateUp: "3",
    rate: "3.35",
    term: 36,
    amount: 50,
    dealOrder: Math.ceil(Math.random() * 1000 + 500),
    guaranteeMethod: [
      GuaranteeMethodEmu.ElectronicGuarantee,
      GuaranteeMethodEmu.PaperGuarantee,
    ],
    financingEntity: FinancingEntityEmu.Enterprise,
    financingType: FinancingTypeEmu.Commercial,
    institutionType: InstitutionTypeEmu.Guaranteed,

    guaranteeAmount:
      "按照相关政策规定，单笔履约保证金缴纳额度（担保额度）为中标合同金额的10%以内；",
    guaranteePeriod: "与施工期限一致",
    serviceObjects:
      "依法从事建筑工程、土木工程和机电工程等建设工程项目的勘探设计、监理及建设施工企业。",
    beneficiary:
      "依法与建设工程施工企业签订建设工程合同、具有工程发包主体资格的业主单位，包括各级政府、政府部门及企事业单位等。",
    productIntroduction:
      "按照招标文件要求，建设工程勘探设、计方、监理方以及施工方等中标人将在签订相关工程合同时应向发包人缴纳的保证金替换为担保机构出具的书面工程履约保函，当中标人未能按照相关合同约定履行义务时，由担保机构按照履约保函约定对发包人承担相关义务责任。细分又包括勘探设计、工程监理及建设施工履约保函。",
    applicationInformation:
      "公司营业执照复印件、法定代表人身份证复印件、中标通知书及建设施工合同复印件、担保申请书及其他资料。",

    location: "广元市",
  },
  {
    dataType: FinanceDataTypeEmu.ElectronicGuarantee,
    id: FinanceDataTypeEmu.ElectronicGuarantee + "2",
    logoUrl: "/images/gcdb.png",
    companyName: "广创担保",
    name: `农民工工资保函`,
    rateDown: "0.3",
    rateUp: "3",
    rate: "3.35",
    term: 36,
    amount: 50,
    dealOrder: Math.ceil(Math.random() * 1000 + 500),
    guaranteeMethod: [
      GuaranteeMethodEmu.ElectronicGuarantee,
      GuaranteeMethodEmu.PaperGuarantee,
    ],
    financingEntity: FinancingEntityEmu.Enterprise,
    financingType: FinancingTypeEmu.Commercial,
    institutionType: InstitutionTypeEmu.Guaranteed,

    guaranteeAmount:
      "按照相关政策规定，单笔农民工工资保证金缴纳额度为中标合同金额的1%-3%；",
    guaranteePeriod: "与施工期限一致",
    serviceObjects:
      "依法从事建筑工程、土木工程和机电工程等建设工程项目施工企业。",
    beneficiary: "我市各级人力资源社会保障部门。",
    productIntroduction:
      "按照相关法律政策要求，建设工程施工承包人按规定将向所在地有关人力资源社会保障部门缴纳的农民工工资保证金替换为担保机构出具的书面担保，当工程建设施工承包人未能按照相关合同约定履行农民工工资支付义务时，由担保机构按照保函约定对农民工工资承担相关义务。",
    applicationInformation:
      "公司营业执照复印件、法定代表人身份证复印件、中标通知书及建设施工合同复印件、担保申请书及其他资料。",

    location: "广元市",
  },
  {
    dataType: FinanceDataTypeEmu.ElectronicGuarantee,
    id: FinanceDataTypeEmu.ElectronicGuarantee + "3",
    logoUrl: "/images/gcdb.png",
    companyName: "广创担保",
    name: `财产保全保函`,
    rateDown: "0.02",
    rateUp: "3",
    rate: "3.35",
    term: 36,
    amount: 50,
    dealOrder: Math.ceil(Math.random() * 1000 + 500),
    guaranteeMethod: [
      GuaranteeMethodEmu.ElectronicGuarantee,
      GuaranteeMethodEmu.PaperGuarantee,
    ],
    financingEntity: FinancingEntityEmu.Enterprise,
    financingType: FinancingTypeEmu.Commercial,
    institutionType: InstitutionTypeEmu.Guaranteed,

    guaranteeAmount:
      "按照相关法律规定，申请诉前财产保全的，应当提供相当于请求保全数额的担保；诉中财产保全的，担保数额不超过请求保全数额的百分之三十。",
    guaranteePeriod: "财产保全的期限依据财产的类型确定",
    serviceObjects: "民事权益受到侵害，向司法机关提出诉讼的一方。",
    beneficiary: "我市各级人民法院。",
    productIntroduction:
      "在诉讼前或诉讼中，申请人为防止相对人隐逸、转移财产向人民法院申请财产保全，申请人将人民法院要求其提供的可能因财产保全不当给被申请人造成损失的担保，采用为担保机构向人民法院出具的书面保函，由担保机构按照保函约定承担相关义务。",
    applicationInformation:
      "财产保全申请书、诉状、案件资料、申请人资格资料及其他资料",

    location: "广元市",
  },
  {
    dataType: FinanceDataTypeEmu.ElectronicGuarantee,
    id: FinanceDataTypeEmu.ElectronicGuarantee + "4",
    logoUrl: "/images/gcdb.png",
    companyName: "广创担保",
    name: `通用保函`,
    rateDown: "0.3",
    rateUp: "3",
    rate: "3.35",
    term: 36,
    amount: 50,
    dealOrder: Math.ceil(Math.random() * 1000 + 500),
    guaranteeMethod: [
      GuaranteeMethodEmu.ElectronicGuarantee,
      GuaranteeMethodEmu.PaperGuarantee,
    ],
    financingEntity: FinancingEntityEmu.Enterprise,
    financingType: FinancingTypeEmu.Commercial,
    institutionType: InstitutionTypeEmu.Guaranteed,
    guaranteeAmount: "根据客户需求制定。",
    guaranteePeriod: "与签订合同一致，一般不超过3年。",
    serviceObjects: "广大中小微企业",
    beneficiary: "合同相对方",
    productIntroduction:
      "根据客户在商品买卖、合同履行、商务承诺等方面的担保需求，定制化的担保服务。",
    applicationInformation:
      "公司营业执照复印件、法定代表人身份证复印件、基础交易合同复印件、担保申请书及其他资料。",

    location: "广元市",
  },
];
export const BankLoans = {
  title: "银行贷款",
  description: "银行金融业机构，为企业和个人提供资金支持。",
  key: "BankLoans",
  list: [],
};
export const Microloans = {
  title: "小额贷款",
  description: "短期资金周转，办理便捷、形式灵活。",
  key: FinanceDataTypeEmu.Microloans,
  list: MarketDataList.filter(
    (item) => item.dataType === FinanceDataTypeEmu.Microloans
  ),
};
export const EmergencyRefinancing = {
  title: "股权融资",
  description: "政府引导基金&市场化基金。",
  key: FinanceDataTypeEmu.EmergencyRefinancing,
  list: MarketDataList.filter(
    (item) => item.dataType === FinanceDataTypeEmu.EmergencyRefinancing
  ),
};
export const EquityFinancing = {
  title: "应急转贷",
  description: "广元市工业应急转贷专区。",
  key: FinanceDataTypeEmu.EquityFinancing,
  list: MarketDataList.filter(
    (item) => item.dataType === FinanceDataTypeEmu.EquityFinancing
  ),
};
export const FinanceGuarantee = {
  title: "融资担保",
  description: "政府性融资担保机构，服务“小微”与“三农”。",
  key: FinanceDataTypeEmu.FinanceGuarantee,
  list: MarketDataList.filter(
    (item) => item.dataType === FinanceDataTypeEmu.FinanceGuarantee
  ),
};
export const ElectronicGuarantee = {
  title: "电子保函",
  description: "代替现金保证金，为企业降压减负。",
  key: FinanceDataTypeEmu.ElectronicGuarantee,
  list: MarketDataList.filter(
    (item) => item.dataType === FinanceDataTypeEmu.ElectronicGuarantee
  ),
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
    key: "/equity-investment",
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
      value: "all",
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
      value: "all",
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
      value: "all",
    },
    {
      label: "银行",
      value: InstitutionTypeEmu.Bank,
    },
    {
      label: "担保",
      value: InstitutionTypeEmu.Guaranteed,
    },
    {
      label: "小额贷款",
      value: InstitutionTypeEmu.SmallLoan,
    },
    {
      label: "基金",
      value: InstitutionTypeEmu.Fund,
    },
  ],
  financing: [
    {
      label: "全部",
      value: "all",
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
      value: 50,
    },
    {
      label: "50万-100万（含）",
      value: 100,
    },
    {
      label: "100万-500万（含）",
      value: 500,
    },
    {
      label: "500万以上",
      value: 501,
    },
  ],
  term: [
    {
      label: "全部",
      value: 0,
    },
    {
      label: "6个月以下",
      value: 6,
    },
    {
      label: "12个月及以下",
      value: 12,
    },
    {
      label: "36个月及以下",
      value: 36,
    },
    {
      label: "60个月及以下",
      value: 60,
    },
  ],
};

export const ProductInfo = {
  [FinanceDataTypeEmu.Microloans + "1"]: {
    ...BankLoans.list[0],
    location: "广元市",
    repaymentMethod: ["按周期付息", "到期还本/分期还款/一次性还本付息"],
  },
};
export const ProductBankInfo = {
  ...EmergencyRefinancing.list[0],
  location: "广元市",
};
export const ProductGuaranteeInfo = {
  ...ElectronicGuarantee.list[0],
  location: "广元市",
};

export const PolicyTableData = new Array(100).fill("").map((item, index) => ({
  id: index,
  title: "",
  desc: "",
  time: 0,
}));
export const PolicyTags = [
  {
    label: "全部",
    value: "key1",
  },
  {
    label: "原文",
    value: "key2",
  },
  {
    label: "解读",
    value: "key3",
  },
];
