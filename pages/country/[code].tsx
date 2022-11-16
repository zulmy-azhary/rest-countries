import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { fetchApi } from "@helper/fetchApi";
import type { Countries, Country } from "@types";
import Head from "next/head";

interface Props {
  country: Country;
}

const CountryDetails: React.FC<Props> = ({ country }) => {
  return (
    <div>
      <Head>
        <title>Rest Countries | {country.name}</title>
        <meta name="description" content={`The ${country.name} Details page`} />
      </Head>
      <img src={country.flags.svg} alt={country.name} width="100%" height={250} />
      <p>{country.name}</p>
    </div>
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

export default CountryDetails;
