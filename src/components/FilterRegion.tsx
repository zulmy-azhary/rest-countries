import { SharedForm } from '@styles/SharedComponents';
import React from 'react'
import styled from 'styled-components'

const Select = styled(SharedForm)`
  width: 100%;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 12rem;
  }
`;

const Option = styled.option`
  padding: 1rem 2rem;
`;

const FilterRegion: React.FC = () => {
  return (
    <Select as="select">
      <Option value="All">Filter by Region</Option>
      <Option value="Africa">Africa</Option>
      <Option value="America">America</Option>
      <Option value="Asia">Asia</Option>
      <Option value="Europe">Europe</Option>
      <Option value="Oceania">Oceania</Option>
    </Select>
  )
}

export default FilterRegion