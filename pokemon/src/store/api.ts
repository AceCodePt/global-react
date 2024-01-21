import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// queryFn -> Return the information
// query -> baseQuery -> Return the information

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints(build) {
    return {
      getPokemonList: build.query<PokemonListType, {}>({
        query() {
          return { url: "pokemons" };
        },
      }),
      getPokemon: build.query<PokemonDetailsType, { pokemonName: string }>({
        query({ pokemonName }) {
          return { url: "details/" + pokemonName };
        },
      }),
      updatePokemon: build.mutation<
        void,
        { pokemonName: string; weight: number; height: number }
      >({
        query({ weight, height, pokemonName }) {
          return {
            url: "details/" + pokemonName,
            method: "PATCH",
            body: { weight, height },
          };
        },
      }),
    };
  },
});

const { useGetPokemonListQuery, useGetPokemonQuery, useUpdatePokemonMutation } =
  api;
export { useGetPokemonListQuery, useGetPokemonQuery, useUpdatePokemonMutation };

export type PokemonListType = {
  id: string;
  name: string;
}[];

export interface PokemonDetailsType {
  id: string;
  name: string;
  height: number;
  weight: number;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
}
