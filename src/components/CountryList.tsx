import React from "react";
import styled from "styled-components";
import Link from "next/link";
import type { Countries } from "@types";

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
    gap: 4rem;
  }
`;

const Card = styled.div`
  grid-column: span 4 / span 4;
  flex: 1;
  background-color: var(--elementColor);
  border-radius: 5px;
  box-shadow: var(--shadow);
  transition: 0.2s;

  &:hover {
    transform: translateY(-3%);
  }

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
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Description = styled.div`
  padding: 1rem 1.5rem 2.5rem;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 800;
  padding-bottom: 0.75rem;
`;

const Caption = styled.p`
  padding: 0.15rem 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--textColor);
`;

const Text = styled.span`
  font-weight: 300;
  color: var(--textColor);
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
            <Image src={country.flags.svg} alt={country.name} title={country.name} />
          </Link>
          <Description>
            <Title>{country.name}</Title>
            <Caption>
              Population: <Text>{country.population}</Text>
            </Caption>
            <Caption>
              Region: <Text>{country.region}</Text>
            </Caption>
            <Caption>
              Capital: <Text>{country.capital}</Text>
            </Caption>
          </Description>
        </Card>
      ))}
    </CountryWrapper>
  );
};

export default CountryList;
