import React, { useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { SharedForm } from "@styles/SharedComponents";
import { useData } from "@context";

const FormControl = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 45ch;
  }
`;

const Icon = styled(BiSearch)`
  position: absolute;
  left: 1.75rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
`;

const CustomInput = styled(SharedForm)`
  padding-left: 5rem;
  letter-spacing: 0.2px;
  width: 100%;
`;

const SearchRegion: React.FC = () => {
  const { search, setSearch } = useData();
  return (
    <FormControl>
      <CustomInput
        as="input"
        value={search}
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for country..."
      />
      <Icon />
    </FormControl>
  );
};

export default SearchRegion;
