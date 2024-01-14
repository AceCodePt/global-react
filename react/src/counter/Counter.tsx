import { useCounter } from "./CustomHook";

export default function Counter() {
  const counterLogic = useCounter();
  return (
    <div>
      {counterLogic.count}
      <button onClick={counterLogic.increment}>Increment</button>
      <button onClick={counterLogic.decrement}>Decrement</button>
    </div>
  );
}
