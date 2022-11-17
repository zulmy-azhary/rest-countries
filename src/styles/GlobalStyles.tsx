import { createGlobalStyle } from "styled-components";
import { Nunito_Sans as NunitoSans } from "@next/font/google";

export const nunitoSans = NunitoSans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
  fallback: ["Inter", "Helvetica", "Arial", "sans-serif"],
});

const GlobalStyles = createGlobalStyle`
  :root {
    /* Global */
    --shadow: ${(props) => props.theme.shadow};
    --mobile: ${(props) => props.theme.breakpoints.mobile};
    --laptop: ${(props) => props.theme.breakpoints.laptop};
    --tablet: ${(props) => props.theme.breakpoints.tablet};
    --desktop: ${(props) => props.theme.breakpoints.desktop};

    /* Light Mode */
    --bgColor: ${(props) => props.theme.light.bgColor};
    --elementColor: ${(props) => props.theme.light.elementColor};
    --textColor: ${(props) => props.theme.light.textColor};
    --captionColor: ${(props) => props.theme.light.captionColor};
    --placeholderColor: ${(props) => props.theme.light.placeholderColor};
  }
  
  /* Dark Mode */
  [data-theme="dark"]:root {
    --bgColor: ${(props) => props.theme.dark.bgColor};
    --elementColor: ${(props) => props.theme.dark.elementColor};
    --textColor: ${(props) => props.theme.dark.textColor};
    --captionColor: ${(props) => props.theme.dark.captionColor};
    --placeholderColor: ${(props) => props.theme.dark.placeholderColor};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito Sans", Inter, "Helvetica", Arial, sans-serif;
    transition: background-color 0.2s;
  }
  
  html,
  body {
    scroll-behavior: smooth;
    background-color: var(--bgColor);
    color: var(--textColor);
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  ::placeholder {
    color: var(--placeholderColor);
  }
`;

export default GlobalStyles;
