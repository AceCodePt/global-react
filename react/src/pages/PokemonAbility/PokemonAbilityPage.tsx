import { useParams } from "react-router-dom";
import PokemonAbility from "./PokemonAbility";

export default function PokemonAbilityPage() {
  const params = useParams();
  console.log(params.pokemonName, params.abilityId);
  return (
    <>
      <div>
        Pokemon {params.pokemonName}
        <div>
          <PokemonAbility abilityId={params.abilityId} />
        </div>
      </div>
    </>
  );
}
