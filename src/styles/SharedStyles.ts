import { css } from "styled-components";

type Flex = "flex-start" | "flex-end" | "center" | "initial" | "inherit";
type JustifyContent = Flex | "space-between" | "space-around" | "space-evenly";
type AlignItems = Flex | "stretch" | "baseline";

export const flex = (justifyContent: JustifyContent, alignItems: AlignItems) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

export const styledElement = css`
  background-color: var(--elementColor);
  color: var(--textColor);
  box-shadow: var(--shadow);
  border: none;

  :hover,
  :focus {
    outline: 2px ${(props) => props.theme.colors.primary} solid;
    outline-offset: 1px;
  }
`;
