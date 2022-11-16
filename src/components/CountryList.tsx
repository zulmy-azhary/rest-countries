import React from "react";
import styled from "styled-components";
import Link from "next/link";
import type { Countries } from "@types";
import { useData } from "@context";

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
  user-select: none;
`;

const Detail = styled.div`
  padding: 1rem 1.5rem 2.5rem;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 1.15rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  padding: 0.1rem 0;
  font-size: 0.9rem;
`;

const Caption = styled.p`
  font-weight: 600;
  color: var(--textColor);
`;

const Text = styled.p`
  font-weight: 300;
  color: var(--textColor);
`;

const NotFound = styled.div`
  grid-column: span 4 / span 4;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-column: span 12 / span 12;
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
          <Card key={country.alpha3Code}>
            <Link href={`/country/${country.alpha3Code.toLowerCase()}`}>
              <Image src={country.flags.png} alt={country.name} title={country.name} loading="lazy" />
            </Link>
            <Detail>
              <Title>{country.name}</Title>
              <Wrapper>
                <Caption>Population:</Caption>
                <Text>{country.population.toLocaleString("en-US")}</Text>
              </Wrapper>
              <Wrapper>
                <Caption>Region:</Caption>
                <Text>{country.region}</Text>
              </Wrapper>
              <Wrapper>
                <Caption>Capital:</Caption>
                <Text>{country.capital ?? "-"}</Text>
              </Wrapper>
            </Detail>
          </Card>
        ))
      ) : (
        <NotFound>Country Not Found!!</NotFound>
      )}
    </CountryWrapper>
  );
};

export default CountryList;
