import React from "react";
import styled from "styled-components";
import { Toggle } from "@components/main";
import Link from "next/link";

const Wrapper = styled.header`
  background-color: var(--elementColor);
  box-shadow: var(--shadow);
  position: fixed;
  z-index: 9999;
  inset: auto 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem;
  margin: 0 auto;

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

const Heading = styled.h1`
  font-size: 1.15rem;
  font-weight: 800;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 1.25rem;
    font-weight: 600;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 1.5rem;
  }
`;

const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <Nav>
        <Link href="/">
          <Heading>Where in the world?</Heading>
        </Link>
        <Toggle />
      </Nav>
    </Wrapper>
  );
};

export default Navbar;
