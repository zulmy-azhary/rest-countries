import React from "react";
import styled from "styled-components";
import { CountryCard } from "@components";
import type { Countries } from "@types";
import { useData } from "@context";
import { flex } from "@styles/SharedStyles";

const CountryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 4rem;
  grid-auto-rows: auto;
  grid-auto-flow: row;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 2rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    gap: 4.5rem;
  }
`;

const NotFound = styled.div`
  grid-column: span 4 / span 4;
  ${flex("center", "center")}
  height: 30vh;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-column: span 12 / span 12;
    height: 50vh;
  }
`;

interface Props {
  countries: Countries[];
}

const CountryList: React.FC<Props> = ({ countries }) => {
  const { filtered } = useData();
  const filteredCountries = filtered(countries);

  return (
    <CountryWrapper>
      {!!filteredCountries.length ? (
        filteredCountries.map((country: Countries) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))
      ) : (
        <NotFound>Country Not Found!! 😕</NotFound>
      )}
    </CountryWrapper>
  );
};

export default CountryList;
