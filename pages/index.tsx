import React from "react";
import { GetStaticProps, NextPage } from "next";
import styled from "styled-components";
import { BackToTop, CountryList, FilterRegion, SearchCountry } from "@components/main";
import { fetchApi } from "@helper/fetchApi";
import type { Countries } from "@types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
`;

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  row-gap: 3.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

interface Props {
  data: Countries[];
}

const HomePage: NextPage<Props> = ({ data }) => {
  // const filtered = filteredData(data);
  return (
    <Container>
      <FormWrapper>
        <SearchCountry />
        <FilterRegion />
      </FormWrapper>
      <CountryList countries={data} />
      <BackToTop />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Params
  const params: string = "alpha3Code,flags,name,population,region,capital";
  const data = await fetchApi<Countries[]>(
    `https://restcountries.com/v2/all?fields=${params}`
  );

  return {
    props: {
      data,
    },
  };
}

export default HomePage;
