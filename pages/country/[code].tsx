import type { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { fetchApi } from "@helper/fetchApi";
import type { Countries, Country } from "@types";

interface Props {
  country: Country;
}

const CountryDetails: React.FC<Props> = ({ country }) => {
  return (
    <div>
      <img src={country.flags.svg} alt={country.name} width={250} height={250} />
      <p>{country.name}</p>
    </div>
  );
};

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

const params: string =
  "alpha3Code,flags,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders";

export const getStaticProps: GetStaticProps = async (ctx) => {
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
