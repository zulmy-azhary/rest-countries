import React from "react";

export type Dispatcher<T> = React.Dispatch<React.SetStateAction<T>>;
export type Theme = "light" | "dark";
type Region = "Africa" | "America" | "Asia" | "Europe" | "Oceania";
export type SelectRegion = "All" | Region;

// Types for all countries
export type Countries = {
  alpha3Code: string;
  flags: {
    png: string;
    svg: string;
  };
  name: string;
  population: number;
  region: Region;
  capital: string;
};

type Name = {
  name: string;
};

// Types for Country Details
export type Country = Countries & {
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: Name[];
  languages: Name[];
  borders: string[];
};
