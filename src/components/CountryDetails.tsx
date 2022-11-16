import { flex } from "@styles/SharedStyles";
import { Country } from "@types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  ${flex("space-between", "center")}
  width: 100%;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  --size: 2.8125;
  width: 100%;
  object-fit: cover;
  user-select: none;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    width: calc(var(--laptop) / var(--size));
    height: calc(var(--laptop) / 4);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: calc(var(--desktop) / var(--size));
    height: calc(var(--desktop) / 4);
  }
`;

interface Props {
  country: Country;
}

const CountryDetails: React.FC<Props> = ({ country }) => {
  return (
    <Wrapper>
      <Image src={country.flags.svg} alt={country.name} />
      <p>{country.name}</p>
    </Wrapper>
  );
};

export default CountryDetails;
