import { useData } from "@context";
import { SharedForm } from "@styles/SharedComponents";
import { SelectRegion } from "@types";
import React from "react";
import styled from "styled-components";

const Select = styled(SharedForm)`
  width: 100%;
  cursor: pointer;
  transition: 0.2s;

  @media (min-width: 768px) {
    width: 12rem;
  }
`;

const Option = styled.option`
  padding: 1rem 2rem;
`;

const FilterRegion: React.FC = () => {
  const { region, setRegion } = useData();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value)
  }

  return (
    <Select as="select" value={region} onChange={handleChange}>
      <Option value="All">Filter by Region</Option>
      <Option value="Africa">Africa</Option>
      <Option value="America">America</Option>
      <Option value="Asia">Asia</Option>
      <Option value="Europe">Europe</Option>
      <Option value="Oceania">Oceania</Option>
    </Select>
  );
};

export default FilterRegion;
