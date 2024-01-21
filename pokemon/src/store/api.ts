import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// queryFn -> Return the information
// query -> baseQuery -> Return the information

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["pokemonDetails", "pokemonList"],
  endpoints(build) {
    return {
      getPokemonList: build.query<PokemonListType, {}>({
        query() {
          return { url: "pokemons" };
        },
        providesTags: ["pokemonList"],
      }),
      getPokemon: build.query<PokemonDetailsType, { pokemonName: string }>({
        query({ pokemonName }) {
          return { url: "details/" + pokemonName };
        },
        providesTags: ["pokemonDetails"],
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
        invalidatesTags: ["pokemonDetails"],
      }),
      deletePokemon: build.mutation<void, { pokemonId: string }>({
        query({ pokemonId: pokemonId }) {
          return { url: "pokemons/" + pokemonId, method: "DELETE" };
        },
        invalidatesTags: ["pokemonList"],
      }),
    };
  },
});

const {
  useGetPokemonListQuery,
  useGetPokemonQuery,
  useUpdatePokemonMutation,
  useDeletePokemonMutation,
} = api;
export {
  useGetPokemonListQuery,
  useGetPokemonQuery,
  useUpdatePokemonMutation,
  useDeletePokemonMutation,
};

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
