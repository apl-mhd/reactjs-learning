import React, { useState } from 'react';

export default function HookUsestate2() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count function : {count} </h1>
      <button onClick={handleIncrement}>Increment function</button>
    </div>
  );
}
