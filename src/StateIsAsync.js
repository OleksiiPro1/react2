import { useState } from 'react';

export default function StateIsAsync() {
  const [title, setTitle] = useState('First Title');
  console.log();
  return (
    <div>
      <h1>{title}</h1>
      <button
        onClick={(event) => {
          //console.log('click');
          setTitle('Updated Title');
        }}
      >
        Click me to update title
      </button>
    </div>
  );
}
