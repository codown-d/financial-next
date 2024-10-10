// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  components: {
    Button: {
      controlHeight: 36,
      paddingInline: 30,
      paddingBlock: 9,
      defaultColor: "#3D5AF5",
    },
  },
  token: {
    fontFamily: 'SourceHanSansCN, SourceHanSansCN',
    colorTextBase: "#333",
    colorLink: "#333",
    fontSize: 14,
    colorPrimary: "#3D5AF5",
  },
};

export default theme;
