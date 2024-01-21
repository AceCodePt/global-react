import { Outlet } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [pokemonList, setPokemonList] = useState<
    { id: string; name: string }[]
  >([]);
  useEffect(() => {
    fetch("http://localhost:3000/pokemons").then(async (res) => {
      const pokemon = await res.json();
      setPokemonList(pokemon);
    });
  }, []);
  if (pokemonList.length <= 0) {
    return <>is loading...</>;
  }
  console.log(pokemonList);
  return (
    <>
      My Pokedex: <Outlet />
    </>
  );
}

export default App;
