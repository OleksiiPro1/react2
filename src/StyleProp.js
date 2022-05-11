import { useState } from 'react';

export default function StyleProp() {
  const [height, setHeight] = useState(100);
  return (
    <>
      <div style={{ backgroundColor: 'green', color: 'white', height: height }}>
        Height will change
      </div>
      <button onClick={() => setHeight(80)}>100</button>
      <button onClick={() => setHeight(50)}>60</button>
    </>
  );
}
