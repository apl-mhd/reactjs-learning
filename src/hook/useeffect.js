import React, { useEffect, useState } from 'react';

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(0);

  useEffect(() => {
    console.log('fetch');
  }, [count]);
  return (
    <div>
      <h1>
        Count: {count} -{isLoading}
      </h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setIsLoading((isLoading) => isLoading + 1)}>
        toggle
      </button>
    </div>
  );
};

export default UseEffect;
