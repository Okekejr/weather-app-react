import theme from "@/theme";
import { FontFaces } from "@/theme/Fonts";
import { ChakraProvider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextSeo
        title="Okeks Weather App"
        description="A weather webApp built with nextjs, typescript and Open weather API"
      />
      <FontFaces />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
