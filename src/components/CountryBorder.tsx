import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { flex, styledElement } from "@styles/SharedStyles";
import type { Countries, Country } from "@types";

const BorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

const BorderText = styled.p`
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

const CountryBorder: React.FC<Props> = ({ country, countries }) => {
  return (
    <BorderContainer>
      <BorderText>Border Countries:</BorderText>
      <BorderWrapper>
        {!!country.borders.length ? (
          country.borders.map((border: string) => {
            const countryBorder = countries.find((country) => country.alpha3Code === border);
            return (
              <CustomLink key={border} href={`/country/${countryBorder.alpha3Code.toLowerCase()}`}>
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
  );
};

export default CountryBorder;
