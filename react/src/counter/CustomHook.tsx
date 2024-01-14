import { useState } from "react";

export const useCounter = (changeBy: number = 1) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + changeBy);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - changeBy);
  };
  return {
    count,
    increment,
    decrement,
  };
};
