import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#0784cc",
    secondary: "#03bb21",
    gray: "#505050",
  },
  breakpoints: {
    mobile: "375px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1440px",
  },
  light: {
    bgColor: "hsl(0, 0%, 98%)",
    elementColor: "hsl(0, 0%, 100%)",
    textColor: "hsl(200, 15%, 8%)",
    captionColor: "hsl(200, 11%, 26%)",
    placeholderColor: "hsl(0, 0%, 52%)",
  },
  dark: {
    bgColor: "hsl(207, 26%, 17%)",
    elementColor: "hsl(209, 23%, 22%)",
    textColor: "hsl(0, 0%, 92%)",
    captionColor: "hsl(210, 19%, 78%)",
    placeholderColor: "hsl(0, 5.5%, 90%)",
  },
  shadow: "0 2px 5px 1px rgba(0, 0, 0, 0.05)",
};
