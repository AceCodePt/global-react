import { Link, Outlet } from "react-router-dom";
import "./App.css";
import React from "react";
import { useDeletePokemonMutation, useGetPokemonListQuery } from "./store/api";

function App() {
  const {
    data: pokemonList,
    isError,
    isLoading,
    isSuccess,
  } = useGetPokemonListQuery("");
  const [deletePokemon] = useDeletePokemonMutation();

  if (isLoading) {
    return <>is loading...</>;
  }
  if (isError || !isSuccess) {
    return <> ErrorOccured</>;
  }

  return (
    <>
      <div>My Pokedex:</div>
      <div>
        {pokemonList.map((pokemonItem, i) => {
          return (
            <React.Fragment key={i + pokemonItem.id}>
              <Link key={i + pokemonItem.id} to={pokemonItem.id}>
                {pokemonItem.name}
              </Link>
              <button
                onClick={() => {
                  deletePokemon({ pokemonId: pokemonItem.id });
                }}
              >
                Delete
              </button>
              <br />
            </React.Fragment>
          );
        })}
      </div>
      <Outlet />
    </>
  );
}

export default App;
