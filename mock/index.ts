import Mock from "mockjs";

export const getPolicyTableData = () => {
  return Mock.mock({
    "items|100": [
      {
        // 生成一个包含10条数据的数组
        "id|+1": 1,
        title: Mock.Random.ctitle(),
        time: Mock.Random.time(),
        desc: Mock.Random.cparagraph(),
      },
    ],
  });
};
