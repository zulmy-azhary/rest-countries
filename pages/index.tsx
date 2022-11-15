import React from "react";
import { fetchApi } from "src/helper/fetchApi";
import type { Countries } from "src/types";
import { NextPage } from "next";
import { BackToTop, CountryList, FilterRegion, SearchRegion } from "src/components";
import styled from "styled-components";

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
  return (
      <Container>
        <FormWrapper>
          <SearchRegion />
          <FilterRegion />
        </FormWrapper>
        <CountryList countries={data} />
        <BackToTop />
      </Container>
  );
};

// Api Endpoints - https://restcountries.com/v2/all

// Params
const countriesParam: string = "alpha3Code,flags,name,population,region,capital";

export async function getStaticProps() {
  const data = await fetchApi<Countries[]>(`https://restcountries.com/v2/all?fields=${countriesParam}`);

  return {
    props: {
      data,
    },
  };
}

export default HomePage;