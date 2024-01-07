import { useState } from "react";
import "./App.css";
import Pokemon from "./Pokemon";
import { Link } from "react-router-dom";

function App() {
  const [faintedArray, setFaintedArray] = useState<number[]>([]);
  const pokemonNames = ["charizard", "ditto", "pichu"];
  if (faintedArray.length === pokemonNames.length - 1) {
    const selectedPokemon = pokemonNames.filter((_name, i) => {
      return !faintedArray.includes(i);
    })[0];
    return <>{selectedPokemon} won</>;
  }
  return (
    <div>
      <Link to={"/pokemon"}>pokemon(client)</Link>
      <a href={"/pokemon"}>pokemon(server)</a>

      <div className="row">
      {pokemonNames.map((pokemonName, i) => {
        return (
          <Pokemon
            key={pokemonName + i}
            name={pokemonName}
            healthPoints={5}
            fainted={() => {
              if (!faintedArray.includes(i)) {
                setFaintedArray([...faintedArray, i]);
              }
            }}
          />
        );
      })}
      </div>
    </div>
  );
}

export default App;
