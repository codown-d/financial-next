import { sample, sampleSize } from "lodash";
import Mock from "mockjs";

export const getPolicyTableData = () => {
  return Mock.mock({
    "items|100": [
      {
        // 生成一个包含10条数据的数组
        "id|+1": 1,
        title: "@ctitle",
        time: "@datetime",
        desc: "@cparagraph",
      },
    ],
  });
};

export const getInvestmentTableData = () => {
  return Mock.mock({
    items: [
      {
        id: 1,
        resource: "数据资源梳理盘点",
        module:
          "根据企业的实际情况，制定访谈问卷及调研计划并开展调研工作，对企业所持有的数据资源进行全面梳理和盘点，明确待入表数据资源的来源、类型、权属、数量、质量、使用情况等信息，帮助甲方更有效更直观的反应拟入表的企业数据资源整体情况。",
        resource2: ["数据资源清单", "数据资源盘点报告"],
      },
      {
        id: 2,
        resource: "数据资源合规确权咨询",
        module:
          "根据相关法律法规和政策要求，对企业持有的企业数据资源的合规性进行评估，并根据评估结果帮助企业明确数据资源持有权、数据加工使用权、数据产品经营权等权利归属，对可能通过整改取得的权属给出合规指引，对不合规的情形提出整改建议，确保企业数据资源的合规使用和保护。",
        resource2: ["数据资源合规评估报告", "及整改建议"],
      },
      {
        id: 3,
        resource: "数据资源价值挖掘",
        module:
          "通过专业的场景化应用分析方法和技术手段，从内部使用或对外交付客户使用的潜在收益角度，深入挖掘企业合法拥有并控制的企业数据资源的潜在价值，帮助企业更好地认识和理解自身数据资源的价值，明确企业数据资源价值落地路径。",
        resource2: ["数据资源价值评估报告"],
      },
      {
        id: 4,
        resource: "数据产品开发咨询",
        module:
          "根据《企业数据资源相关会计处理暂行规定》(财会〔2023〕11号)，结合企业工作规划，梳理出企业财务部门可以确认为无形资产或存货的企业数据资源清单，通过专业的场景化应用分析方法和技术对本合同服务期内企业可能通过数据产品开发形成可以确认为无形资产或存货的数据产品清单，经与企业协商确认后，帮助甲方明晰企业数据产品开发路径。",
        resource2: ["数据产品开发指引"],
      },
      {
        id: 5,
        resource: "数据资产存证登记",
        module:
          '为企业提供一套“"数据资产管理系统(单机版软件)"供企业管理本咨询服务范围内可以确认为无形资产或存货的数据资源;依托工作站基于互联网的“数据要素服务工作站网站”和“数据产品存证登记系统”为企业确认为无形资产或存货的数据资源提供上链存证和登记，并向企业发放“数据产品存证登记凭证/证书”。',
        resource2: ["数据产品存证登记凭证/证书"],
      },
      {
        id: 5,
        resource: "数据资源会计处理咨询",
        module:
          "根据《企业数据资源相关会计处理暂行规定》(财会〔2023〕11号)，结合企业的实际情况，通过深入调研分析，帮助企业财务部门对拟入表的数据资源的相关交易和事项进行会计确认、计量和报告包括对拟确认为无形资产的数据资源进行初始计量、后续计量、处置和报废的实务指引，对拟确认头存货的数据资源进行初始计量和后续计量的实务指引，对相关数据资源的列示和披露的实务指引。",
        resource2: ["数据资源会计处理指引"],
      },
    ],
  });
};

export const getHotWords = () => {
  return Mock.mock({
    items: ["发改委", "住建局", "财政部"],
  });
};
