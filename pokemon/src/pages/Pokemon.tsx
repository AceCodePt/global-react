import { useEffect, useState } from "react";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState<any>();
  useEffect(() => {
    fetch("http://localhost:3000/pokemons/bulbasaur").then(async (res) => {
      const pokemon = await res.json();
      setPokemon(pokemon);
    });
  }, []);
  if (!pokemon) {
    return <>is loading...</>;
  }
  return (
    <>
      <div>name: {pokemon.name}</div>
    </>
  );
}
