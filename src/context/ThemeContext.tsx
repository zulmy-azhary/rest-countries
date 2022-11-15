import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Dispatcher, ThemeMode } from "src/types";

interface ThemeCtx {
  theme: ThemeMode;
  setTheme?: Dispatcher<ThemeMode>;
  toggleChange: () => void;
}

const ThemeContext = createContext<ThemeCtx>({
  theme: "dark",
  toggleChange: () => {},
} as ThemeCtx);

export const useTheme = (): ThemeCtx => useContext(ThemeContext);

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>("light");
  
  const toggleChange = useCallback(() => {
    setTheme((prev) => {
      if (prev === "light") {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark")
        return "dark"
      }
      
      localStorage.setItem("theme", "light")
      document.documentElement.removeAttribute("data-theme");
      return "light";
    });
  }, []);

  useEffect(() => {
    const storage = localStorage.getItem("theme");
    setTheme(() => storage === "dark" ? "dark" : "light")
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
