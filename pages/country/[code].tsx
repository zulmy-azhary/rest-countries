import React from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { fetchApi } from "@helper/fetchApi";
import type { Countries, Country } from "@types";
import Head from "next/head";
import { CountryDetails } from "@components/main";
import styled from "styled-components";
import Link from "next/link";
import { flex, styledElement } from "@styles/SharedStyles";
import { BsArrowLeft } from "react-icons/bs";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4.5rem;
`;

const Button = styled(Link)`
  ${flex("center", "center")}
  ${styledElement}
  column-gap: 0.5rem;
  padding: 0.5rem 2.5rem;
  border-radius: 5px;
  width: fit-content;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
`;

interface Props {
  country: Country;
}

const CountryDetailsPage: NextPage<Props> = ({ country }) => {
  return (
    <Wrapper>
      <Head>
        <title>Rest Countries | {country.name}</title>
        <meta name="description" content={`The ${country.name} Details page`} />
      </Head>
      <Button href="/"><BsArrowLeft /> Back</Button>
      <CountryDetails country={country} />
    </Wrapper>
  );
};

// Fetch all countries to get alpha3Code for each country using getStaticPaths
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

// Fetch an individual country base on alpha3Code that have been fetched on getStaticPaths above
export const getStaticProps: GetStaticProps = async (ctx) => {
  // Country details parameter
  const params: string =
    "alpha3Code,flags,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders";
  const code = ctx.params.code;
  const data = await fetchApi<Country>(
    `https://restcountries.com/v2/alpha/${code}?fields=${params}`
  );

  return {
    props: {
      country: data,
    },
  };
};

export default CountryDetailsPage;
