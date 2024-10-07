// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  components:{
    Button:{
      paddingInline:30,
      paddingBlock:9,
      defaultColor:'#3D5AF5'
    }
  },
  token: {
    fontSize: 14,
    colorPrimary: "#3D5AF5",
  },
};

export default theme;
