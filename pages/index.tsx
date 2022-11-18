import React from "react";
import { GetStaticProps, NextPage } from "next";
import styled from "styled-components";
import { BackToTop, CountryList, FilterRegion, SearchCountry } from "@components";
import { flex } from "@styles/SharedStyles";
import type { Countries } from "@types";
import { fetchApi } from "@helper/fetchApi";
import { DataProvider } from "@context";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
`;

const FormWrapper = styled.div`
  ${flex("space-between", "center")}
  width: 100%;
  flex-direction: column;
  row-gap: 3.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

interface Props {
  countries: Countries[];
}

const HomePage: NextPage<Props> = ({ countries }) => {
  return (
    <DataProvider>
      <Container>
        <FormWrapper>
          <SearchCountry />
          <FilterRegion />
        </FormWrapper>
        <CountryList countries={countries} />
        <BackToTop />
      </Container>
    </DataProvider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Params
  const params: string = "alpha3Code,flags,name,population,region,capital";
  const data = await fetchApi<Countries[]>(`https://restcountries.com/v2/all?fields=${params}`);

  return {
    props: {
      countries: data,
    },
  };
};

export default HomePage;
