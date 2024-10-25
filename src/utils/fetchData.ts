import { getPolicyTableData } from "../../mock";

export const fetchData = async (url) => {
  if (process.env.NODE_ENV === "development") {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getPolicyTableData());
      }, 50);
    });
  } else {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
};
