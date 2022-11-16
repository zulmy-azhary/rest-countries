import { Countries, Dispatcher, SelectRegion } from "@types";
import React, { createContext, PropsWithChildren, useContext, useState } from "react";

interface DataCtx {
  search: string;
  setSearch: Dispatcher<string>;
  region: string;
  setRegion: Dispatcher<string>;
  filtered?: (countries: Countries[]) => Countries[];
}

const DataContext = createContext<DataCtx>({} as DataCtx);
export const useData = (): DataCtx => useContext(DataContext);

const DataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<SelectRegion>("All");

  const filtered = (countries: Countries[]) => {
    if (!!search && (region === "All")) {
      return countries.filter((country: Countries) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (!search && (region !== "All")) {
      return countries.filter((country: Countries) => country.region.includes(region));
    }

    if (!!search && (region !== "All")) {
      return countries
        .filter((country: Countries) => country.name.toLowerCase().includes(search.toLowerCase()))
        .filter((country: Countries) => country.region.includes(region));
    }

    return countries;
  };

  return (
    <DataContext.Provider value={{ search, setSearch, region, setRegion, filtered }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
