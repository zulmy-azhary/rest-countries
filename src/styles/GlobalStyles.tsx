import { createGlobalStyle } from "styled-components";
import { Nunito_Sans as NunitoSans } from "@next/font/google";

export const nunitoSans = NunitoSans({
  weight: ["300", "600", "800"],
  fallback: ["Inter", "Helvetica", "Arial", "sans-serif"],
});

const GlobalStyles = createGlobalStyle`
  :root {
    /* Global */
    --shadow: ${(props) => props.theme.customShadow};
    --mobile: ${(props) => props.theme.breakpoints.mobile};
    --tablet: ${(props) => props.theme.breakpoints.tablet};
    --desktop: ${(props) => props.theme.breakpoints.desktop};

    /* Light Mode */
    --bgColor: ${(props) => props.theme.light.bgColor};
    --elementColor: ${(props) => props.theme.light.elementColor};
    --textColor: ${(props) => props.theme.light.textColor};
    --textPlaceholderColor: ${(props) => props.theme.light.textPlaceholderColor};
  }
  
  /* Dark Mode */
  [data-theme="dark"]:root {
    --bgColor: ${(props) => props.theme.dark.bgColor};
    --elementColor: ${(props) => props.theme.dark.elementColor};
    --textColor: ${(props) => props.theme.dark.textColor};
    --textPlaceholderColor: ${(props) => props.theme.dark.textPlaceholderColor};
  }
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Nunito Sans", Inter, "Helvetica", Arial, sans-serif;

    background-color: var(--bgColor);
    color: var(--textColor);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
