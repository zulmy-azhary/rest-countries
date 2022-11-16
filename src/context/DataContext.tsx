import { Countries, Dispatcher } from "@types";
import React, { createContext, PropsWithChildren, useContext, useState } from "react";

interface DataCtx {
  search: string;
  setSearch: Dispatcher<string>;
  filter: string;
  setFilter: Dispatcher<string>;
  filtered?: (countries: Countries[]) => Countries[];
}

const DataContext = createContext<DataCtx>({} as DataCtx);
export const useData = (): DataCtx => useContext(DataContext);

const DataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  const filtered = (countries: Countries[]) => {
    if (!!search) {
      return countries.filter((country: Countries) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return countries;
  };

  return (
    <DataContext.Provider value={{ search, setSearch, filter, setFilter, filtered }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
