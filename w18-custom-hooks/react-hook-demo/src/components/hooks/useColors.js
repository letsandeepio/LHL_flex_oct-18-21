import React, { useState } from 'react'

const useColors = (arrayOfColors) => {
  const [colorIndex, setColorIndex] = useState(0)

  const currentColor = arrayOfColors[colorIndex];

  const next = () => {
    if(arrayOfColors.length-1 > colorIndex) {
     setColorIndex((prev) => {
       return prev + 1;
     });
    }
  }

  const back = () => {
    if(colorIndex > 0){
  setColorIndex((prev) => {
    return prev - 1;
  });
    }
    
    };

 return {
   currentColor,
   next,
   back
 };
}

export default useColors