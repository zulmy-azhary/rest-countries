import "styled-components";


// Light
// bgColor: hsl(0, 0%, 98%);
// elementColor: hsl(0, 0%, 100%);
// textColor: hsl(200, 15%, 8%);
// textPlaceholderColor: hsl(0, 0%, 52%);

// Dark
// bgColor: hsl(207, 26%, 17%);
// elementColor: hsl(209, 23%, 22%);
// textColor: hsl(0, 0%, 100%);

type Theme = {
  bgColor: string;
  elementColor: string;
  textColor: string;
  textPlaceholderColor: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    }
    light?: Theme;
    dark?: Theme;
    customShadow: string;
  }
}
