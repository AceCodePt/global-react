import { useState } from "react";

export default function MainForm() {
  const [pokemonName, setPokemonName] = useState("");
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          fetch(new URL("pokemon", "http://localhost:3000"), {
            method: "POST",
            body: JSON.stringify({
              name: pokemonName,
            }),
          }).then(console.log);
        }}
      >
        <input
          value={pokemonName}
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
        />
        <button type="submit">Create Pokemon</button>
      </form>
    </>
  );
}
