import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Layout } from "@components";
import { theme } from "@styles/theme";
import GlobalStyles from "@styles/GlobalStyles";
import { ThemeProvider as ThemeCtxProvider } from "@context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeCtxProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ThemeCtxProvider>
  );
}
