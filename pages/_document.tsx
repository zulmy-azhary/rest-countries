import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { nunitoSans } from "src/styles/GlobalStyles";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en" className={nunitoSans.className}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <script
            dangerouslySetInnerHTML={{
              __html: execColor,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

function setInitialColor(): void {
  // Get the HTML Tag
  let html: HTMLElement = document.documentElement;
  // Get item with "theme" key from localStorage
  const storage = localStorage.getItem("theme");

  // Dark Theme
  const setDark = () => {
    html.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  };

  // Light Theme
  const setLight = () => {
    localStorage.setItem("theme", "light");
  };

  if (storage === "dark" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return setDark();
  }

  return setLight();
}

// Execute using an IIFE function
const execColor = `(() => {
  ${setInitialColor.toString()}
  setInitialColor();
})()`;
