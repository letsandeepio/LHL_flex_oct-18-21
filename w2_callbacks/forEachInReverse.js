// 1. ForEachInReverse (Higher Order Function)
// 2. Loop through elements in the array reverse
// 3. Takes a callback as parameter
// 4. Run it against each element 


// End of the array (index) -> 
// Figour out the length of the array
// => array.length (10)
// => lastElement at 9 (10-1)
// => array.length - 1 will give you the last element of the array!

const numbersArr = [1,2,3,4,5,6,7,8,9,10]
                // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

const printValueAndIndex = (value, index) => {
  console.log(`My values is ${value} and ${index}`);
};

const printValueMultipliedByIndex = (value, index) => {
  console.log(value*index);
}

const forEachInReverse = (array, cb) => {
  for(let i = array.length - 1; i>=0 ; i--){
    cb(array[i], i);
  }
}


// forEachInReverse(numbersArr, printValueAndIndex);
forEachInReverse(numbersArr, printValueMultipliedByIndex);


