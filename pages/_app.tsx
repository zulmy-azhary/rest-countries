import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@styles/GlobalStyles";
import { ThemeProvider as ThemeCtxProvider } from "@context";
import { theme } from "@styles/theme";
import { Layout } from "@components/main";

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
