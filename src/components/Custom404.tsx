import { CustomLink } from "@styles/SharedComponents";
import { flex, styledElement } from "@styles/SharedStyles";
import Head from "next/head";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import styled from "styled-components";

const Container = styled.div`
  height: 65vh;
`;

const Wrapper = styled.div`
  ${flex("center", "center")}
  flex-direction: column;
  height: 100%;
  row-gap: 1rem;
`;

const Message = styled.p`
  text-align: center;
`;

const BackToHome = styled(CustomLink)`
  ${styledElement}
  ${flex("center", "center")}
  padding: 0.5rem 1.5rem;
  border-radius: 1px;
  column-gap: 0.5rem;
  font-size: 0.875rem;
`;

interface Props {
  metaContent: string;
}

const Custom404: React.FC<React.PropsWithChildren<Props>> = ({ children, metaContent }) => {
  return (
    <Container>
      <Head>
        <title>Rest Countries | 404 Page Not Found</title>
        <meta name="description" content={metaContent} />
      </Head>

      <Wrapper>
        <Message>{children}</Message>
        <BackToHome href="/">
          <BsArrowLeft />
          Back to Home Page
        </BackToHome>
      </Wrapper>
    </Container>
  );
};

export default Custom404;
