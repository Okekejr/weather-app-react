import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { fonts } from "./Fonts";

export const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: "myCustomColor",
      },
    },
  },
  fonts,
  colors: {
    myCustomColor: "#232337",
  },
  sizes: {
    container: {
      xl: "1448px",
    },
  },
});

export default theme;
