import React, { useState } from 'react'

const FunComponent = ({ someProps }) => {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter((prev)=>prev+1);
  }

  return (
    <>
      <h2>FunComponent</h2>
      <p>My Props: {someProps}</p>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

export default FunComponent