import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
`;
const Main = styled.main`
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

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  a {
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;
const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

export { Container, Main, Title, Description, CodeTag };
