import React from "react";
import styled from "styled-components";
import { CountryBorder, CountryDescription } from "@components";
import { flex } from "@styles/SharedStyles";
import type { Countries, Country } from "@types";

const Wrapper = styled.div`
  ${flex("space-between", "center")}
  width: 100%;
  flex-direction: column;
  row-gap: 2.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    flex-direction: row;
    column-gap: 5rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-direction: row;
    column-gap: 8rem;
  }
`;

const Image = styled.img`
  --size: 2.8125;
  width: 100%;
  object-fit: cover;
  user-select: none;
  align-self: flex-start;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: calc(var(--desktop) / 4);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    width: calc(var(--desktop) / var(--size));
  }
`;

const DetailContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 2.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    row-gap: 5rem;
  }
`;

interface Props {
  country: Country;
  countries: Countries[];
}

const CountryDetails: React.FC<Props> = ({ country, countries }) => {
  return (
    <Wrapper>
      <Image src={country.flags.svg} alt={country.name} />
      <DetailContainer>
        <CountryDescription country={country} />
        <CountryBorder country={country} countries={countries} />
      </DetailContainer>
    </Wrapper>
  );
};

export default CountryDetails;
