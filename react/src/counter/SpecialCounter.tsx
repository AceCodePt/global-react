import { useCounter } from "./CustomHook";

export default function SpecialCounter() {
  const counterLogic = useCounter(12);
  console.log("render special");
  return (
    <div>
      {counterLogic.count}
      <button onClick={counterLogic.increment}>Increment</button>
      <button onClick={counterLogic.decrement}>Decrement</button>
    </div>
  );
}
