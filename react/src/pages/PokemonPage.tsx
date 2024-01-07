import { useParams } from "react-router-dom"
import Pokemon from "../Pokemon"

export default function PokemonPage() {
  const params = useParams()
  return (
    <>
      <Pokemon name={params.pokemonName} healthPoints={50} />
    </>
  )
}
