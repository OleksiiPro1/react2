import { useState } from 'react';

export default function StyleProp() {
  const [height, setHeight] = useState(100);
  return (
    <>
      <div style={{ backgroundColor: 'red', color: 'white', height: height }}>
        Height will change
      </div>
      <button onClick={() => setHeight(80)}>80</button>
      <button onClick={() => setHeight(50)}>50</button>
    </>
  );
}
