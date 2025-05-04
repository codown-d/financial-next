export const omitFields = (obj, keysToOmit) => {
    const clone = { ...obj };
    keysToOmit.forEach((key) => {
      delete clone[key];
    });
    return clone;
  };
  export const extractUploadFiles = (values, fields) => {
    const result = { ...values };
  
    fields.forEach((field) => {
      const list = values[field];
  
      // 若是数组，统一处理字段中的文件
      if (Array.isArray(list)) {
  
        if (field === "attachment_list") {
            result[field] = list.map((item) => ({
              attachment_name: item.attachment_name,
              attachment_url: item.attachment_url?.[0]?.response?.file,
            }));
        } else {
          const validFile = list.find(
            (item) => item.status === "done" && item.response?.code === 200
          );
          if (validFile) {
            result[field] = validFile.response?.file || "";
          } else {
            result[field] = "";
          }
        }
        // 若找到有效文件，提取 URL
      } else {
        result[field] = undefined;
      }
    });
  
    return result;
  };