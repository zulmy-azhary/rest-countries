import React from "react";
import styled from "styled-components";

const Wrapper = styled.div<{ fontSize: string }>`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  padding: 0.1rem 0;
  font-size: ${(props) => props.fontSize ?? "0.875rem"};
`;

const Caption = styled.p`
  font-weight: 600;
  color: var(--textColor);
  /* align-self: flex-start; */
`;

const Text = styled.p`
  font-weight: 300;
  color: var(--captionColor);
`;

interface Props {
  fontSize?: string;
  caption: string;
  children: React.ReactNode;
}

const Description: React.FC<Props> = ({ fontSize, caption, children }) => {
  return (
    <Wrapper fontSize={fontSize}>
      <Caption>{caption}:</Caption>
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default Description;
