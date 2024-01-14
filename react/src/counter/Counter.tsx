import { sCounter as sCounter } from "./CustomHook";

export default function Counter() {
  const counterLogic = sCounter();
  return (
    <div>
      {counterLogic.count}
      <button onClick={counterLogic.increment}>Increment</button>
      <button onClick={counterLogic.decrement}>Decrement</button>
    </div>
  );
}
