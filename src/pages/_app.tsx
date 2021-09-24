import { FC } from "react";
import { AppProps } from "next/app";
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";

import { theme } from "utils";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default MyApp;
