import React from "react";

export type Dispatcher<T> = React.Dispatch<React.SetStateAction<T>>;
export type ThemeMode = "light" | "dark";
type Region = "Africa" | "America" | "Asia" | "Europe" | "Oceania";
export type SelectRegion = "All" | Region;

export type Countries = {
  alpha3Code: string;
  flags: {
    png: string;
  };
  name: string;
  population: number;
  region: string;
  capital: string;
};

type Name = {
  name: string;
}

export type Country = {
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: Name[];
  languages: Name[];
  borders: string[];
} & Countries;