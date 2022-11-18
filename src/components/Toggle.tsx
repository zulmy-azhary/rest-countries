import React from "react";
import styled from "styled-components";
import { useTheme } from "@context";
import { flex } from "@styles/SharedStyles";

const ToggleWrapper = styled.div`
  ${flex("center", "center")}
  column-gap: 0.5rem;
  cursor: pointer;
  user-select: none;
`;

const ToggleControl = styled.div<{ checked: boolean }>`
  --height: 18px;
  --width: calc(var(--height) * 2);

  cursor: pointer;
  text-indent: -9999px;
  width: var(--width);
  height: var(--height);
  background: ${(props) =>
    props.checked ? props.theme.colors.primary : "var(--placeholderColor)"};
  display: block;
  border-radius: 100px;
  position: relative;

  :after {
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

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Toggle: React.FC = () => {
  const { theme, toggleChange } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <ToggleWrapper onClick={toggleChange} title="Toggle for Light/Dark Mode">
      <ToggleControl checked={isDarkMode}>
        <input type="checkbox" checked={isDarkMode} onChange={toggleChange} aria-label="Toggle" />
      </ToggleControl>
      <Text>Dark Mode</Text>
    </ToggleWrapper>
  );
};

export default Toggle;
