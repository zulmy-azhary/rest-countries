import React from "react";
import styled from "styled-components";
import { useTheme } from "@context";

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
  cursor: pointer;
  user-select: none;
`;

const ToggleLabel = styled.label<{ checked: boolean }>`
  --height: 18px;
  --width: calc(var(--height) * 2);

  cursor: pointer;
  text-indent: -9999px;
  width: var(--width);
  height: var(--height);
  background: ${(props) =>
    props.checked ? props.theme.colors.primary : "var(--textPlaceholderColor)"};
  display: block;
  border-radius: 100px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: ${(props) => (props.checked ? "calc(70% - 14%)" : "10%")};
    top: 50%;
    transform: translateY(-50%);
    width: calc(var(--height) / 1.5);
    height: calc(var(--height) / 1.5);
    background: #fff;
    border-radius: 90px;
    transition: 0.2s;
  }
`;
const Text = styled.p`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Toggle: React.FC = () => {
  const { theme, toggleChange } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <ToggleWrapper onClick={toggleChange}>
      <ToggleLabel htmlFor="toggleMode" checked={isDarkMode}>
        <input id="toggleMode" type="checkbox" checked={isDarkMode} onChange={toggleChange} />
      </ToggleLabel>
      <Text>Dark Mode</Text>
    </ToggleWrapper>
  );
};

export default Toggle;
