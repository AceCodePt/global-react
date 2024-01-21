import { useParams } from "react-router-dom";
import { useGetPokemonQuery, useUpdatePokemonMutation } from "../store/api";
import { useForm } from "react-hook-form";

export default function Pokemon() {
  const { register, handleSubmit } = useForm<{
    height: number;
    weight: number;
  }>();
  const { pokemonName } = useParams();
  const [updatePokemon] = useUpdatePokemonMutation();
  const {
    data: pokemon,
    isLoading,
    isError,
    isSuccess,
  } = useGetPokemonQuery({ pokemonName: pokemonName! });

  if (isLoading) {
    return <>is loading...</>;
  }
  if (isError || !isSuccess) {
    return <> ErrorOccured</>;
  }

  return (
    <>
      <div>name: {pokemon.name}</div>
      <div>height: {pokemon.height}</div>
      <div>weight: {pokemon.weight}</div>
      <form
        onSubmit={handleSubmit((data) => {
          if (Number.isNaN(data.weight) || Number.isNaN(data.height)) {
            return;
          }
          updatePokemon({ ...data, pokemonName: pokemonName! });
        })}
      >
        <label>
          height
          <input
            {...register("height", { valueAsNumber: true })}
            defaultValue={pokemon.height}
          />
        </label>
        <br />
        <label>
          weight
          <input
            {...register("weight", { valueAsNumber: true })}
            defaultValue={pokemon.weight}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
