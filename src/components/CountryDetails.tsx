import { flex, styledElement } from "@styles/SharedStyles";
import { Countries, Country } from "@types";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Description } from "@components";

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
  row-gap: 5rem;
  width: 100%;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const Header = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 2rem;
  }
`;

const Details = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 0.5rem 8rem;

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

const BorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

const BorderText = styled.h4`
  font-weight: 600;
`;

const BorderWrapper = styled.div`
  ${flex("flex-start", "center")}
  gap: 0.75rem;
  flex: 1;
  flex-wrap: wrap;
`;

const CustomLink = styled(Link)`
  flex: 1;
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex: 0;
  }
`;

const Border = styled.button`
  ${styledElement}
  padding: 0.25rem 0.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius: 2px;
  cursor: pointer;
  width: 100%;
  color: var(--captionColor);

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 6rem;
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
        <DetailWrapper>
          <Header>{country.name}</Header>
          <Details>
            <Description fontSize="1rem" caption="Native Name">
              {country.nativeName}
            </Description>
            <Description caption="Population">
              {country.population.toLocaleString("en-US")}
            </Description>
            <Description caption="Region">{country.region}</Description>
            <Description caption="Sub Region">{country.subregion}</Description>
            <Description caption="Capital">{country.capital ? country.capital : "-"}</Description>
            <Description caption="Top Level Domain">
              {country.topLevelDomain.join(", ") ?? "-"}
            </Description>
            <Description caption="Currencies">
              {!!country.currencies.length
                ? country.currencies.map((currency) => currency.name).join(", ")
                : "-"}
            </Description>
            <Description caption="Languages">
              {country.languages.map((language) => language.name).join(", ")}
            </Description>
          </Details>
        </DetailWrapper>
        <BorderContainer>
          <BorderText>Border Countries:</BorderText>
          <BorderWrapper>
            {!!country.borders.length ? (
              country.borders.map((border: string) => {
                const countryBorder = countries.find((country) => country.alpha3Code === border);
                return (
                  <CustomLink
                    key={border}
                    href={`/country/${countryBorder.alpha3Code.toLowerCase()}`}
                  >
                    <Border title={countryBorder.name} aria-label={countryBorder.name}>
                      {countryBorder.name}
                    </Border>
                  </CustomLink>
                );
              })
            ) : (
              <span>-</span>
            )}
          </BorderWrapper>
        </BorderContainer>
      </DetailContainer>
    </Wrapper>
  );
};

export default CountryDetails;
