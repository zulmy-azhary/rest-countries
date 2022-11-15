import React, { useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

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

const CustomInput = styled.input`
  padding: 1.25rem 1.5rem;
  padding-left: 5rem;
  background-color: var(--elementColor);
  border: none;
  border-radius: 5px;
  color: var(--textColor);
  box-shadow: var(--shadow);
  letter-spacing: 0.2px;
  width: 100%;

  &:focus {
    outline: 2px ${(props) => props.theme.colors.primary} solid;
    outline-offset: 1px;
  }
`;

const SearchRegion: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <FormControl>
      <CustomInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for country..."
      />
      <Icon />
    </FormControl>
  );
};

export default SearchRegion;
