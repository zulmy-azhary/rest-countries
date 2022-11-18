import React from "react";
import styled from "styled-components";

const Wrapper = styled.div<{ fontSize: string }>`
  display: flex;
  column-gap: 0.5rem;
  padding: 0.25rem 0;
  font-size: ${(props) => props.fontSize ?? "0.875rem"};
`;

const Caption = styled.p`
  font-weight: 400;
  color: var(--textColor);
  white-space: nowrap;
`;

const Text = styled.p`
  font-weight: 300;
  color: var(--captionColor);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
