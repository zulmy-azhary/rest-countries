import React from "react";
import styled from "styled-components";
import { Description } from "@components";
import type { Country } from "@types";

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const Header = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 2rem;
  }
`;

const Details = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 0.25rem 8rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-auto-flow: column;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    grid-auto-flow: row;
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-auto-flow: column;
    grid-template-columns: repeat(2, 1fr);
  }
`;

interface Props {
  country: Country;
}

const CountryDescription: React.FC<Props> = ({ country }) => {
  return (
    <DetailWrapper>
      <Header>{country.name}</Header>
      <Details>
        <Description fontSize="0.9rem" caption="Native Name">
          {country.nativeName}
        </Description>
        <Description fontSize="0.9rem" caption="Population">{country.population.toLocaleString("en-US")}</Description>
        <Description fontSize="0.9rem" caption="Region">{country.region}</Description>
        <Description fontSize="0.9rem" caption="Sub Region">{country.subregion}</Description>
        <Description fontSize="0.9rem" caption="Capital">{country.capital ? country.capital : "-"}</Description>
        <Description fontSize="0.9rem" caption="Top Level Domain">
          {country.topLevelDomain.join(", ") ?? "-"}
        </Description>
        <Description fontSize="0.9rem" caption="Currencies">
          {!!country.currencies.length
            ? country.currencies.map((currency) => currency.name).join(", ")
            : "-"}
        </Description>
        <Description fontSize="0.9rem" caption="Languages">
          {country.languages.map((language) => language.name).join(", ")}
        </Description>
      </Details>
    </DetailWrapper>
  );
};

export default CountryDescription;
