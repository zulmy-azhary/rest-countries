import { css } from "styled-components";

export const flex = (justifyContent: string, alignItems: string) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

export const styledElement = css`
  background-color: var(--elementColor);
  color: var(--textColor);
  box-shadow: var(--shadow);
  border: none;

  :hover, :focus {
    outline: 2px ${(props) => props.theme.colors.primary} solid;
    outline-offset: 1px;
  }
`;