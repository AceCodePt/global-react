import { useContext } from "react";
import Counter from "./Counter";
import { CounterContext } from "./CounterContext";
import { useCounter } from "./CustomHook";

export default function CounterPage() {
  const counterLogic = useCounter();
  return (
    <div>
      <CounterContext.Provider
        value={{
          count: counterLogic.count,
          increment: counterLogic.increment,
          decrement: counterLogic.decrement,
          reset: counterLogic.reset,
        }}
      >
        <Counter {...counterLogic} />
        <Comp1 />
      </CounterContext.Provider>
    </div>
  );
}

export function Comp1() {
  return <Comp2 />;
}

export function Comp2() {
  return <Comp3 />;
}
export function Comp3() {
  return <Comp4 />;
}
export function Comp4() {
  const counterContext = useContext(CounterContext);
  return <button onClick={counterContext.reset}> Reset </button>;
}
