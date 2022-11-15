import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  breakpoints: {
    mobile: "375px",
    tablet: "768px",
    desktop: "1440px",
  },
  light: {
    bgColor: "hsl(0, 0%, 98%)",
    elementColor: "hsl(0, 0%, 100%)",
    textColor: "hsl(200, 15%, 8%)",
    textPlaceholderColor: "hsl(0, 0%, 52%)",
  },
  dark: {
    bgColor: "hsl(207, 26%, 17%)",
    elementColor: "hsl(209, 23%, 22%)",
    textColor: "hsl(0, 0%, 100%)",
    textPlaceholderColor: "hsl(0, 0%, 75%)",
  },
  customShadow: "0 1px 5px 1px rgba(0, 0, 0, 0.1)",
};