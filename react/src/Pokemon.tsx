import { useEffect, useState } from "react";
import { PokemonType} from "./PokemonType";
import PokemonAbility from "./PokemonAbility";

export default function Pokemon(props: {
  name: string | undefined;
  healthPoints: number;
  fainted?: () => void;
}) {
  const [isError, setIsError] = useState(false);
  const [pokemonData, setPokemonData] = useState<PokemonType | null>(null)
  const [healthPointsState, setHealthPointState] = useState(props.healthPoints);
  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
    .then(async (response) => {
      if(!response.ok){
        setIsError(true)
        return;
      }
      const pokemonData: PokemonType = await response.json();
      setPokemonData(pokemonData)
    })
    .catch(() => {
      console.log("reached error")
      setIsError(true)
    })
  }, [])
  
  if(isError){
    return <> Failed to get the pokemon {props.name}</>
  }

  if(pokemonData === null){
    return <>{props.name} is loading</>
  }

  if (healthPointsState <= 0) {
    props.fainted?.();
    return <>{props.name} fainted</>;
  }

  return (
    <>
      <div>
      <div>{props.name}</div> 
        <button
          onClick={() => {
            // 1-10 Take hit damage
            const dmg = +(Math.random() * 10).toFixed(0);
            setHealthPointState(healthPointsState - dmg);
            console.log(healthPointsState);
          }}
        >
          Take a hit
        </button>
        <div>{healthPointsState}</div>
        <button
          onClick={() => {
            setHealthPointState(healthPointsState + 10);
          }}
        >
          Drink health potion
        </button>
        <div>
          {pokemonData.abilities.map((ability, i) => {
            return <PokemonAbility key={ability.ability.name+i} name={ability.ability.name} />;
          })}
        </div>
      </div>
    </>
  );
}
