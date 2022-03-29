import { ChakraProvider } from "@chakra-ui/react";
// custimize theme
import theme from "../styles/theme/global";
// global style
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
