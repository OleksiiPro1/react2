import { useState } from 'react';

export default function ControlledComponentsForm() {
  const [email, setEmail] = useState('');

  return (
    <div>
      <label>
        Sing up for our newsletter
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
      </label>
      Email adress entered {email}
    </div>
  );
}
