import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Dispatcher } from "@types";

interface ScrollCtx {
  scroll: boolean;
  setScroll?: Dispatcher<boolean>;
  scrollHandler: () => void;
  scrollChange: () => void;
}

const ScrollContext = createContext<ScrollCtx>({} as ScrollCtx);
export const useScroll = (): ScrollCtx => useContext(ScrollContext);

const ScrollProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [scroll, setScroll] = useState<boolean>(false);

  const scrollHandler = useCallback((): void => {
    window.scrollY >= 200 ? setScroll(true) : setScroll(false);
  }, []);

  const scrollChange = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return (
    <ScrollContext.Provider value={{ scroll, setScroll, scrollHandler, scrollChange }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
