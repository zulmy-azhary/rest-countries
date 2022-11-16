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
    --textPlaceholderColor: ${(props) => props.theme.light.textPlaceholderColor};
  }
  
  /* Dark Mode */
  [data-theme="dark"]:root {
    --bgColor: ${(props) => props.theme.dark.bgColor};
    --elementColor: ${(props) => props.theme.dark.elementColor};
    --textColor: ${(props) => props.theme.dark.textColor};
    --textPlaceholderColor: ${(props) => props.theme.dark.textPlaceholderColor};
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

  p {
    transition: 0.2s;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  ::placeholder {
    color: var(--textPlaceholderColor);
  }
`;

export default GlobalStyles;
