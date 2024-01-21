import { createApi } from "@reduxjs/toolkit/query/react";

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// queryFn -> Return the information
// query -> baseQuery -> Return the information

export const api = createApi({});

const { useGetPokemonListQuery, useGetPokemonQuery } = api;
export { useGetPokemonListQuery, useGetPokemonQuery };

export type PokemonListType = {
  name: string;
  url: string;
}[];

export interface PokemonDetailsType {
  id: string;
  name: string;
  height: number;
  weight: number;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
}
