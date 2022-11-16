import React from "react";
import styled from "styled-components";
import type { Countries } from "@types";
import Link from "next/link";

const CountryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4);
  gap: 4rem;
  grid-auto-rows: auto;
  grid-auto-flow: row;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 2rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    gap: 4rem;
  }
`;

const Card = styled.div`
  grid-column: span 4 / span 4;
  flex: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-column: span 6 / span 6;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    grid-column: span 4 / span 4;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-column: span 3 / span 3;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

interface Props {
  countries: Countries[];
}

const CountryList: React.FC<Props> = ({ countries }) => {
  return (
    <CountryWrapper>
      {countries.map((country: Countries) => (
        <Card key={country.alpha3Code}>
          <Link href={`/country/${country.alpha3Code.toLowerCase()}`}>
            <Image src={country.flags.svg} alt={country.name} />
          </Link>
        </Card>
      ))}
    </CountryWrapper>
  );
};

export default CountryList;
