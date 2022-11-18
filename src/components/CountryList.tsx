import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Description } from "@components";
import type { Countries } from "@types";
import { useData } from "@context";
import { CustomLink } from "@styles/SharedComponents";
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

const Card = styled.div`
  grid-column: span 4 / span 4;
  flex: 1;
  background-color: var(--elementColor);
  border-radius: 5px;
  box-shadow: var(--shadow);
  transition: 0.2s;

  :hover {
    transform: translateY(-3%);

    ${CustomLink}{
      color: ${(props) => props.theme.colors.primary};
    }
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
`;

const Title = styled.h1`
  font-size: 1.15rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
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
          <Card key={country.alpha3Code}>
            <Link href={`/country/${country.alpha3Code.toLowerCase()}`}>
              <Image
                src={country.flags.png}
                alt={country.name}
                title={country.name}
                loading="lazy"
              />
            </Link>
            <Detail>
              <CustomLink href={`/country/${country.alpha3Code.toLowerCase()}`}>
                <Title>{country.name}</Title>
              </CustomLink>
              <Description caption="Population">
                {country.population.toLocaleString("en-US")}
              </Description>
              <Description caption="Region">{country.region}</Description>
              <Description caption="Capital">{country.capital ?? "-"}</Description>
            </Detail>
          </Card>
        ))
      ) : (
        <NotFound>Country Not Found!! 😕</NotFound>
      )}
    </CountryWrapper>
  );
};

export default CountryList;
