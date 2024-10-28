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
    "items|10": [
      {
        // 生成一个包含10条数据的数组
        "id|+1": 1,
        resource: "@ctitle",
        module: "@cparagraph",
        resource2: sampleSize(
          [
            "数据资源清单",
            "数据资源盘点报告",
            "数据资源合规评估报告及整改建议",
            "数据资源价值评估报告",
            "数据产品开发指引",
            "数据产品存证登记凭证 /证书",
            "数据资源会计处理指引",
          ],
          2
        ),
      },
    ],
  });
};

export const getHotWords = () => {
  return Mock.mock({
    "items": ['发改委','住建局','财政部',],
  });
};

