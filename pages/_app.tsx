import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "src/styles/GlobalStyles";
import { ThemeProvider as ThemeCtxProvider } from "src/context";
import { theme } from "src/styles/theme";
import { Layout } from "src/components";

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
