import theme from "@/theme";
import { FontFaces } from "@/theme/Fonts";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <FontFaces />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
