import React from 'react'
import useColors from './hooks/useColors';

const Colors = () => {
  const arrayOfColors = ["red", "green", "blue", "magenta"]

  const {
   currentColor,
   next,
   back
 } = useColors(arrayOfColors);

  return (
    <>
      <h1>Colors</h1>
      <p>Color name: </p>

      <div
        style={{
          height: '100px',
          width: '100px',
          backgroundColor: currentColor
        }}
      ></div>

      <button onClick={next}>Next</button>
      <button onClick={back}>Previous</button>
    </>
  );
}

export default Colors