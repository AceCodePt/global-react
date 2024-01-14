import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function PokemonLayout() {
  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);
  useEffect(() => {
    fetch(new URL("pokemon", "http://localhost:3000"))
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setPokemonList(json);
      });
  }, []);
  return (
    <>
      <main>
        <nav>
          {pokemonList.map((pokemon) => {
            return (
              <Link
                key={pokemon.name + pokemon.id}
                to={pokemon.name.toLowerCase()}
              >
                {pokemon.name}
              </Link>
            );
          })}
        </nav>
        <section>
          <Outlet />
        </section>
      </main>
    </>
  );
}

type PokemonListItem = {
  id: string;
  name: string;
};
