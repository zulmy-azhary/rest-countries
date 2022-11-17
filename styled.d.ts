import "styled-components";

type Theme = {
  bgColor: string;
  elementColor: string;
  textColor: string;
  captionColor: string;
  placeholderColor: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      gray: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
    light: Theme;
    dark: Theme;
    shadow: string;
  }
}
