import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Dispatcher, Theme } from "@types";

interface ThemeCtx {
  theme: Theme;
  toggleChange: () => void;
}

const ThemeContext = createContext<ThemeCtx>({
  theme: "dark",
  toggleChange: () => {},
} as ThemeCtx);

export const useTheme = (): ThemeCtx => useContext(ThemeContext);

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleChange = useCallback(() => {
    setTheme((prev) => {
      if (prev === "light") {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        return "dark";
      }

      localStorage.setItem("theme", "light");
      document.documentElement.removeAttribute("data-theme");
      return "light";
    });
  }, []);

  useEffect(() => {
    const storage = localStorage.getItem("theme");
    setTheme(() => (storage === "dark" ? "dark" : "light"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
