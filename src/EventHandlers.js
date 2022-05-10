import { useState } from 'react';

export default function EventHandlers() {
  const [name, setName] = useState('');
  return (
    <>
      <button onClick={() => alert('hello')}>Alert</button>
      <div />
      <input
        value={name}
        onChange={(event) => setName(event.currentTarget.value)}
      />
      Name: {name}
    </>
  );
}
