import styled from "styled-components";
import Link from "next/link";
import { styledElement } from "@styles/SharedStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
`;

export const Main = styled.main`
  height: 100%;
  mih-height: 100%;
  padding: 8.5rem 1.5rem 5rem;
  margin: 0 auto;
  flex-grow: 1;
  width: 100%;
  max-width: var(--mobile);

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: calc(var(--tablet) / 1.1);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    max-width: calc(var(--laptop) / 1.1);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    max-width: calc(var(--desktop) / 1.1);
  }
`;

export const SharedForm = styled.div`
  ${styledElement}
  padding: 1.25rem 1.5rem;
  border-radius: 5px;
`;

export const CustomLink = styled(Link)`
  transition: color 0.2s ease-in-out;

  :hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
