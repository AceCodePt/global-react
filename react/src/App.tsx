import { useState } from "react";
import "./App.css";
import Pokemon from "./Pokemon";

function App() {
  const [faintedArray, setFaintedArray] = useState<number[]>([]);
  const pokemonNames = ["charizard", "ditto", "nichatchu"];
  if (faintedArray.length === pokemonNames.length - 1) {
    let selectedPokemon = pokemonNames.filter((_name, i) => {
      return !faintedArray.includes(i);
    })[0];
    return <>{selectedPokemon} won</>;
  }
  return (
    <div>
      <p>sagi</p>
      <p>???</p>
      {pokemonNames.map((pokemonName, i) => {
        return (
          <Pokemon
            key={pokemonName + i}
            name={pokemonName}
            healthPoints={5}
            abilities={["fire", "tail whip", "harta"]}
            fainted={() => {
              if (!faintedArray.includes(i)) {
                setFaintedArray([...faintedArray, i]);
              }
            }}
          />
        );
      })}
    </div>
  );
}

export default App;
