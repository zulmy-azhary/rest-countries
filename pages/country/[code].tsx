import React from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { flex, styledElement } from "@styles/SharedStyles";
import { BsArrowLeft } from "react-icons/bs";
import { CountryDetails } from "@components";
import { fetchApi } from "@helper/fetchApi";
import type { Countries, Country } from "@types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4.5rem;
`;

const Button = styled(Link)`
  ${flex("center", "center")}
  ${styledElement}
  font-size: 0.875rem;
  column-gap: 0.5rem;
  padding: 0.5rem 2.5rem;
  border-radius: 5px;
  width: fit-content;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
`;

interface Props {
  country: Country;
  countries: Countries[];
}

const CountryDetailsPage: NextPage<Props> = ({ country, countries }) => {
  return (
    <Wrapper>
      <Head>
        <title>Rest Countries | {country.name}</title>
        <meta name="description" content={`The ${country.name} Details page`} />
      </Head>
      <Button href="/">
        <BsArrowLeft /> Back
      </Button>
      <CountryDetails country={country} countries={countries} />
    </Wrapper>
  );
};

// Fetch all countries to get alpha3Code for each country
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetchApi<Countries[]>("https://restcountries.com/v2/all?fields=alpha3Code");
  const paths = data.map(({ alpha3Code }: Countries) => {
    return {
      params: { code: alpha3Code.toLowerCase() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// Fetch an individual country based on alpha3Code that have been fetched on getStaticPaths above
export const getStaticProps: GetStaticProps = async (ctx) => {
  // Country details parameter
  const params: string =
    "alpha3Code,flags,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders";
  // Get the alpha3Code for each country
  const code = ctx.params.code;
  // Fetch the country based on alpha3Code
  const data = await fetchApi<Country>(
    `https://restcountries.com/v2/alpha/${code}?fields=${params}`
  );
  // Fetch all countries for filter the borders of the country
  const countries = await fetchApi<Countries[]>(
    `https://restcountries.com/v2/all?fields=alpha3Code,name`
  );

  return {
    props: {
      country: data,
      countries,
    },
  };
};

export default CountryDetailsPage;
