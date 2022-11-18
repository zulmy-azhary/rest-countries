import React, { useCallback, useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import styled from "styled-components";
import { flex } from "@styles/SharedStyles";

const Icon = styled(BiUpArrowAlt)`
  font-size: 2rem;
`;

const Wrapper = styled.div<{ scrollState: boolean }>`
  ${flex("center", "center")}
  position: fixed;
  z-index: 9999;
  background-color: var(--elementColor);
  box-shadow: var(--shadow);
  right: 5%;
  opacity: ${(props) => (props.scrollState ? 1 : 0)};
  bottom: ${(props) => (props.scrollState ? "7%" : " -5%")};
  padding: 0.25rem;
  cursor: pointer;
  border-radius: 3px;
  transition: 0.2s;

  :hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const BackToTop: React.FC = () => {
  const [scrollState, setScrollState] = useState<boolean>(false);

  const scrollHandler = useCallback((): void => {
    setScrollState(window.scrollY >= 200 ? true : false);
  }, []);

  const scrollChange = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return (
    <Wrapper scrollState={scrollState} onClick={scrollChange} title="Back to Top">
      <Icon />
    </Wrapper>
  );
};

export default BackToTop;
