// Callback functions
const printValueAndIndex = (value, index, callee) => {
  console.log(`My values is ${value} and ${index} and ${callee} called me`);
};

const printValueMultipliedByIndex = (value, index) => {
  console.log(value * index);
};

const forEachInReverse = (array, cb) => {
  for (let i = array.length - 1; i >= 0; i--) {
    cb(array[i], i, 'forEachInRevers');
  }
};

const forEach = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    cb(array[i], i, 'forEach');
  }
};

forEachInReverse(numbersArr, printValueAndIndex);
forEachInReverse(numbersArr, printValueMultipliedByIndex);
