import { useState } from 'react';

export default function StatefulCounter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => setCount(-5)}>-5</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(100)}>100</button>
    </>
  );
}
