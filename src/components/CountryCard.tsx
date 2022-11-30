import { CustomLink } from "@styles/SharedComponents";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Description } from "@components";
import type { Countries } from "@types";

const Card = styled.div`
  grid-column: span 4 / span 4;
  flex: 1;
  background-color: var(--elementColor);
  border-radius: 5px;
  box-shadow: var(--shadow);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3%);

    ${CustomLink} {
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
  padding: 1rem 1.5rem 2.75rem;
`;

const Title = styled.h1`
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

interface Props {
  country: Countries;
}

const CountryCard: React.FC<Props> = ({ country }) => {

  return (
    <Card>
      <Link href={`/country/${country.alpha3Code.toLowerCase()}`}>
        <Image
          src={country.flags.png}
          alt={country.name}
          title={country.name}
        />
      </Link>
      <Detail>
        <CustomLink href={`/country/${country.alpha3Code.toLowerCase()}`}>
          <Title>{country.name}</Title>
        </CustomLink>
        <Description caption="Population">{country.population.toLocaleString("en-US")}</Description>
        <Description caption="Region">{country.region}</Description>
        <Description caption="Capital">{country.capital ?? "-"}</Description>
      </Detail>
    </Card>
  );
};

export default CountryCard;
