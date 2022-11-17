import React from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

const Wrapper = styled.footer`
  width: 100%;
  background-color: var(--elementColor);
  padding: 1rem 0;
  text-align: center;
`;

const Text = styled.p`
  font-size: 0.9rem;
`;

const CustomLink = styled(Link)`
  transition: color 0.2s ease-in-out;
  :hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Text>
        Created with{" "}
        <FaHeart style={{ display: "inline-block", color: "red", verticalAlign: "middle" }} /> by{" "}
        <CustomLink
          href="https://github.com/zulmy-azhary"
          target="_blank"
          rel="noreferrer"
          title="Github Link"
        >
          Zulmy Azhary
        </CustomLink>
      </Text>
    </Wrapper>
  );
};

export default Footer;
