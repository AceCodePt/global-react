import { useEffect, useState } from "react";
import { PokemonAbilityType } from "./PokemonAbilityType";

export default function PokemonAbility(props: { abilityId: string | undefined}) {
  const [isError, setIsError] = useState(false);
  const [pokemonAbilityData, setAbilityPokemonData] = useState<PokemonAbilityType | null>(null)
  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/ability/${props.abilityId}`)
    .then(async (response) => {
      if(!response.ok){
        setIsError(true)
        return;
      }
      const pokemonData: PokemonAbilityType = await response.json();
      setAbilityPokemonData(pokemonData)
    })
    .catch(() => {
      console.log("reached error")
      setIsError(true)
    })
  }, [])
  
  if(isError){
    return <> Failed to get the pokemon ability id: {props.abilityId}</>
  }

  if(pokemonAbilityData === null){
    return <>ability {props.abilityId} is loading</>
  }
  
  return <>
  <div>{pokemonAbilityData.name}
  <div>{pokemonAbilityData.generation.name}</div></div>
  </> 
}
