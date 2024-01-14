export default function Counter(props: {
  count: number;
  increment: () => void;
  decrement: () => void;
}) {
  console.log("render regular");
  return (
    <>
      <div>
        {props.count}
        <button onClick={props.increment}>Increment</button>
        <button onClick={props.decrement}>Decrement</button>
      </div>
    </>
  );
}
