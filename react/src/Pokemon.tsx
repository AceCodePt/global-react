import { useState } from "react";

export default function Pokemon(props: {
  name: string;
  healthPoints: number;
  abilities: string[];
  fainted: () => void;
}) {
  const [healthPointsState, setHealthPointState] = useState(props.healthPoints);

  if (healthPointsState <= 0) {
    props.fainted();
    return <>{props.name} fainted</>;
  }

  return (
    <>
      <div>{props.name}</div>
      <div>
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
      </div>
      {/* <div> */}
      {/*   {props.abilities.map((ability) => { */}
      {/*     return <PokemonAbility name={ability} />; */}
      {/*   })} */}
      {/* </div> */}
    </>
  );
}
