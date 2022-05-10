let count = 0;
export default function LetNotUpdating() {
  return (
    <div>
      Count: {count}
      <button onClick={() => (count = count + 1)}>+</button>
      <button onClick={() => (count = count - 1)}>-</button>
    </div>
  );
}
